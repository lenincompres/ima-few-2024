
let selectedLink;

function markSelected(link){
  if(selectedLink !== undefined) {
    selectedLink.classList.remove("selected");
  }
  if(link) {
    link.classList.add("selected");
    selectedLink = link;
  }
}

async function loadContent(url, element){
  const response = await fetch(url);
  const data = await response.text();
  element.innerHTML = data;
}

loadContent("./pages/home.html", mainContent);

homeLink.onclick = () => {
  loadContent("./pages/home.html", mainContent);
  markSelected();
}

bioLink.onclick = () => {
  loadContent("./pages/bio.html", mainContent);
  markSelected(bioLink);
};

galleryLink.onclick = () => {
  loadContent("./pages/gallery.html", mainContent);
  markSelected(galleryLink);
};

contactLink.onclick = () => {
  loadContent("./pages/contact.html", mainContent);
  markSelected(contactLink);
};