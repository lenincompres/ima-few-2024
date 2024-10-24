
addButton.onclick = () => addPet();

function addPet() {

  if (!validateField(nameInput)) return;
  if (!validateField(ageInput)) return;
  if (!validateField(pictureInput)) return;

  let pet = {
    name: nameInput.value,
    age: ageInput.value,
    picture: pictureInput.value,
  }

  let petElt = document.createElement('section');

  petElt.innerHTML += `
    <h2>${pet.name}</h2>
    <img src="${pet.picture}" alt="${pet.name}'s picture"/>
    <p>${pet.name} is ${pet.age} years old.</p>
  `;

  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = "delete";
  deleteBtn.onclick = () => petElt.remove();
  petElt.append(deleteBtn);

  petsDisplay.append(petElt);

  clearInputs();

}


function validateField(inputElt) {
  if (inputElt.value.trim() === '') {
    inputElt.classList.add("error");
    return false;
  } else {
    inputElt.classList.remove("error");
    return true;
  }
}


function clearInputs() {
  nameInput.value = '';
  ageInput.value = '';
  pictureInput.value = '';
}