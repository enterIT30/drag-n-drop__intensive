const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(e) {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragend(e) {
  e.target.classList.remove('hold', 'hide');
}

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover); // элемент перетаскивания над
  placeholder.addEventListener('dragenter', dragenter); // заходим на территорию плхолд
  placeholder.addEventListener('dragleave', dragleave); // перетащили но вышли
  placeholder.addEventListener('drop', drop); // отпустили
}

function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.target.classList.add('hovered');
}
function dragleave(e) {
  e.target.classList.remove('hovered');
}
function drop(e) {
  e.target.classList.remove('hovered');
  e.target.append(item);
}
