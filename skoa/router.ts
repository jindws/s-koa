export default class Router {
    stack;

    constructor() {
        this.stack = [];
    }

    register(path, method, middleware) {
        const route = {
            path,
            method,
            middleware,
        };
        this.stack.push(route);
    }

    get(path, middleware) {
        this.register(path, 'get', middleware);
    }

    post(path, middleware) {
        this.register(path, 'post', middleware);
    }

    put(path, middleware) {
        this.register(path, 'put', middleware);
    }

    delete(path, middleware) {
        this.register(path, 'delete', middleware);
    }

    patch(path, middleware) {
        this.register(path, 'patch', middleware);
    }

    routes() {
        return async (ctx, next) => {
            const {url, method} = ctx;
            const _stack = this.stack.find((itm) => {
                return itm.method === method && itm.path === url;
            });
            if (_stack) {
                return _stack.middleware(ctx, next);
            }
            await next();
        };
    }
};
