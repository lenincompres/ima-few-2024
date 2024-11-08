let imgSrc = "logo.jpg";

/**
 * A class is an object footprint to create "new" intances of.
 * All the properties (vairables, methods) as declared inside as js code.
 * And can be accessible with the preffix "this" refering to the instace object created.
 * Classes can "extend" other classes. In this case Card creates a type of HTML element.
 */

class Card extends HTMLElement {

  suit = "*";

  char = "2";

  constructor(char, suit) {
    /**
     * The super method calls the constructor of the class being extended (if any)
     * It basically says: first construct an instance of the extended class as you normally would.
     */
    super();
    this.suit = suit;
    this.char = char;
    /**
     * Since Card instances (or objects) ar HTMLElements, they inherit all the properties and methods of HTML elements/
     */
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

  /**
   * Static properties en methods, belong to the Class itself, not to the instaces in can create (construct).
   * These are accesible using the class name (which is conventional capitalized):
   *     Card.SPADE, Card.suits, Card.getColor()
   * You may have used static methods from teh Math class: 
   *     Math.random(), Math.round()
  */
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

/**
 * When extending the HTMLElement class you also need to define or declare to the browser the tag of associated with this new type of element.
 */
customElements.define('app-card', Card);

/**
 * JS files looking to be imported into other files must have exportable variables or methods. These are declared by writing export before declaring them.
 */
export const MY_NAME = "Lenin compres";

/**
 * You can also indicate a default export of your file.
 */
export default Card;