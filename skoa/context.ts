export default {
    set body(val: string) {
        this.response.body = val;
    },
    get body() {
        return this.response.body;
    },
    get status() {
        return this.response.status;
    },
    set status(val) {
        this.response.status = val;
    },
    get method(): string {
        return this.request.method;
    },
    get url(): string {
        return this.request.url;
    },
};
