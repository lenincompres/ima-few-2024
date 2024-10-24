
addButton.onclick = function(){
  addNewPet();
};

function addNewPet(){

  petsGalleryMain.innerHTML += `
    <section>
      <h2>${nameInput.value}</h2>
      <img src="${pictureInput.value}" alt="${nameInput.value}'s picture"/>
      <p>${nameInput.value} is ${ageInput.value} years old</p>
      <button>Remove</button>
    </section>
  `;

}