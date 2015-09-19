## enml2html

parse ENML to HTML.

### Install

```
npm i enml2html --save
```

### Usage

```
enml2html(enml, resources, webApiUrlPrefix)
```

arguments:

- enml: {String} enml string, like:

  ```
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">\n<en-note>\n\t<ol>\n\t\t<li>list1</li>\n\t\t<li>list2</li>\n\t</ol>\n\t<div><en-todo checked="false"/>todo1</div>\n\t<div><en-todo checked="true"/>todo2(finish)</div>\n\t<div><en-media hash="680e0d4e68a4399a5199531903f6a031" type="image/png"/></div>\n\t<div>语音：</div><div><en-media hash="9ba6456965abe0d1b8911bf3a1fc8828" type="audio/x-m4a"/></div><div><br/></div>\n\t<div><br clear="none"/></div>\n\n\n</en-note>\n
  ```

- resources: {Array} resources array, like:

  ```
  [ { guid: 'c0eabce5-243f-4dcd-af2d-60b2c66281ed',
         noteGuid: '8c7d8959-c5b1-47e9-b5c1-1c8542c1608d',
         data:
          { bodyHash:
             { '0': 104,
               '1': 14,
               '2': 13,
               '3': 78,
               '4': 104,
               '5': 164,
               '6': 57,
               '7': 154,
               '8': 81,
               '9': 153,
               '10': 83,
               '11': 25,
               '12': 3,
               '13': 246,
               '14': 160,
               '15': 49 },
            size: 1318,
            _body: null },
         mime: 'image/png',
         width: null,
         height: null,
         duration: null,
         active: true,
         recognition: null,
         attributes:
          { sourceURL: null,
            timestamp: null,
            latitude: null,
            longitude: null,
            altitude: null,
            cameraMake: null,
            cameraModel: null,
            clientWillIndex: null,
            recoType: null,
            fileName: 'avatar.png',
            attachment: null,
            applicationData: null },
         updateSequenceNum: 312,
         alternateData: null },
       { guid: '31474ee1-b809-4c14-adbb-89229ccdc025',
         noteGuid: '8c7d8959-c5b1-47e9-b5c1-1c8542c1608d',
         data:
          { bodyHash:
             { '0': 155,
               '1': 166,
               '2': 69,
               '3': 105,
               '4': 101,
               '5': 171,
               '6': 224,
               '7': 209,
               '8': 184,
               '9': 145,
               '10': 27,
               '11': 243,
               '12': 161,
               '13': 252,
               '14': 136,
               '15': 40 },
            size: 81712,
            _body: null },
         mime: 'audio/x-m4a',
         width: 0,
         height: 0,
         duration: null,
         active: true,
         recognition: null,
         attributes:
          { sourceURL: null,
            timestamp: null,
            latitude: null,
            longitude: null,
            altitude: null,
            cameraMake: null,
            cameraModel: null,
            clientWillIndex: null,
            recoType: null,
            fileName: 'Evernote 20150901 11:51:39.m4a',
            attachment: false,
            applicationData: null },
         updateSequenceNum: 313,
         alternateData: null } ]
  ```

- webApiUrlPrefix: {String} webApiUrlPrefix, like: 

  ```
  https://sandbox.evernote.com/shard/s1
  ```

### Example

see [test](./test/enml2html.js).

### Test

```
npm test
```

### License

MIT
