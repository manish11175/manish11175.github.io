// grab all the elements 
var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filter = document.getElementById('filter')

//form submit event 
form.addEventListener('submit', addItem)
// delte the list item
itemList.addEventListener('click', removeItem)
// filter event
filter.addEventListener('keyup', filterItems)

// add an item 

function addItem(e) {
    e.preventDefault()

    var newItem = document.getElementById('item').value;

    // creating a new list element
    var li = document.createElement('li');
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))

    // create a del button
    var deleteBtn = document.createElement('button')
    // added class to the btn
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    deleteBtn.id="1"
    // append btn to li
    li.appendChild(deleteBtn)
    // append li to list 
    itemList.appendChild(li)
}

function removeItem(e) {
    
    const list1=document.getElementById(e.target.id);
   console.log(li1);
   itemList.removeChild(li1);

}

function filterItems(e) {
    // grab text 
    // serched item visible, rest are blocked 
}