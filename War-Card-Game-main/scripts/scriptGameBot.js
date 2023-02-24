import Deck from "./deck.js"

const SUITS = ["♠", "♣", "♥", "♦"]
const CARD_VALUE_MAP = {
   "6": 6,
   "7": 7,
   "8": 8,
   "9": 9,
   "10": 10,
   J: 11,
   Q: 12,
   K: 13,
   A: 14
}

const trumpCardPlace = document.querySelector(".trump__card")
let enemyCardFight = document.querySelector('.place__enemy .card')
const deckElement = document.querySelector(".deck")
const buttonDo = document.querySelector('.button__do')
const cardsPlaceYour = document.querySelector('.place .place__player')
const cardsPlaceEnemy = document.querySelector('.place .place__enemy')
const textAlert = document.querySelector('.text__information')
const enemyCards = document.getElementsByClassName('enemy__team')
const playerCards = document.getElementsByClassName('you__team')
const trumpCard = document.getElementsByClassName('trump')
let trumpSuit = document.querySelector('.trump__suit')

let deckSide, distribute, click, startFight, take, stop, moveYou, moveEnemy, takeEn

const auWin = new Audio('./audio/win.mp3')
const auLose = new Audio('./audio/lose.mp3')
const auDistribution = new Audio('./audio/distribution_cards.mp3')
const auPutTable = new Audio('./audio/put_on_table.mp3')
const auTake = new Audio('./audio/take_card.mp3')

function restart() {
   // Работает, но с косяками  в виде дублировании↓
   let i = 0
   while(enemyCards.length > i) {
      enemyCards[i].remove()
      if(enemyCards.length === 0) {
         textAlert.classList.remove('green')
         continue
      }
   }
   while(playerCards.length > i) {
      playerCards[i].remove()
      if(playerCards.length === 0) {
         textAlert.classList.remove('red')
         continue 
      }
   }
   // Работает, но с косяками в виде дублировании↑
   location.reload() // Перезапуск страницы
   startGame()
}

