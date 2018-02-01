export function AsyncFunc(text?: string, reject?: boolean) {
    let output = text || "hello";

    let length = output.length;

    if (output !== "") {
        output += "-"
    }

    output += length;

    if (reject) {
        return Promise.reject(new Error(output));
    } else {
        return Promise.resolve(output)
    }
};

export function Delay<T>(duration: number, promise: Promise<T>, text?: string) {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            if (text) {
                console.log(text);
            }
            promise.then(resolve).catch(reject);
        }, duration);
    });
}

export default AsyncFunc;
