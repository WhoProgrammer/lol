

// menu

let hover = document.querySelectorAll(".h1")
hover.forEach((e) => {
    e.innerHTML = e.innerText.split('').map((letters, i) => `<div class="hover">${letters}</div>`).join('')
})
let hoverinner = document.querySelectorAll(".hover")
hoverinner.forEach((e) => {
    e.innerHTML = e.innerText.split('').map((letters, i) => `<div class="txt">${letters}</div>`).join('')
})

document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll('.hover');

    function getRandomDiv() {
        const randomIndex = Math.floor(Math.random() * divs.length);
        return divs[randomIndex];
    }

    function addActiveClass() {
        const randomDiv = getRandomDiv();
        randomDiv.classList.add('active');

        setTimeout(() => {
            randomDiv.classList.remove('active');
        }, 1000);
    }

    setInterval(addActiveClass, 200);
});
// 
let cursorItembig = (querySelectorAll) => {
    document.querySelectorAll(querySelectorAll).forEach((e) => e.classList.add("cursor-scale"))
}
let cursorItemsmall = (querySelectorAll) => {
    document.querySelectorAll(querySelectorAll).forEach((e) => e.classList.add("cursor-scale"))
document.querySelectorAll(querySelectorAll).forEach((e) => e.classList.add("small"))
}
document.querySelectorAll(".btn").forEach((e) => e.classList.remove("small")) 
cursorItembig(".hover")
cursorItembig(".btn")
cursorItembig(".contact .cont")
cursorItemsmall("p")
cursorItemsmall(".p")
cursorItemsmall("a")
cursorItemsmall(".sidebar__icon")

// skill section

