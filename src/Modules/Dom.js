const dom = (user, score) => {
  const listBox = document.querySelector('#list-box');
  const listItem = document.createElement('li');
  listItem.textContent = `${user}: ${score}`;
  listItem.id = 'list-item';
  listItem.className = 'list-item';

  if (listBox.childElementCount % 2 === 1) {
    listItem.style.backgroundColor = 'skyblue';
  } else {
    listItem.style.backgroundColor = 'rgba(173, 216, 230, 0.404)';
  }
  
  listBox.appendChild(listItem);
};

export default dom;