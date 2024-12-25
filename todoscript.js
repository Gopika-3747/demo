const inputBox = document.getElementById("input1");
const listContain= document.getElementById("list-container");
const addButton = document.getElementById("addButton");
function addtask() {
    const task = inputBox.value.trim();

    if (inputBox.value==""){
        alert("Please write your task!");
    }
    else {
        let li = document.createElement('li');
        
        const checkboxin= document.createElement('div');
        checkboxin.classList.add("checkbox");
        
        const labelin =document.createElement('label');
        labelin.innerText= task;

        const removeButton = document.createElement('button');
        removeButton.classList.add("remove-btn");
        removeButton.innerHTML='<i class="fa fa-times">';

        li.appendChild(checkboxin);
        li.appendChild(labelin);
        li.appendChild(removeButton);

        listContain.appendChild(li);

        inputBox.value="";
        removeButton.addEventListener("click",function() {
            li.remove();
            saveData();
        });
        checkboxin.addEventListener("click",function() {
            li.classList.toggle("checked");
            saveData();
        })
        saveData();
    }   
}
addButton.addEventListener("click",addtask);

inputBox.addEventListener("keypress",function(e) {
    if (e.key==="Enter"){
        addtask();
    }
})
function saveData () {
    localStorage.setItem("data",listContain.innerHTML);
}
function showdata () {
    listContain.innerHTML=localStorage.getItem('data');

    const removeButtons =document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
        button.addEventListener("click",function() {
            button.closest("li").remove();
            saveData();
        });
    });
    const checkboxes =document.querySelectorAll(".checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("click",function() {
            checkbox.closest("li").classList.toggle("checked");
            saveData();
        });
    });
}

showdata();