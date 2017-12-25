const assert = require('assert')
const enml2html = require('../lib/enml2html')
const note = require('./data/note')

const html = enml2html(note)
const str = '<div class="enNote"><div><ol><li>one</li><li>two</li><li>three</li></ol><div><br></div></div><div><img class="enMedia" src="https:/www.evernote.com/shard/s221/sh/749b9e66-fd06-4553-85a4-e582d1bc00d0/92447ef24266f18a/res/459d7522-56cc-4ab5-bfed-6a322dd90f46/88515.jpg" hash="3909f9184a919e4b12a7f287de75c220" alt="88515.jpg"></div><div><br></div></div>'
assert.deepEqual(html, str)
