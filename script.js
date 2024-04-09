
let inputBox = document.getElementById('input-box');
let list = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
    alert("Please Enter Your Task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        let removeButton = document.createElement("button");
        removeButton.innerHTML = "X";
        removeButton.className = "remove-button";
        removeButton.onclick = function() {
        li.remove();
        saveTasks();
        };
        li.appendChild(removeButton);
    }
    inputBox.value = '';
    saveTasks();


};

list.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    }
    

});
