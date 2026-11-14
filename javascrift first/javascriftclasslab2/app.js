let count = 0; // төлөв (state)
const display = document.querySelector("#count");


function render() { display.textContent = count; }

document.querySelector("#plus")
    .addEventListener("click", () => { count++; render(); });
document.querySelector("#minus")
    .addEventListener("click", () => { count--; render(); });