let addButton = document.querySelector('.add');
let list = document.querySelector('ol');
let count = 0;
addButton.addEventListener("click", () => {
    count++
    let newTask = document.querySelector('input').value
    let newTaskTextNode = document.createTextNode(newTask)
    let newListItem = document.createElement('li')
    newListItem.appendChild(newTaskTextNode)
    let removeButton = document.createElement('button')
    removeButton.innerText = "remove"
    removeButton.classList.add('remove')
    removeButton.setAttribute('id', count)
    newListItem.appendChild(removeButton)
    list.appendChild(newListItem)
    let thisRemoveButton = document.querySelector('.remove')
thisRemoveButton.addEventListener('click', (eventObject) => {
    let id = eventObject.target.id
    eventObject.target.parentNode.removeChild(id)

})
})
list.addEventListener("click", (eventObject) => {
eventObject.target.classList.add('done')

})
// let thisRemoveButton = document.querySelector('.remove')
// thisRemoveButton.addEventListener('click', (eventObject) => {
//     let id = eventObject.target.id
//     eventObject.target.parentNode.removeChild(id)

// })