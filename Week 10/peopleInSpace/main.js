
/**
 * With the DOM.js library linked on the index page we get a "syntactic sugar".
 * It allows us to write HTML and CSS programatically in JS object notation.
 * The use of the DOM.set method, adds elements and properties to the DOM—inside the document.body.
 */

DOM.set({
  width: "40em",
  margin: "5em auto",
  h1: "People in space",
  main: {
    h2: "This is how many people are in space right now.",
    section: {
      id: "listElement",
      display: "flex",
      flexWrap: "wrap",
      margin: "1em",
      backgroundColor: "wheat",
      innerText: "some text",
    },
  },
});

/**
 * The use of async and await, also provide a type of syntactic sugar.
 * It allows us to use fetch (and other promise methods) in a line of code—
 * simulating a pause or wait in the code execution.
 * await can only be used inside an asychronous function.
 */
async function loadPeople(){
  let response = await fetch("http://api.open-notify.org/astros.json");
  let json = await response.json();
  for(let person of json.people){
    /**
     * The set method from the DOM.js' library is available for all HTTML elements.
     */
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

