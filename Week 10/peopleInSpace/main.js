

DOM.set({
  width: "40em",
  margin: "5em auto",
  h1: "People in space",
  main: {
    h2: "THis is how mane people are in space right now",
    section: {
      id: "listElement",
      display: "flex",
      flexWrap: "wrap",
      margin: "1em",
      height: "20em",
      backgroundColor: "wheat",
      innerText: "some text",
    },
  },
});


async function loadPeople(){
  let response = await fetch("http://api.open-notify.org/astros.json");
  let json = await response.json();
  for(let person of json.people){
    listElement.set({
      section:{ 
        margin: "1em",
        padding: "0.5em",
        backgroundColor: "#ddd",
        h3: person.name,
        p: "is stationed on the " + person.craft,
      }
    });
  }
};
loadPeople();

