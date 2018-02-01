import { AsyncFunc, Delay } from "./common";

function promise() {
    let timer = Date.now();
    return Promise.all([
        Delay(30, AsyncFunc("a"), "running a"),
        Delay(10, AsyncFunc("b"), "running b"),
        Delay(20, AsyncFunc("c"), "running c")
    ]).then((values) => {
        console.log(`[ ${
            values.map((value) => JSON.stringify(value)).join(", ")
        } ] ${ Date.now() - timer } ms`);

        timer = Date.now();

        return Delay(30, AsyncFunc("a"), "running a");
    }).then((value) => {
        return Promise.all([
            Promise.resolve(value),
            Delay(10, AsyncFunc("b"), "running b")
        ]);
    }).then(([value1, value2]) => {
        return Promise.all([
            value1,
            value2,
            Delay(20, AsyncFunc("c"), "running c")
        ]);
    }).then((values) => {
        console.log(`[ ${
            values.map((value) => JSON.stringify(value)).join(", ")
        } ] ${ Date.now() - timer } ms`);
    }).catch((error) => {
        console.error(error.message);
    });
}

async function asyncAwait() {
    let timer = Date.now();
    try {
        let values = await Promise.all([
            Delay(30, AsyncFunc("a"), "running a"),
            Delay(10, AsyncFunc("b"), "running b"),
            Delay(20, AsyncFunc("c"), "running c")
        ]);
        console.log(`[ ${
            values.map((value) => JSON.stringify(value)).join(", ")
        } ] ${ Date.now() - timer } ms`);

        timer = Date.now();

        values = [
            await Delay(30, AsyncFunc("a"), "running a"),
            await Delay(10, AsyncFunc("b"), "running b"),
            await Delay(20, AsyncFunc("c"), "running c")
        ]

        console.log(`[ ${
            values.map((value) => JSON.stringify(value)).join(", ")
        } ] ${ Date.now() - timer } ms`);
    } catch (error) {
        console.error(error.message);
    }
}

console.log("==== Promise ====");
promise().then(() => {
    console.log("==== Async/Await ====");
    return asyncAwait();
})
