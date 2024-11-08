
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
    wikipediaFrame.src = "https://en.wikipedia.org/wiki/" + selectElement.value + " cat";
  };
}).catch(error => {
  console.error(error);
});

document.body.style.backgroundColor = "lime";


/**
 * Grabbing an image with fetch
 */

const picURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/British_burmese_-_Andel_Alois_at_Cat_show.JPG/220px-British_burmese_-_Andel_Alois_at_Cat_show.JPG";

fetch(picURL).then(response => {
  return response.blob();
}).then(blob => {
  const url = URL.createObjectURL(blob);
  document.body.style.backgroundImage = `url(${url})`; 
});