const InputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(InputBox.value === ''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span)
    }
    InputBox.value = "";
    saveData()
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()