module.exports = {
    set body(val){
        this.response.body = val
    },
    get body(){
        return this.response.body
    },
    get status() {
        return this.response.status;
    },
    set status(val){
        this.response.status = val
    },
    get method(){
        return this.request.method
    },
    get url(){
        return this.request.url
    },

}