const urlNative = require('url');
const path = require('path');

export const parse = url => {
  return urlNative.parse(url, true);
};
export const stringify = urlObject => {
  return urlNative.format({ ...urlObject, search: undefined });
};


export default {
  getParams(url) {
    return parse(url).query;
  },
  setQuery(url, newQuery) {
    const urlObject = parse(url);
    Object.keys(newQuery).forEach(key => {
      const val = newQuery[key];
      if (['', undefined, null].includes(val)) {
        delete urlObject.query[key];
      } else {
        urlObject.query[key] = val;
      }
    });
    return stringify({ ...urlObject });
  }
}
