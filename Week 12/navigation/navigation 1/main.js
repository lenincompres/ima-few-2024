async function loadContent(url, element){
  const response = await fetch(url);
  const data = await response.text();
  element.innerHTML = data;
  markLinkSelected();
}

loadContent("./components/header.html", pageHeader);
loadContent("./components/footer.html", pageFooter);
loadContent("./components/nav.html", pageNav);

function markLinkSelected(){
  let link = document.getElementById(window.selectedLink);
  if(link) {
    link.classList.add("selected");
  }
}