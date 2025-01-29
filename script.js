const gameboard= document.getElementById("Gameboard") 
gameboard.addEventListener('click', (event) => {
    if (event.target.classList.contains('card')) {
        flippedcard(event.target)
    }
} )
let card1 = null
let card2 = null

let lockedcard = false

const iconarray = [
"🥶",
"🤡",
"🍣",
"🍸",
"🍼",
"🦮",
"🐲",
"🫘",
]

const cards= [
    ... iconarray, ...iconarray
]
 
/* declaring function. to use it if u have to call it*/
function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    }

    shuffle(cards) /* this is calling function*/ 

/*emoji is item*/
cards.forEach((emoji)=> {
const newElement = document.createElement('div');
newElement.classList.add('card');
newElement.dataset.icon= emoji /* emoji is the value*/
newElement.innerText="?"
gameboard.appendChild(newElement);
/*''for text only*/
} )
/* the parent is the big div in html*/

function flippedcard(card){
    if (lockedcard) return 
    if (card1 == card) return
    if (card.classList.contains('matched')) return

    card.classList.add('flipped')
    card.innerText= card.dataset.icon 
    /* innertext=emoji*/
    if (card1 == null){
    card1=card
   
}else{
    card2=card
checkmatched() 
}
}
/* 2 = if using in if statement to compare*/ 

function checkmatched(){

  if  (card1.innerText == card2.innerText){
    alert("Matched")
card1.classList.add(`matched`)
card2.classList.add(`matched`)
card1 = null
card2 = null
  } else {
    alert("Not Matched")
setTimeout(() => {
    card1.classList.remove(`flipped`)
    card2.classList.remove(`flipped`)
    card1.innerText= "?"
    card2.innerText= "?"
    card1 = null
    card2 = null
}, 1000)

  } 
  

    lockedcard = false
 /* once we add remove word then add card.innertext = ?*/
}