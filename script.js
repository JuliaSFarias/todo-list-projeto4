const buttonAdd = document.getElementById('criar-tarefa');
const buttonDelete = document.getElementById('apaga-tudo');
const buttonRemove = document.getElementById('remover-finalizados');
const input = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');

function changeBgColor(event) {
  const lastClicked = document.querySelector('.clicked-item');
  if (lastClicked) {
    lastClicked.classList.remove('clicked-item');
  }

  const item = event.target;
  item.classList.add('clicked-item');
}

function completedStatus(event) {
  const item = event.target;

  if (item.classList.contains('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
}

function addTask() {
  const text = input.value;

  if (text) {
    const item = document.createElement('li');

    item.addEventListener('click', changeBgColor);
    item.addEventListener('dblclick', completedStatus);

    item.textContent = text;
    list.appendChild(item);

    input.value = '';
  }
}

function deleteTasks() {
  const items = list.children;
  for (let index = items.length - 1; index >= 0; index -= 1) {
    items[index].remove();
  }
}

function removeTasks() {
  // const items = list.children;
  // for (let index = items.length - 1; index >= 0; index -= 1) {
  //     const item = items[index];
  //     if (item.classList.contains('completed')) {
  //         item.remove();
  //     }
  // }
  const items = document.querySelectorAll('.completed');
  for (let index = items.length - 1; index >= 0; index -= 1) {
    items[index].remove();
  }
}

buttonAdd.addEventListener('click', addTask);
buttonDelete.addEventListener('click', deleteTasks);
buttonRemove.addEventListener('click', removeTasks);
