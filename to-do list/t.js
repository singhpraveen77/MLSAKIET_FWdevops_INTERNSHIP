document.addEventListener("DOMContentLoaded", function () {
    const myList = document.querySelector("#myList");
    const myInput = document.querySelector("#myInput");
    const addButton = document.querySelector("button");
    const removeButton = document.querySelector("#removeButton");
    let size=0;
    addButton.addEventListener("click", function () {
        const task = myInput.value.trim();
        if (task) {
            const li = document.createElement("li");
            li.textContent = task;
            myList.appendChild(li);
            myInput.value = "";
            size+=1;
        }
    });

    removeButton.addEventListener("click", function () {
        const lastChild = myList.lastChild;
        if (lastChild) {
            lastChild.remove();
            size-=1;
        }
    });

    myList.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.remove();
            size-=1;
        }
    });
});
