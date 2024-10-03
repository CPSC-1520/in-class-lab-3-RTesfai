// Enter your code below.
console.log("Javascript sucessfully linked");

const resources = document.querySelector(".javascript-resources");
const showResourcesButton = document.querySelector("#show-resources");

showResourcesButton.addEventListener("click", (event)=>{
    resources.classList.remove("d-none");
});


resources.addEventListener("mouseover", (event)=>{
    console.log(event.target);
    event.target.classList.add("fw-bold");
});


resources.addEventListener("mouseout", (event)=>{
    event.target.classList.remove("fw-bold");
});


resources.addEventListener("click", (event)=>{
    event.target.classList.add("fst-italic");
});


