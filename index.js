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
//click to start game- pushes six cards out with a sec delay- pop method

// const cardDeck=document.getElementById("cardDeck");
const backOfCard=document.getElementById("backOfCard");
// const card1=document.getElementById("card1");
// const card2=document.getElementById("card2");
// const card3=document.getElementById("card3");
// const card4=document.getElementById("card4");
// const card5=document.getElementById("card5");
// const card6=document.getElementById("card6");
let randomCard
// console.log("hello")

// backOfCard.addEventListener('click',function(){
// console.log('it works')
    let random = Math.floor(Math.random()*cards.length);
    randomCard = cards[random];
    cards.splice(randomCard,1);
    console.log(randomCard)
// card1.src= randomCard
// cards.pop(randomCard )

// });


// chatgpt code
// const cardDeck = document.getElementById("cardDeck");

// const cardElements = [
//     document.getElementById("card1"),
//     document.getElementById("card2"),
//     document.getElementById("card3"),
//     document.getElementById("card4"),
//     document.getElementById("card5"),
//     document.getElementById("card6")
// ];

// cardDeck.addEventListener('click', function () {
//     for (let i = 0; i < cardElements.length; i++) {
//         setTimeout(() => {
//             let random = Math.floor(Math.random() * cards.length);
//             cardElements[i].src = cards[random].img;
//         }, i * 1000); // Delay each card change by 1 second
//     }
// });

// calculate odds


//instuctions place your bet

//bet subtracted from bank

//instuctions to click card deck

// // card moves horses pop cards used
// backOfCard.addEventListener('click',function(){
//     // console.log('it works')
//         let random = Math.floor(Math.random()*cards.length);
//         randomCard = cards[random];
//         if (randomCard [1] === "h"){
//             move one spot
//         }else{
//             if (randomCard[1]=== "d")
//         }else{
//             if (randomCard[1]=== "s")
//         }else{
//             if (randomCard[1]=== "c")
//         }}
//     cards.pop(randomCard )
    
//     });
    

//finisher starts yo win or lose icon pops up 
//calculate winnings and to bank
// restart round
// restart game
