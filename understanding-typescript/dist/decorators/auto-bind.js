// * Here for practice I've used AutoBind decorator although a simple bind would've sufficed
export function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
//# sourceMappingURL=auto-bind.js.map