'use strict';

const assert = require('assert');
const enml2html = require('../lib/enml2html');
const note = require('./data/note');

const webApiUrlPrefix = 'https://sandbox.evernote.com/shard/s1';

const html = enml2html(note.content, note.resources, webApiUrlPrefix);
const str = '<div class="enNote" style="" title="" lang="" xml:lang="" dir=""><ol><li>list1</li><li>list2</li></ol><div><input type="checkbox">todo1</div><div><input type="checkbox" checked>todo2(finish)</div><div><img class="enMedia" src="https://sandbox.evernote.com/shard/s1/res/c0eabce5-243f-4dcd-af2d-60b2c66281ed" hash="680e0d4e68a4399a5199531903f6a031" align="" alt="avatar.png" longdesc="" width="" height="" border="" hspace="" vspace="" usemap="" style="" title="" lang="" xml:lang="" dir=""></div><div>&#x8BED;&#x97F3;&#xFF1A;</div><div><audio class="enMedia" src="https://sandbox.evernote.com/shard/s1/res/31474ee1-b809-4c14-adbb-89229ccdc025" hash="9ba6456965abe0d1b8911bf3a1fc8828" style="" title="" lang="" xml:lang="" dir=""></audio></div><div><br></div><div><br clear="none"></div></div>';

assert.deepEqual(html, str);
