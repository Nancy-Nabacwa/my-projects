const todoListContainer = document.querySelector(".todoListContainer");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");
const toggleScreen = ()=>{
    todoListContainer.classList.toggle("show-category");
}
menuBtn.addEventListener("click", toggleScreen)
backBtn.addEventListener("click", toggleScreen)

const addTaskBtn = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackground = document.querySelector(".black-background");


const toggleAddTaskForm = ()=>{
    addTaskForm.classList.toggle("active");
    blackBackground.classList.toggle("active");
    addTaskBtn.classList.toggle("active");
};

addTaskBtn.addEventListener("click", toggleAddTaskForm);
blackBackground.addEventListener("click", toggleAddTaskForm);

let categories = [
    {
        title:"Personal",
        img:"personal.png",
    },
    {
        title:"Classwork",
        img:"personal.png",
    }
    
]