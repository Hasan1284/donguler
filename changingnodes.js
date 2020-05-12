// removing und changing nodes
//dom events

const taskList = document.querySelector('#task-list');

// removing element
// tasklist.remove();
//taskList.childNodes[1].remove();
// taskList.children[3].remove;

// taskList.removeChild(taskList.children[3]);
// ** removing attribute
// taskList.children[0].removeAttribute('class');
for(let i=0;i<taskList.children.length;i++){
    taskList.children[i].removeAttribute('class');
}
// ---
console.log(taskList);
