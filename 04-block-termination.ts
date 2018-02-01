import AsyncFunc from "./common";

function promise() {
    return AsyncFunc().then((value) => {
        return AsyncFunc(value);
    }).then((value) => {
        return AsyncFunc(value);
    }).then((value) => {
        console.log(`value: ${ value }`);
        
        if (value.length > 0) {
            throw new Error("terminate");
        }
        
        return AsyncFunc(value);
    }).then((value) => {
        console.log(value);
    }).catch((error) => {
        console.error(error.message);
    });
}

async function asyncAwait() {
    try {
        let value = await AsyncFunc();
        value = await AsyncFunc(value);
        value = await AsyncFunc(value);
        
        console.log(`value: ${ value }`);
        
        if (value.length > 0) {
            throw new Error("terminate");
        }
        
        value = await AsyncFunc(value);
        
        console.log(value);
    } catch (error) {
        console.error(error.message);
    }
}

console.log("==== Promise ====");
promise().then(() => {
    console.log("==== Async/Await ====");
    return asyncAwait();
})
