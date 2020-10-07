function chain(args) {
    let result;

    let fn = {
        execute: () => this.result
    };

    Object.entries(args).forEach(([method, callback], i) => {
        fn[method] = (...a) => {
            if (i === 0) {
                this.result = callback(...a);
            } else {
                this.result = callback(this.result, ...a);
            }

            return fn;
        }
    });

    return fn;
}