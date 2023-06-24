const dom = (user, score) => {
  const listBox = document.querySelector('#list-box');
  const listItem = document.createElement('li');
  listItem.textContent = `${user}: ${score}`;
  listItem.id = 'list-item';
  listItem.className = 'list-item';

  listBox.appendChild(listItem);
};

export default dom;