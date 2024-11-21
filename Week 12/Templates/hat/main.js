/**
 * Loads htnml content from a url and adds it to a container
 * @param string url 
 * @param HTMLElement container 
 */
async function loadHTML(url, container){
  const response = await fetch(url);
  container.innerHTML = await response.text();
}

loadHTML('./templates/home.html', mainContent);

pageTitle.onclick = () => {
  loadHTML('./templates/home.html', mainContent);
  markLinkSelected();
};

aboutNav.onclick = () => {
  loadHTML('./templates/about.html', mainContent);
  markLinkSelected(aboutNav);
};

projectsNav.onclick = () => {
  loadHTML('./templates/projects.html', mainContent);
  markLinkSelected(projectsNav);
};

contactNav.onclick = () => {};

let selectedLink;
function markLinkSelected(link) {
  if (selectedLink) {
    selectedLink.classList.remove("selected");
  }
  link.classList.add("selected");
  selectedLink = link;
}