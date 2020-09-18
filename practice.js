let array = [];

function makeObj(text) {
    const obj = {
        id: array.length,
        value : text
    }
    array.push(obj);
    return array;
}

makeObj("first");
makeObj("second");

console.log(array);
array.splice(0, 1)
console.log(array);