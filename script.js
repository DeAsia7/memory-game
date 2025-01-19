const gameboard= document.getElementById("Gameboard") 
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
    if (newElement.classList.contains('match')) return

    card.classlist.add('flipped')
    card.innertext= card.dataset.icon /* innertext=emoji*/
    if (card1 == null){
    card1=card
}else{
    card2=card
checkmatched() 
}
}
/* 2 = if using in if statement*/ 

