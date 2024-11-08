fetch("cats.json").then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  mainContent.innerHTML = `<h2>${data.description}</h2>`;
  let selectElement = document.createElement('select');

  mainContent.append(selectElement);
  for(let breed of data.cats){
    let breedElement = document.createElement('option');
    breedElement.innerHTML = breed;
    selectElement.append(breedElement);
  }

  selectElement.onchange = () => {
    wikipediaFrame.setAttribute("src", "https://en.wikipedia.org/wiki/" + selectElement.value + " cat");
  };

});

document.body.style.backgroundColor = "lime";