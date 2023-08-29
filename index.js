let cards = [
    {card: [1,"h"], img:"images/ace_of_hearts.png" },
    {card: [2,"h"], img: "images/2_of_hearts.png" },
    {card: [3,"h"], img: "images/3_of_hearts.png" },
    {card: [4,"h"], img: "images/4_of_hearts.png" },
    {card: [5,"h"], img: "images/5_of_hearts.png" },
    {card: [6,"h"], img: "images/6_of_hearts.png" },
    {card: [7,"h"], img: "images/7_of_hearts.png" },
    {card: [8,"h"], img: "images/8_of_hearts.png" },
    {card: [9,"h"], img: "images/9_of_hearts.png" },
    {card: [10,"h"], img: "images/10_of_hearts.png" },
    {card: [11,"h"], img: "images/jack_of_hearts.png" },
    {card: [12,"h"], img: "images/queen_of_hearts.png" },
    {card: [13,"h"], img: "images/king_of_hearts.png" },
    {card: [1,"c"], img: "images/ace_of_clubs.png" },
    {card: [2,"c"], img: "images/2_of_clubs.png" },
    {card: [3,"c"], img: "images/3_of_clubs.png" },
    {card: [4,"c"], img: "images/4_of_clubs.png" },
    {card: [5,"c"], img: "images/5_of_clubs.png" },
    {card: [6,"c"], img: "images/6_of_clubs.png" },
    {card: [7,"c"], img: "images/7_of_clubs.png" },
    {card: [8,"c"], img: "images/8_of_clubs.png" },
    {card: [9,"c"], img: "images/9_of_clubs.png" },
    {card: [10,"c"], img: "images/10_of_clubs.png" },
    {card: [11,"c"], img: "images/jack_of_clubs.png" },
    {card: [12,"c"], img: "images/queen_of_clubs.png" },
    {card: [13,"c"], img: "images/king_of_clubs.png" },
    {card: [1,"d"], img: "images/ace_of_diamonds.png" },
    {card: [2,"d"], img: "images/2_of_diamonds.png" },
    {card: [3,"d"], img: "images/3_of_diamonds.png" },
    {card: [4,"d"], img: "images/4_of_diamonds.png" },
    {card: [5,"d"], img: "images/5_of_diamonds.png" },
    {card: [6,"d"], img: "images/6_of_diamonds.png" },
    {card: [7,"d"], img: "images/7_of_diamonds.png" },
    {card: [8,"d"], img: "images/8_of_diamonds.png" },
    {card: [9,"d"], img: "images/9_of_diamonds.png" },
    {card: [10,"d"], img: "images/10_of_diamonds.png" },
    {card: [11,"d"], img: "images/jack_of_diamonds.png" },
    {card: [12,"d"], img: "images/queen_of_diamonds.png" },
    {card: [13,"d"], img: "images/king_of_diamonds.png" },
    {card: [1,"s"], img: "images/ace_of_spades.png" },
    {card: [2,"s"], img: "images/2_of_spades.png" },
    {card: [3,"s"], img: "images/3_of_spades.png" },
    {card: [4,"s"], img: "images/4_of_spades.png" },
    {card: [5,"s"], img: "images/5_of_spades.png" },
    {card: [6,"s"], img: "images/6_of_spades.png" },
    {card: [7,"s"], img: "images/7_of_spades.png" },
    {card: [8,"s"], img: "images/8_of_spades.png" },
    {card: [9,"s"], img: "images/9_of_spades.png" },
    {card: [10,"s"], img: "images/10_of_spades.png" },
    {card: [11,"s"], img: "images/jack_of_spades.png" },
    {card: [12,"s"], img: "images/queen_of_spades.png" },
    {card: [13,"s"], img: "images/king_of_spades.png" },
]
// declare variables
let isFirstClick = true
const cardDeck=document.getElementById("cardDeck");
const backOfCard = document.getElementById("backOfCard");
const horse = document.getElementByClass("horse");
let card1 = document.querySelector("#card1 img");
let card2=document.querySelector("#card2 img");
let card3=document.querySelector("#card3 img");
let card4=document.querySelector("#card4 img");
let card5=document.querySelector("#card5 img");
let card6=document.querySelector("#card6 img");
let randomCard
let sixCards = [card1, card2, card3, card4, card5, card6]
let leftPostion = 0;
// function to make horses move
const moveOnespot= (suit)=>{
    
    
}




// game start by click
backOfCard.addEventListener('click',function(){
    if(isFirstClick ){
        for (let i = 0; i < sixCards.length; i++) {
                setTimeout(() => {
                    let randomIndex = Math.floor(Math.random()*cards.length);
                    randomCard = cards[randomIndex];
                    sixCards[i].src = randomCard.img;
                    cards.splice(randomIndex,1);
                    }, i * 1000); // Delay each card change by 1 second
                    console.log(cards);
                   }
        isFirstClick = false
    } else{
        let randomIndex = Math.floor(Math.random()*cards.length);
        randomCard = cards[randomIndex];
        let suit= randomCard.card[1]
        console.log(randomCard) 
        cardDeck.src = randomCard.img;
        if (suit === "h"){
          moveOneSpot("h")
        }else if (suit=== "d"){
            moveOneSpot("d")
        }else if (suit==="s"){
            moveOneSpot("s")
        }else  if (suit==="c"){
            moveOneSpot("c")
        }
        cards.splice(randomIndex,1);
    } 
    
        

 });




// calculate odds
//instuctions place your bet
//bet subtracted from bank
//instuctions to click card deck
//finisher starts yo win or lose icon pops up 
//calculate winnings and to bank
// restart round
// restart game
