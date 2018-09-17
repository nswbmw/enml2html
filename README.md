## enml2html

parse ENML to HTML, used by [everblog](https://github.com/everblogjs/everblog).

### Usage

```js
enml2html(note)
```

`note` should like:

```json
{
  "guid": "749b9e66-fd06-4553-85a4-e582d1bc00d0",
  "title": "test",
  "content": "<!DOCTYPE en-note SYSTEM \"http://xml.evernote.com/pub/enml2.dtd\"><en-note><div><ol><li>one</li><li>two</li><li>three</li></ol><div><br /></div></div><div><en-media hash=\"3909f9184a919e4b12a7f287de75c220\" type=\"image/jpeg\" /></div><div><br /></div></en-note>",
  "contentHash": Buffer.from([7, 241, 224, 106, 90, 120, 186, 12, 120, 82, 47, 101, 12, 173, 121, 253]),
  "contentLength": 257,
  "created": 1514433113000,
  "updated": 1514433136000,
  "deleted": null,
  "active": true,
  "updateSequenceNum": 1703,
  "notebookGuid": "c45d6725-4194-4dfc-844f-e9e5e408f2f9",
  "tagGuids": null,
  "resources": [{
    "guid": "459d7522-56cc-4ab5-bfed-6a322dd90f46",
    "noteGuid": "749b9e66-fd06-4553-85a4-e582d1bc00d0",
    "data": {
      "bodyHash": Buffer.from([57, 9, 249, 24, 74, 145, 158, 75, 18, 167, 242, 135, 222, 117, 194, 32]),
      "size": 40836,
      "body": null
    },
    "mime": "image/jpeg",
    "width": 1920,
    "height": 1200,
    "duration": null,
    "active": true,
    "recognition": {
      "bodyHash": Buffer.from([168, 93, 106, 109, 246, 31, 140, 25, 234, 199, 138, 176, 6, 51, 40, 43]),
      "size": 925,
      "body": null
    },
    "attributes": {
      "sourceURL": null,
      "timestamp": null,
      "latitude": null,
      "longitude": null,
      "altitude": null,
      "cameraMake": null,
      "cameraModel": null,
      "clientWillIndex": null,
      "recoType": null,
      "fileName": "88515.jpg",
      "attachment": false,
      "applicationData": null
    },
    "updateSequenceNum": 1702,
    "alternateData": null
  }],
  "attributes": {
    "subjectDate": null,
    "latitude": 39.95982205371607,
    "longitude": 116.45540019295498,
    "altitude": 45.10775375366211,
    "author": "nswbmw",
    "source": "desktop.mac",
    "sourceURL": null,
    "sourceApplication": null,
    "shareDate": 1514433145000,
    "reminderOrder": null,
    "reminderDoneTime": null,
    "reminderTime": null,
    "placeName": null,
    "contentClass": null,
    "applicationData": null,
    "lastEditedBy": null,
    "classifications": null,
    "creatorId": null,
    "lastEditorId": null,
    "sharedWithBusiness": null,
    "conflictSourceNoteGuid": null,
    "noteTitleQuality": null
  },
  "tagNames": null,
  "sharedNotes": null,
  "restrictions": null,
  "limits": null,
  "webApiUrlPrefix": "https://www.evernote.com/shard/s221/",
  "noteKey": "92447ef24266f18a",
  "tags": []
}
```

Will convert to:

```html
<div class="enNote">
  <div>
    <ol>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ol>
    <div><br></div>
  </div>
  <div>
    <img class="enMedia" src="https:/www.evernote.com/shard/s221/sh/749b9e66-fd06-4553-85a4-e582d1bc00d0/92447ef24266f18a/res/459d7522-56cc-4ab5-bfed-6a322dd90f46/88515.jpg" hash="3909f9184a919e4b12a7f287de75c220" alt="88515.jpg">
  </div>
  <div><br></div>
</div>
```

### Example

see [test](./test/enml2html.js).

### Test

```sh
$ npm test
```

### License

MIT
