// var btnNew = document.getElementById('btnAdd');
// btnNew.onclick = addNewItem;

// function addNewItem() {
//     var listItem = document.createElement('li');
//     listItem.innerText = "Hello";

//     var list = document.getElementById('todolist');
//     list.appendChild(listItem);

// }

function addNewItem(list, itemText) {
    var listItem = document.createElement('li');
    listItem.innerText = itemText;
    list.appendChild(listItem);

}

var inputText = document.getElementById('inputText');
inputText.focus();

inputText.onkeyup = function(event) {
    if(event.which === 13){
        var itemText = inputText.value;
        //빈값에 대한 처리
        if(!itemText || itemText === "" || itemText === " ") {
            return false;
        }
        addNewItem(document.getElementById('todolist'), itemText);
        inputText.focus();
        inputText.select();
    }
}
// var btnNew = document.getElementById('btnAdd');

// btnNew.onclick = function(){
//     var innerText = document.getElementById('inputText');
//     var itemText = inputText.value;

    

//     addNewItem(document.getElementById('todoList'), itemText);
    
// }
