
let titleEl = document.querySelector("#title")
console.dir(titleEl);
titleEl.style.textAlign = "center"
let pEl = document.querySelector(".cool")
console.log(pEl)
pEl.style.color = "red"
let commentEls = document.querySelectorAll(".comment")
console.log(commentEls)
for (let commentEl of commentEls) {
    commentEl.style.color = "pink"
}