let imgSrc = "logo.jpg";


class Card extends HTMLElement {

  suit = "*";

  char = "2";

  constructor(char, suit) {
    super();
    this.suit = suit;
    this.char = char;
    this.innerHTML = char + suit;
    this.classList.add("card");
    this.onclick = () => this.flip();
    this.style.color = Card.getColor(this.suit);
  }

  hide() {
    this.classList.add("flipped");
  }

  show() {
    this.classList.remove("flipped");
  }

  flip() {
    this.classList.toggle("flipped");
  }

  static SPADE = "♠";
  static HEART = "♥";
  static CLUB = "♣";
  static DIAMOND = "♦";

  static suits = [Card.SPADE, Card.HEART, Card.CLUB, Card.DIAMOND];

  static chars = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  static getColor(suit) {
    if(suit === Card.SPADE) return "darkslateblue";
    if(suit === Card.HEART) return "brown";
    if(suit === Card.CLUB) return "teal";
    if(suit === Card.DIAMOND) return "darkgoldenrod";
  };

}

customElements.define('app-card', Card);
export default Card;