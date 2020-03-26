// var btnNew = document.getElementById('btnAdd');
// btnNew.onclick = addNewItem;

// function addNewItem() {
//     var listItem = document.createElement('li');
//     listItem.innerText = "Hello";

//     var list = document.getElementById('todolist');
//     list.appendChild(listItem);

// }

var totalItems = 0;

function updateItemStatus(){
    var chId = this.id.replace('cb_','');
    var itemText = document.getElementById('item_' + chId);

    if(this.checked) {
        itemText.className = 'checked';
    } else {
        itemText.className = '';
    }
}

function addNewItem(list, itemText) {
    totalItems++;

    var listItem = document.createElement('li');
    var checkBox = document.createElement('input');
    checkBox.type = 'checkBox';
    checkBox.id = 'cb_' + totalItems;
    checkBox.onclick = updateItemStatus;

    var span = document.createElement('span');
    span.id = 'item_' + totalItems;
    span.innerText = itemText;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);
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
