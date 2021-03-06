import AsyncFunc from "./common";

function promise() {
    return AsyncFunc().then((value) => {
        let partValue = value.substr(3);

        return Promise.all([
            Promise.resolve(partValue),
            AsyncFunc(partValue)
        ]);
    }).then(([partValue, value]) => {
        console.log(`${ partValue } ${ value }`);
    }).catch((error) => {
        console.error(error.message);
    });
}

async function asyncAwait() {
    try {
        let value = await AsyncFunc();
        let partValue = value.substr(3);
        
        value = await AsyncFunc(partValue);
        
        console.log(`${ partValue } ${ value }`);
    } catch (error) {
        console.error(error.message);
    }
}

console.log("==== Promise ====");
promise().then(() => {
    console.log("==== Async/Await ====");
    return asyncAwait();
})
