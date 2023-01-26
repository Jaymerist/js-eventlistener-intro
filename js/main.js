// this is our javascript file.

// intercept the form.
let budgetForm = document.querySelector("#budget-form")
// focus to the first element
budgetForm.elements["budget-title"].focus()

// get the form element values for title, description and amount
budgetForm.addEventListener("submit", (event)=> {
    // prevent the form from being submitted.
    event.preventDefault()
    // get the form values.
    let title = event.target.elements["budget-title"].value
    let description = event.target.elements["budget-description"].value
    let amount = event.target.elements["amount"].value

    // add the item
    addLineItem(title, amount, description)

    // update current budget total
    updateTotal(amount)


    //reset the values
    event.target.elements["budget-title"].value = ""
    event.target.elements["budget-description"].value =""
    event.target.elements["amount"].value = ""

    // focus back at the title
    event.target.elements["budget-title"].focus()
})



// add a budget item create function
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/
let budgetList = document.querySelector(".current-budget")
    
const addLineItem = (title, amount, description) => {
    budgetList = document.querySelector(".current-budget")
    let newItem = `<li class="list-group-item list-group-item-action" aria-current="true">
        ${title} (${amount}$) - ${description}
    </li>`
    budgetList.innerHTML = budgetList.innerHTML + newItem
}

// add a updateTotal function

const updateTotal = (amount) => {
    let budgetTotalElement = document.querySelector("#budget-total")
    budgetTotalElement.innerHTML = parseInt(budgetTotalElement.innerText) + parseInt(amount) 
}

budgetList.addEventListener("mouseover", (event)=> {
    // console.log(event.target)
    // add the is active to the class.
    console.log(event.target)
    event.target.classList.add("active")
})


// // add an event listener on mouse out that remove the active class
budgetList.addEventListener("mouseout", (event)=> {
    console.log(event.target)
    // add the is active to the class.
    event.target.classList.remove("active")
})