startGame()
function startGame() {
   const computerCardSlot = document.querySelector(".field__enemy .field__container")
   const playerCardSlot = document.querySelector(".field__player .field__container")

   const deck = new Deck()
   deck.shuffle()

   const deckMidpoint = deck.numberOfCards
   deckSide = new Deck(deck.cards.slice(0, deckMidpoint))
   stop = false
   distribute = true
   click = true
   startFight = false
   take = true
   moveYou = false
   moveEnemy = true
   takeEn = false
   let befEventCall
   buttonDo.innerText = "Раздать"
   textAlert.innerText = "Раздайте карты всем игрокам!"

   updateDeckInformation()
   // ↓ Кнопка клика ↓
   buttonDo.onclick = () => {
      if(distribute) {
         auDistribution.play()
         textAlert.innerText = 'Идёт раздача карт, пожалуйста подождите.'
         setTimeout(() => {
            for (let i = 0; i < 6; i++) {
               let deckCard = deckSide.pop()
               playerCardSlot.appendChild(deckCard.getHTMLplayer())
               deckCard = deckSide.pop()
               computerCardSlot.appendChild(deckCard.getHTMLenemy())
               if(i === 5) {
                  deckCard = deckSide.pop()
                  trumpCardPlace.appendChild(deckCard.getHTML())
                  trumpSuit.innerText = trumpCardPlace.innerText
                  if (trumpSuit.innerText == '♠' || trumpSuit.innerText == '♣') trumpSuit.classList.add('black')
                  else trumpSuit.classList.add('red')
               }
            }
            updateDeckInformation()
            buttonDo.innerText = "Начать раунд"
            textAlert.innerText = "Начните игру с соперником!"
            startFight = true
         }, 3000);
         distribute = false
      } else if(startFight) {
         buttonDo.innerText = ""
         buttonDo.style.display = 'none'
         if (!moveEnemy) {
            textAlert.innerText = "Атакуйте противника!"
            take = false
         }
         else {
            bid()
            textAlert.innerText = "Отбивайте атаку противника!"
            take = true
            buttonDo.style.display = 'block'
            buttonDo.innerText = "Взять"
         }
         startFight = false
         isGameOver()
      } else if(take) {
         if (deckSide.numberOfCards === 0) isGameOver()
         takeYou()
         getCardFromDeck()
         bid()
      } else if(stop) {
         restart()
      }
   }
   // ↑ Кнопка клика ↑
   // ↓ Добавление на поле кликнутой карты ↓
   cardsPlaceYour.addEventListener("click", () => {
      if (!startFight && !stop && !click) {
         const targEl = document.querySelector('.card.click')
         cardsPlaceYour.appendChild(targEl)
         targEl.classList.remove('click')
         if(moveYou) bid()
         enemyCardFight = document.querySelector('.place__enemy .card')
         const playerCardFight = document.querySelector('.place__player .card')
         auPutTable.play()
         setTimeout(() => {
            if(!takeEn) {
               if(moveEnemy && isRoundWinner(playerCardFight, enemyCardFight)) {
                  textAlert.innerText = "Вы отбились"
                  setTimeout(() => {
                     playerCardFight.remove()
                     enemyCardFight.remove()
                     getCardFromDeck()
                     moveEnemy = false
                     moveYou = true
                  }, 1500)
                } else if (moveYou && isRoundWinner(enemyCardFight, playerCardFight)) {
                  textAlert.innerText = "Противник отбил вашу атаку"
                  setTimeout(() => {
                     playerCardFight.remove()
                     enemyCardFight.remove()
                     getCardFromDeck()
                     moveEnemy = true
                     moveYou = false
                  }, 1500)
                }
            }
         }, 1000)
          if (enemyCards.length < 1 || playerCards.length < 1) {
            console.log("Игра окончена!")
            isGameOver()
          } else {
            startFight = true
          }
          buttonDo.style.display = 'block'
          buttonDo.innerText = 'Продолжить'
          takeEn = false
          click = true

          function isRoundWinner(cardOne, cardTwo) {
            let i = 0, valueOne = '', valueTwo = ''
               while(cardOne.dataset.value[i] !== ' ') {
                  valueOne += cardOne.dataset.value[i]
                  i++  
               }
               i = 0
               while(cardTwo.dataset.value[i] !== ' ') {
                  valueTwo += cardTwo.dataset.value[i]
                  i++  
               }
            return CARD_VALUE_MAP[valueOne] >= CARD_VALUE_MAP[valueTwo] || trumpSuit.innerText == cardOne.innerText
          }
      }
   })
   // ↑ Добавление на поле кликнутой карты ↑
   // ↓ Обновление карт при их недостатке ↓
   function getCardFromDeck() {
      if (enemyCards.length < 6 && deckSide.numberOfCards !== 0) {
         for (let i = enemyCards.length; i < 6; i++) {
            let deckCard = deckSide.pop()
            computerCardSlot.appendChild(deckCard.getHTMLenemy())
         }
      } 
      if (playerCards.length < 6 && deckSide.numberOfCards !== 0) {
         for (let i = playerCards.length; i < 6; i++) {
            let deckCard = deckSide.pop()
            playerCardSlot.appendChild(deckCard.getHTMLplayer())
         }
      } 
      if (deckSide.numberOfCards === 0 && trumpCard.length != 0 && (playerCards.length < 6 || enemyCards.length < 6)) {
         const trumpCardReplace = document.querySelector(".trump__card .card")
         if(enemyCards.length < 6) {
            trumpCardReplace.classList.remove('trump')
            trumpCardReplace.classList.add('enemy__team', 'hidden')
            computerCardSlot.appendChild(trumpCardReplace)
         } else if (playerCards.length < 6) {
            trumpCardReplace.classList.remove('trump')
            trumpCardReplace.classList.add('you__team')
            playerCardSlot.appendChild(trumpCardReplace)
         }
      }
      auTake.play()
      updateDeckInformation()
   }
   // ↑ Обновление карт при их недостатке ↑
   // ↓ Нажатие на карту игрока ↓
   playerCardSlot.addEventListener("click", (e) => {
      if (moveEnemy) {
         const enemyCardFight = document.querySelector('.place__enemy .card')
         let i = 0, valuePlayer = '', valueEnemy = ''
         while(e.target.dataset.value[i] !== ' ') {
            valuePlayer += e.target.dataset.value[i]
            i++
         }
         i = 0
         while(enemyCardFight.dataset.value[i] !== ' ') {
            valueEnemy += enemyCardFight.dataset.value[i]
            i++  
         }
         if (!startFight && !stop && trumpSuit.innerText == e.target.innerText || enemyCardFight.innerText == e.target.innerText && CARD_VALUE_MAP[valuePlayer] >= CARD_VALUE_MAP[valueEnemy]) {
            if(click) {
               befEventCall = e.target
               befEventCall.classList.add('click')
               click = false
            } else {
               befEventCall.classList.remove('click')
               click = true
            }
         }
      } else if (moveYou && !startFight && !stop) {
         if(click) {
            befEventCall = e.target
            befEventCall.classList.add('click')
            click = false
         } else {
            befEventCall.classList.remove('click')
            click = true
         }
      }
   })
   // ↑ Нажатие на карту игрока ↑

   function takeYou() {
      const enemyCardFight = document.querySelector('.place__enemy .card')
      const playerCardFight = document.querySelector('.place__player .card')
      enemyCardFight.classList.remove('enemy__team')
      enemyCardFight.classList.add('you__team')
      if(playerCardFight !== null) {
         playerCardFight.classList.remove('click')
         playerCardSlot.appendChild(playerCardFight)
      }
      playerCardSlot.appendChild(enemyCardFight)
   }
   
   function takeEnemy() {
      const enemyCardFight = document.querySelector('.place__enemy .card')
      const playerCardFight = document.querySelector('.place__player .card')
      playerCardFight.classList.remove('you__team')
      playerCardFight.classList.add('enemy__team', 'hidden')
      if(enemyCardFight !== null) {
         playerCardFight.classList.remove('click')
         computerCardSlot.appendChild(enemyCardFight)
      }
      computerCardSlot.appendChild(playerCardFight)
      getCardFromDeck()
      textAlert.innerText = 'Противник взял вашу карту'
      takeEn = true
      click = true
   }

// ↓ Выборка карты противника и его ход ↓
function bid() {
   auPutTable.play()
   setTimeout(() => {
      if (moveEnemy && !stop) {
         let ran = Math.floor(Math.random() * (enemyCards.length) - 1) + 1
         for (let i = 0; i < enemyCards.length; i++) {
            if(i == ran) {
               enemyCards[i].classList.remove('hidden')
               cardsPlaceEnemy.appendChild(enemyCards[i])
               break
            }
         }
      } else if (!moveEnemy) {
         const playerCardFight = document.querySelector('.place__player .card')
         let arrSuit = []
         let arrChoise = []
         let isBid = false
         let l = 0, valuePlayer = '', ran, valueEnemy = new Array()
         while(playerCardFight.dataset.value[l] !== ' ') {
            valuePlayer += playerCardFight.dataset.value[l]
            l++
         }
         l = 0
         for (let i = 0; i < enemyCards.length; i++) {
            arrSuit[i] = enemyCards[i].innerText
         }
         for (let i = 0; i < arrSuit.length; i++) {
            if (trumpSuit.innerText == arrSuit[i] || playerCardFight.innerText == arrSuit[i]) {
               let valueNow = ''
               while(enemyCards[i].dataset.value[l] !== ' ' && enemyCards[i].dataset.value[l] !== '0') {
                  valueNow += enemyCards[i].dataset.value[l]
                  if (valueNow == '1') valueNow += '0'
                  if (CARD_VALUE_MAP[valuePlayer] > CARD_VALUE_MAP[valueNow] && trumpSuit.innerText !== arrSuit[i]) break
                  valueEnemy.push(valueNow)
                  arrChoise.push(arrSuit[i])
                  l++  
               }
               l = 0
            }
         }
         l = 0
         if(valueEnemy.length !== 0) ran = Math.floor(Math.random() * (valueEnemy.length) - 1) + 1
         let dataVal = `${valueEnemy[ran]} ${arrChoise[ran]}`
         // for (let i = 0; i < valueEnemy.length; i++) {
         //    console.log(`Value: ${valueEnemy[i]} Suit: ${arrChoise[i]}`)
         // }
         for (let i = 0; i < enemyCards.length; i++) {
            if(enemyCards[i].dataset.value == dataVal) {
               isBid = true
               enemyCards[i].classList.remove('hidden')
               cardsPlaceEnemy.appendChild(enemyCards[i])
               break
            }
         }
         click = true
         if (!isBid) takeEnemy()
         return enemyCardFight = document.querySelector('.place__enemy .card')
      }
   }, 1000)
}
// ↑ Выборка карты противника и его ход ↑
}


