const Dom = (Name, Score) => {
	const listBox = document.querySelector('#list-box');
	const listItem = document.createElement('li');
	listItem.textContent = Name + ': ' + Score;

	listItem.id = 'list-item';
	listItem.className = 'list-item';

	listBox.appendChild(listItem);
};

export default Dom;