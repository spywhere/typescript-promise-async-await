import AsyncFunc from "./common";

function promise() {
    return AsyncFunc().then((value) => {
        return AsyncFunc(value);
    }).then((value) => {
        return AsyncFunc(value, true);
    }).then((value) => {
        console.log(`value: ${ value }`);
        
        return AsyncFunc(value);
    }, (error) => {
        console.log(`reject message: ${ error.message }`);

        return AsyncFunc("continue");
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

        try {
            value = await AsyncFunc(value, true);
            
            console.log(`value: ${ value }`);

            value = await AsyncFunc(value);
        } catch (error) {
            console.log(`reject message: ${ error.message }`);

            value = await AsyncFunc("continue");
        }
        
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
