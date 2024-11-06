
// This is a comment line 
/* This is a comment block. It has a beginning and end markup. */

// These are variable, they hold a value. The command "let" creates the variable
let myNum = 10;
let myName = 'Lenin';

// Values can be numbers or strings: "A sequence of letters"

console.log('This page shows quare values.');

// pageHeading was declared as a object of the kind HTML element but giving it and id in the index.html
pageHeading.innerHTML = 'Hello: ' + myName;

// This is a function called squares
function squares(val){
  /* 
    a function is set of commands that can be "called" or "invoked"at any moment in you code to do a particular task. This one
  */

  displayText.innerHTML = '';

  // this is a "for loop"
  for(let i = 1; i <= val; i++){

    displayText.innerHTML += `
      <p>
        The square of ${i} is: ${i * i}.
      </p>
    `;
    // backtick quotes allow you to have character strings in multiple lines and incorporate variablea and code inside a markup: ${}

  }

};

maxNumInput.oninput = function(){
  squares(maxNumInput.value);
}


clearButton.onclick = function(){
  displayText.innerHTML = '';
  maxNumInput.value = 1;
}

bgColorInput.onchange = function(){
  document.body.style.backgroundColor = bgColorInput.value;
  
  // Maybe if the color is too dark, the text should become white
  let lightness = hexToLightness(bgColorInput.value);
  console.log(lightness);
  if(lightness < 50){
    document.body.style.color = 'white';
  } else {
    document.body.style.color = 'black';
  }
}