'use strict';

module.exports = {
  bodyHashToString,
  genResourceUrl
};

function bodyHashToString(bodyHash) {
  let str = '';
  for (let i in bodyHash) {
    let hexStr = bodyHash[i].toString(16);
    if (hexStr.length === 1) {
      hexStr = '0' + hexStr;
    }
    str += hexStr;
  }
  return str;
}

function genResourceUrl(webApiUrlPrefix, noteGuid, noteKey, resourceGuid, filename) {
  return `${webApiUrlPrefix}/res/${resourceGuid}`;
}
