// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palette = document.querySelectorAll("#palette")
const currentColor = document.querySelector("#current-color")

palette.forEach((shade) => {
  shade.addEventListener("click", (event) => {
    event.preventDefault()
    currentColor.style.backgroundColor = event.target.style.backgroundColor
  })
})

const cells = document.querySelectorAll(".cell")

cells.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    event.preventDefault()
    event.target.style.backgroundColor = currentColor.style.backgroundColor
  })
})