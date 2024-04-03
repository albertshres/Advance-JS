const todoList = JSON.parse(localStorage.getItem('todoList'))||  [
{
  name: 'make dinner',
  dueDate: '2022-12-22'
},

{
  name: 'wash dishes',
  dueDate: '2022-12-22'
}

];
displayInHtml();

function displayInHtml() {
  let todoHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div> ${name} </div>
      <div> ${dueDate} </div>
       
      
      <button class= "js-delete-button delete-button"
      onclick="
      todoList.splice(${i},1);
      displayInHtml();
      "
      >Delete</button>
     
      
      `;
      todoHtml += html;
  }
  // console.log(todoHtml);
  document.querySelector('.todoOutput').innerHTML = todoHtml;

}

function event_handle(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dueDateElement = document.querySelector('.js_due_date_input');

  const dueDate = dueDateElement.value;

  todoList.push({
    // name:name,
    // dueDate:dueDate
    name,
    dueDate
  });

  // console.log(todoList);

  inputElement.value = '';
  dueDateElement.value='';

  displayInHtml();
  saveToLocalStorage();
}

function saveToLocalStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}

