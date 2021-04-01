import atob from 'atob';
// import _ from 'lodash';
import isEmpty from 'lodash/isEmpty';

const STORAGE_TOKEN_NAME = 'TOKEN';

/**
 * JWT的方案
 */
export default {
  parse() {
    let token = this.get();
    try {
      const arr = token.split('.');
      if (arr.length === 3) {
        token = atob(token.split(' . ')[1]);
      }
      return JSON.parse(token);
    } catch (ex) {
      throw ex;
    }
  },
  check() {
    try {
      const payload = this.parse();
      return !isEmpty(payload);
    } catch (ex) {
      this.remove();
      return false;
    }
  },
  get() {
    return localStorage.getItem(STORAGE_TOKEN_NAME);
  },
  save(token) {
    localStorage.setItem(STORAGE_TOKEN_NAME, token);
  },
  remove() {
    localStorage.removeItem(STORAGE_TOKEN_NAME);
  },
};
