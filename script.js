document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: '1',
      img:"https://cloud-5ystxzer7.vercel.app/11.png"
    },
    {
      name: '2',
      img:"https://cloud-5ystxzer7.vercel.app/22.png"
    },
    {
      name: '3',
      img:"https://cloud-5ystxzer7.vercel.app/33.png"
    },
    {
      name: '4',
      img:"https://cloud-5ystxzer7.vercel.app/44.png"
    },
    {
      name: '5',
      img:"https://cloud-5ystxzer7.vercel.app/55.png"
    },
    {
      name: '6',
      img:"https://cloud-5ystxzer7.vercel.app/06.png"
    },
    {
      name: '1',
      img:"https://cloud-5ystxzer7.vercel.app/11.png"
    },
    {
      name: '2',
      img:"https://cloud-5ystxzer7.vercel.app/22.png"
    },
    {
      name: '3',
      img:"https://cloud-5ystxzer7.vercel.app/33.png"
    },
    {
      name: '4',
      img:"https://cloud-5ystxzer7.vercel.app/44.png"
    },
    {
      name: '5',
      img:"https://cloud-5ystxzer7.vercel.app/55.png"
    },
    {
      name: '6',
      img:"https://cloud-5ystxzer7.vercel.app/06.png"
    }
  ]

cardArray.sort(() => 0.5 - Math.random())

const board = document.querySelector('.board')
const result = document.getElementById('score')
const placeholder = "https://cloud-5ystxzer7.vercel.app/7placeholder.png"
const blank = "https://cloud-5ystxzer7.vercel.app/6blank.png"
var cardsClicked = []
var cardsClickedId = []
var cardsMatched = []

//creating game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', placeholder)
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
    }
  }

//flip  the card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsClicked.push(cardArray[cardId].name)
    cardsClickedId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsClicked.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  //check for match
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const firstCard = cardsClickedId[0]
    const secondCard = cardsClickedId[1]

    if(firstCard === secondCard) {
      cards[firstCard].setAttribute('src', placeholder)
      cards[secondCard].setAttribute('src', placeholder)
      alert('You have clicked the same image!')
    }
    else if (cardsClicked[0] === cardsClicked[1]) {
      cards[firstCard].setAttribute('src', blank)
      cards[secondCard].setAttribute('src', blank)
      cards[firstCard].removeEventListener('click', flipCard)
      cards[secondCard].removeEventListener('click', flipCard)
      cardsMatched.push(cardsClicked)
    } 
    else {
      setTimeout(() => {
        cards[firstCard].setAttribute('src', placeholder)
        cards[secondCard].setAttribute('src', placeholder)
      }, 300)
    }
    cardsClicked = []
    cardsClickedId = []
    result.textContent = cardsMatched.length
    if  (cardsMatched.length === cardArray.length/2) {
      result.textContent = 'Congratulations! You found them all!'
    }
  }

  createBoard()

})