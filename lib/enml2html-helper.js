'use strict';

export {
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

function genResourceUrl(webApiUrlPrefix, guid) {
  return `${webApiUrlPrefix}/res/${guid}`;
}
