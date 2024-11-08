/**
 * Declaring your aoo entry code (main.js) as being of type "module", allows you to import other js files in your folder, without creating the link in the HTML.
 * This files you import, should have exportable variables (classes, methods, constants), you are going to use in yout code.
 */

import Card from "./Card.js";

let cards = [];

for(let suit of Card.suits){
  for(let char of Card.chars){
    let myCard = new Card(char, suit);
    deckArticle.append(myCard);
    cards.push(myCard);
  }
}

flipAllButton.onclick = () => {
  for(let card of cards){
    card.flip();
  }
}

showAllButton.onclick = () => {
  for(let card of cards){
    card.show();
  }
}

hideAllButton.onclick = () => {
  for(let card of cards){
    card.hide();
  }
}

shuffleButton.onclick = () => {
  cards.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  });
  for(let card of cards){
    deckArticle.append(card);
  }
}