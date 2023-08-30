let cards = [
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
const h= document.getElementById("h")
const d= document.getElementById("d")
const s= document.getElementById("s")
const c= document.getElementById("c")
let card1 = document.querySelector("#card1 img");
let card2=document.querySelector("#card2 img");
let card3=document.querySelector("#card3 img");
let card4=document.querySelector("#card4 img");
let card5=document.querySelector("#card5 img");
let card6=document.querySelector("#card6 img");
let arrayOfHearts = document.querySelectorAll("#hearts img");
let arrayOfClubs = document.querySelectorAll("#clubs img");
let arrayOfDiamonds = document.querySelectorAll("#diamonds img");
let arrayOfSpades = document.querySelectorAll("#spades img");
let currentHeart = 0;
let currentClub = 0;
let currentDiamond = 0;
let currentSpades = 0;
let cutCards = [];
let totalH = 0;
let totalC = 0;
let totalD = 0;
let totalS = 0;

// placing bets
let money= document.querySelector("#money")
let dollars = 500
let form= document.querySelector("form")
let heartbet= document.querySelector("#heartbet")
let clubbet= document.querySelector("#clubbet")
let diamondbet= document.querySelector("#diamondbet")
let spadebet= document.querySelector("#spadebet")
let bet =document.getElementsByClassName("#bet")
let heartsProb;
let clubsProb;
let diamondProb;
let spadeProb
let heartOdd
let diamondOdd
let spadeOdd
let clubOdd
let randomCard
let sixCards = [card1, card2, card3, card4, card5, card6]
let heartOdds = document.querySelector("#heartOdds")
 let diamondOdds = document.querySelector("#diamondOdds")
 let spadeOdds = document.querySelector("#spadeOdds")
 let clubOdds = document.querySelector("#clubOdds")
 let wager=0
 let betOn;


// function to make horses move
const moveOneSpot= (suit)=>{
    if (suit == "h"){
        currentHeart += 1
        for(let i=0; i< arrayOfHearts.length; i++){
            if (currentHeart == i){
                arrayOfHearts[i].hidden=false
            }else{
                arrayOfHearts[i].hidden=true
            }
           }
        
    }

if (suit == "c"){
    currentClub += 1
    for(let i=0; i< arrayOfClubs.length; i++){
        if (currentClub == i){
            arrayOfClubs[i].hidden=false
        }else{
            arrayOfClubs[i].hidden=true
        } }
    
}

if (suit == "d"){
    currentDiamond += 1
    for(let i=0; i< arrayOfDiamonds.length; i++){
        if (currentDiamond == i){
            arrayOfDiamonds[i].hidden=false
        }else{
            arrayOfDiamonds[i].hidden=true
        }
    }  
}

if (suit == "s"){
    currentSpades += 1
    for(let i=0; i< arrayOfSpades.length; i++){
        if (currentSpades == i){
            arrayOfSpades[i].hidden=false
        }else{
            arrayOfSpades[i].hidden=true
        } 
    }
}

};

// game start by click
backOfCard.addEventListener('click',function(){
    if(isFirstClick ){
        for (let i = 0; i < sixCards.length; i++) {
                setTimeout(() => {
                    let randomIndex = Math.floor(Math.random()*cards.length);
                    randomCard = cards[randomIndex];
                    sixCards[i].src = randomCard.img;
                    cutCards.push(randomCard.card)
                    
                    cards.splice(randomIndex,1);
                    
                    }, i * 100); 
               
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
    if (currentDiamond>6){
        alert("Diamonds win!")
        if (betOn=="d"){
            dollars+= wager*2
            money.textContent= "$ " + dollars
        }

    }
    
    if (currentSpades>6){
        alert("Spades Win!")
        if (betOn=="s"){
            dollars+= wager*2
            money.textContent= "$ " + dollars
        }
        
    }if (currentClub>6){
        alert("clubs win!")
        if (betOn=="c"){
            dollars+= wager*2
            money.textContent= "$ " + dollars
        }
    } if (currentHeart>6){
        alert("hearts wins")
        if (betOn=="h"){
            dollars+= wager*2
            money.textContent= "$ " + dollars
        }
    }  

    // calculate odds
// counts suit
// figure odds
// 
    setTimeout(()=>{

    
    for (let i = 0; i < cutCards.length; i++) {
       
        
        if( cutCards[i][1] =='h'){
            totalH += 1
            heartsProb= parseInt((totalH/6)*10)
            heartOdd= parseInt(heartsProb-1)
            // heartOdd = (13 - totalH) / 46;
            
        }
        
        if( cutCards[i][1] =='s'){
            totalS = totalS +1
            // spadeProb= parseInt((totalS/6)*10)
            // spadeOdd= parseInt(spadeProb-1)
            spadeOdd = (13 - totalS) / 46;

        }
        
        if( cutCards[i][1] =='d'){
            totalD += 1
            // diamondProb= parseInt(totalD/6)
            // diamondOdd= parseInt(diamondProb-1)
            diamondOdd = (13 - totalD) / 46;
        }
        
        if( cutCards[i][1] =='c'){
            totalC += 1
            // clubProb= parseInt(totalC/6)
            // clubOdd= parseInt(clubProb-1)
            clubOdd = (13 - totalC) / 46;
        }
        
    }
       

        


// Update the HTML elements with the calculated odds
// heartOdds.innerHTML = "Heart Odds: " + (heartOdd * 100).toFixed(2) + "%";
clubOdds.innerHTML = "Club Odds: " + (clubOdd * 100).toFixed(2) + "%";
spadeOdds.innerHTML = "Spade Odds: " + (spadeOdd * 100).toFixed(2) + "%";
diamondOdds.innerHTML = "Diamond Odds: " + (diamondOdd * 100).toFixed(2) + "%";
        heartOdds.innerHTML = ("Heart " + heartsProb + " / " + heartOdd + " Odds")
        // clubOdds.innerHTML = ("Club " + clubsProb + " / " + clubOdd + " Odds")
        // diamondOdds.innerHTML = ("Diamond " + diamondProb + " / " + diamondOdd + " Odds")
        // spadeOdds.innerHTML = ("Spades " + spadeProb + " / " + spadeOdd + " Odds") 
        
   },1500)
});


 
 



 heartbet.addEventListener("keyup", function(e){
    if (e.key==="Enter"){
        console.log(dollars)
        if (heartbet.value> dollars){
            console.log("sorry, you don't have enough money")
        }else{
            wager= heartbet.value
        dollars-=wager
        money.textContent= "$ " + dollars
        heartbet.disabled = true 
        betOn= "h"
        }
   
        
       
    }
})
clubbet.addEventListener("keyup", function(e){
    if (e.key==="Enter"){
        console.log(dollars)
        if (clubbet.value> dollars){
            console.log("sorry, you don't have enough money")
        }else{
            wager= clubbet.value
        dollars-=wager
        money.textContent= "$ " + dollars
        clubbet.disabled = true 
        betOn= "c"
        }
   
        
       
    }
})
spadebet.addEventListener("keyup", function(e){
    if (e.key==="Enter"){
        console.log(dollars)
        if (spadebet.value> dollars){
            console.log("sorry, you don't have enough money")
        }else{
            wager= spadebet.value
        dollars-=wager
        money.textContent= "$ " + dollars
        spadebet.disabled = true 
        betOn= "s"
        }
   
        
       
    }
})
diamondbet.addEventListener("keyup", function(e){
    if (e.key==="Enter"){
        console.log(dollars)
        if (diamondbet.value> dollars){
            console.log("sorry, you don't have enough money")
        }else{
            wager= diamondbet.value
        dollars-=wager
        money.textContent= "$ " + dollars
        diamondbet.disabled = true 
        betOn= "d"
        }
   
        
       
    }
})





//instuctions place your bet

//instuctions to click card deck


// restart round
// restart game
