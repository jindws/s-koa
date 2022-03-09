export default {
  set body(val) {
    this._body = val;
  },
  get body() {
    return this._body;
  },
  get status() {
    return this.res.statusCode;
  },
  set status(val) {
    this.res.statusCode = val;
  },
};
