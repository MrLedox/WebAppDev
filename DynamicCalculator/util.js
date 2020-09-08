document.getElementById('add-item').addEventListener('click', () => {
  const itemName = document.querySelector('#items').value;
  const itemPrice = document.querySelector('#price').value;

  const listNode = document.createElement('li');
  const textNode = document.createTextNode(
    `name: ${itemName} price: ${itemPrice}`
  );

  listNode.append(textNode);
  document.getElementById('list-items').append(listNode);
});