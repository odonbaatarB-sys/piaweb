
let tasks = [

    {
        id: 1, text: "lekts unshih",
        done: true
    },
    {
        id: 2, text: "App bichih",
        done: false
    },
];

function render() {
    list.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        if (task.done) li.classList.add("done");
        li.addEventListener("click", () => toggleTask(task.id));
        const del = document.createElement("button");
        del.textContent = "ustgah";
        del.addEventListener("click", (e) => {
            e.stopPropagation();
            deleteTask(task.id);
        });
        li.append(del);
        list.append(li);
    })
}

form.addEventListener("submit",
    (e) => {
        e.preventDefault();
        tasks.push({
            id: Date.now(),
            text: input.value.trim(),
            done: false,
        });
        input.value = "";
        save();
        render();
    });


function toggleTask(id) {
    tasks = tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
    );
    save();
    render();
}


function deleteTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    save();
    render();
}
localStorage

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
render()