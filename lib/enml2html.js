const assert = require('assert')
const path = require('path')
const cheerio = require('cheerio')

module.exports = function enml2html (note, cleanMode = false) {
  let enml = note.content
  const resources = note.resources
  const webApiUrlPrefix = note.webApiUrlPrefix
  const noteKey = note.noteKey

  assert(webApiUrlPrefix, 'webApiUrlPrefix should exist!')
  assert(noteKey, 'noteKey should exist!')

  enml = enml.replace('<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">', '')

  let $ = cheerio.load(enml)
  $('en-note').each(function () {
    let self = $(this)
    self.css('background-color', self.attr('bgcolor'))
    self.css('color', self.attr('text'))
    self.replaceWith(`
      <div class="enNote" ${genStyle(self, ['name', 'style', 'title', 'lang', 'xml:lang', 'dir'])}>
        ${self.html()}
      </div>
    `)
  })

  $('en-media').each(function () {
    let self = $(this)
    let hash = self.attr('hash')
    let resource
    resources.forEach((item) => {
      if (Buffer.from(item.data.bodyHash).toString('hex') === hash) {
        resource = item
      }
    })
    if (!resource) {
      self.remove()
      return
    }
    switch (resource.mime) {
      case 'image/gif':
      case 'image/jpeg':
      case 'image/png':
        self.replaceWith(`
          <img class="enMedia" \
               src="${genResourceUrl(webApiUrlPrefix, resource.noteGuid, noteKey, resource.guid, resource.attributes.fileName)}" \
               hash="${Buffer.from(resource.data.bodyHash).toString('hex')}" \
               alt="${resource.attributes.fileName || ''}" \
               ${genStyle(self, ['style', 'title', 'lang', 'xml:lang', 'dir', 'width', 'height'])}
          />${self.html()}</img>
        `)
        break
      case 'audio/wav':
      case 'audio/mpeg':
      case 'audio/amr':
      case 'audio/x-m4a':
        self.replaceWith(`
          <audio class="enMedia" \
                 src="${genResourceUrl(webApiUrlPrefix, resource.noteGuid, noteKey, resource.guid, resource.attributes.fileName)}" \
                 hash="${resource.data.bodyHash.toString('hex')}" \
                 ${genStyle(self, ['style', 'title', 'lang', 'xml:lang'])}>
          </audio>
        `)
        break
      default:
        self.replaceWith(`
          <iframe class="enMedia" \
                  src="${genResourceUrl(webApiUrlPrefix, resource.noteGuid, noteKey, resource.guid, resource.attributes.fileName)}" \
                  hash="${resource.data.bodyHash.toString('hex')}" \
                  ${genStyle(self, ['style', 'title'])} \
                  frameborder="0">
          </iframe>
        `)
    }
  })

  $('en-todo').each(function () {
    let self = $(this)
    self.replaceWith(`
      <input type="checkbox" ${self[0].attribs.checked === 'true' ? 'checked' : ''}/>${self.parent().text()}
    `)
  })

  $('en-crypt').remove()

  // remove inline style
  if (cleanMode) {
    $('*').each(function () {
      $(this).removeAttr('style')
    })
  }
  // remove \n \s
  return $.html()
    .replace(/\s*\n+\s*/g, '')
    .trim()
}

function genResourceUrl (webApiUrlPrefix, noteGuid, noteKey, resourceGuid, filename) {
  return path.join(webApiUrlPrefix, `sh/${noteGuid}/${noteKey}/res/${resourceGuid}/${filename}`)
}

function genStyle (self, names) {
  names = Array.isArray(names) ? names : [names]
  return names.map((name) => {
    return self.attr(name) ? `${name}="${self.attr(name)}"` : ''
  }).join(' ')
}
