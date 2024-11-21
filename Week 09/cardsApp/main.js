const SPADE = "♠";
const HEART = "♥";
const CLUB = "♣";
const DIAMOND = "♦";

let suits = [SPADE, HEART, CLUB, DIAMOND];

let chars = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let colorMap = {
  [SPADE]: "darkslateblue",
  [HEART]: "brown",
  "♣": "teal",
  "♦": "darkgoldenrod",
};

let cardElements = [];

for(let suit of suits){
  for(let char of chars){
    let elt = document.createElement("section");
    elt.innerHTML = char + suit;
    elt.classList.add("card");
    elt.style.color = colorMap[suit];
    elt.onclick = () => elt.classList.toggle("flipped");
    deckArticle.append(elt);
    cardElements.push(elt);
  }
}

flipAllButton.onclick = () => {
  for(let cardElement of cardElements){
    cardElement.classList.toggle("flipped");
  }
}

let showBtn = document.getElementById("showAllButton");
showBtn.onclick = () => {
  for(let cardElement of cardElements){
    cardElement.classList.remove("flipped");
  }
}

hideAllButton.onclick = () => {
  for(let cardElement of cardElements){
    cardElement.classList.add("flipped");
  }
}

shuffleButton.onclick = () => {
  cardElements.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  });
  for(let cardElement of cardElements){
    deckArticle.append(cardElement);
  }
}