function get_todos() {
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function add() {
  var task = document.getElementById('task').value;

  var todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function confirmDelete() {
  if (confirm("Are You Sure?")) {
    return true;
  } 
  else {
    return false;
  }
}

function remove() {
  var id = this.getAttribute('id');
  var todos = get_todos();
  var con = confirmDelete();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function show() {
  var todos = get_todos();

  var html = '<ul>';
  for (var i = 0; i < todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="edit" id="' + i + '"><i class="fas fa-edit"></i></button>' +'<button class="remove" id="' + i + '"><i class="fas fa-trash"></i></button></li>';
  };
  html += '</ul>';

  document.getElementById('todos').innerHTML = html;

  var buttons = document.getElementsByClassName('remove');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  };
  var buttons = document.getElementsByClassName('edit');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', editMe);
  };
}

document.getElementById('add').addEventListener('click', add);
show()

function editMe(x) {
  var txt;
  var entry = prompt("Edit the entry", "");
  var id = this.getAttribute('id');
  var todos = get_todos();
  if (entry == null || entry == "") {
    txt = "User cancelled the prompt.";
  } else {
      x=get_todos();
      x[id]=entry;
      localStorage.setItem('todo', JSON.stringify(x));
      show_task()
  }
}



document.getElementById('add').addEventListener('click', add);
show();