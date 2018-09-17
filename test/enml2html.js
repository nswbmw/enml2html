const assert = require('assert')
const enml2html = require('../lib/enml2html')
const note = require('./data/note')
const note2 = require('./data/note2')

const str1 = '<div class="enNote"><div><ol><li>one</li><li>two</li><li>three</li></ol><div><br></div></div><div><img class="enMedia" src="https:/www.evernote.com/shard/s221/sh/749b9e66-fd06-4553-85a4-e582d1bc00d0/92447ef24266f18a/res/459d7522-56cc-4ab5-bfed-6a322dd90f46/88515.jpg" hash="3909f9184a919e4b12a7f287de75c220" alt="88515.jpg"></div><div><br></div></div>'
assert.deepEqual(enml2html(note), str1)

const str2 = '<div class="enNote"><div><span>const</span><span>&#xA0;</span><span>cheerio</span><span>&#xA0;</span><span>=</span><span>&#xA0;</span><span>require</span><span>(</span><span>&apos;</span><span>cheerio</span><span>&apos;</span><span>)</span></div><div><span>const</span><span>&#xA0;</span><span>$</span><span>&#xA0;</span><span>=</span><span>&#xA0;</span><span>cheerio</span><span>.</span><span>load</span><span>(</span><span>&apos;</span><span>&lt;h2&#xA0;class=&quot;title&quot;&gt;Hello&#xA0;world&lt;/h2&gt;</span><span>&apos;</span><span>)</span></div><div><span>&#xA0;</span></div><div><span>$</span><span>(</span><span>&apos;</span><span>h2.title</span><span>&apos;</span><span>)</span><span>.</span><span>text</span><span>(</span><span>&apos;</span><span>Hello&#xA0;there!</span><span>&apos;</span><span>)</span></div><div><span>$</span><span>(</span><span>&apos;</span><span>h2</span><span>&apos;</span><span>)</span><span>.</span><span>addClass</span><span>(</span><span>&apos;</span><span>welcome</span><span>&apos;</span><span>)</span></div><div><span>&#xA0;</span></div><div><span>$</span><span>.</span><span>html</span><span>(</span><span>)</span></div></div>'
assert.deepEqual(enml2html(note2, true), str2)
