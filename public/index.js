const imageForm = document.querySelector('#imageFrom');
const imageInput = document.querySelector('#imageInput');

imageForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const file = imageInput.file[0];
  console.log(file);
});
