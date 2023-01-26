// step 1: READ THE PDF (step 2 and 3 is READ THE PDF)

// ensure your js is linked.
console.log("javascript file linked")
// select the javascript list.
// to clarify not a single item but the entire list.
let linkList = document.querySelector(".list-group");
// add a mouse over link to the javascript list to highlight an item.
linkList.addEventListener("mouseover", (event)=> {
    console.log(event.target)
    event.target.classList.add("active")
})
// add an event listener on mouse out that remove the active class
linkList.addEventListener("mouseout", (event)=> {
    event.target.classList.remove("active")
})
// add an event listener that will open links in new tab.
linkList.addEventListener("click", (event)=> {
    event.preventDefault()
    window.open(event.target.href)
})

