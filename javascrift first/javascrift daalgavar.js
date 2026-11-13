
let result = "";
let count = 0;

for (let n = 2; n <= 50; n++) {
    let anhni = true;

    if (n > 2 && n % 2 === 0) {
        anhni = false;
    }

    if (n > 3 && n % 3 === 0) {
        anhni = false;
    }

    if (n > 5 && n % 5 === 0) {
        anhni = false;
    }

    if (anhni === true) {
        result += n + " ";
        count++;
    }
}

console.log(result);
console.log("Нийт: " + count);
