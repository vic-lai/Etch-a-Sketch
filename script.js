
const container = document.querySelector("#container");

for(let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for(let i = 0; i < 16; i++) {
        let col = document.createElement("img");
        col.src="./images/transparent.png"
        col.className = "col";
        col.addEventListener("mouseover", () => {
            col.style.backgroundColor="black";
        })
        row.appendChild(col);
    }
    container.appendChild(row);
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = prompt("what size gride do you want? (max 30x30)");
    console.log(size);
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if(size > 30) {
        size = 30;
    }
    for(let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for(let i = 0; i < size; i++) {
            let col = document.createElement("img");
            col.src="./images/transparent.png"
            col.className = "col";
            col.addEventListener("mouseover", () => {
                col.style.backgroundColor="black";
            })
            row.appendChild(col);
        }
        container.appendChild(row);
    }
})