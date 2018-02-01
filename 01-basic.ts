import AsyncFunc from "./common";

function promise() {
    return AsyncFunc().then((value) => {
        console.log(value);
    }).catch((error) => {
        console.error(error.message);
    });
}

async function asyncAwait() {
    try {
        let value = await AsyncFunc();
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