function updateDeckInformation() {
    deckElement.innerText = deckSide.numberOfCards
    if(deckSide.numberOfCards === 0) {
      deckElement.style.opacity = '0'
    }
}

 function isGameOver() {
   if (enemyCards.length === 0 && playerCards.length === 0 && deckSide.numberOfCards === 0) {
      textAlert.innerText = "Ничья!"
      buttonDo.innerText = "Начать заново"
      buttonDo.innerHTML += '<form action="" method="post">' 
      +'<button type="submit" name="drawbtn">Начать заново</button>'
      +'</form>'
      buttonDo.style.display = 'block'
      take = false
      stop = true
   } else if (playerCards.length === 0 && deckSide.numberOfCards === 0) {
      textAlert.innerText = "Вы выйграли!"
      textAlert.classList.add('green')
      buttonDo.innerText = "Начать заново"
      buttonDo.innerHTML += '<form action="" method="post">' 
      +'<button type="submit" name="winbtn">Начать заново</button>'
      +'</form>'
      buttonDo.style.display = 'block'
      auWin.play()
      take = false
      stop = true
   } else if(enemyCards.length === 0 && deckSide.numberOfCards === 0) {
      textAlert.innerText = "Вы проиграли!"
      textAlert.classList.add('red')
      buttonDo.innerText = "Начать заново"
      buttonDo.innerHTML += '<form action="" method="post">' 
      +'<button type="submit" name="losebtn"></button>'
      +'</form>'
      buttonDo.style.display = 'block'
      auLose.play()
      take = false
      stop = true
   }
 }