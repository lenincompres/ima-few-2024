const _myVariable = new Binder(false);

async function loadContent(url, element) {
  const response = await fetch(url);
  const data = await response.text();
  element.innerHTML = data;
};


DOM.set({
  header: {
    color: "red",
    h1: "Navigation excercise",
    label: _myVariable,
  },
  nav: {
    ul: {
      li: [{
        a: {
          href: "#bio",
          text: "Bio",
          backgroundColor: _myVariable.as(value => {
            if(value) return "green";
            return "red";
          }),
          onclick: () => {
            _myVariable.value = !_myVariable.value;
          },
        }
      }, {
        a: {
          href: "#gallery",
          text: "gallery",
        }
      }, {
        a: {
          href: "#contact",
          text: "Contact",
        }
      }]
    }
  },
  main: {
    p: _myVariable,
  },
  footer: {
    p: "Created by Lenin Compres for IMA Front-End Web",
  }
});