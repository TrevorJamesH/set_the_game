import React from 'react';
import { render } from 'react-dom';
import App from 'src/components/App/App';

class SetGame {
  constructor(){
    this.deck = []
    this.board = []
    this.selected = []
    this.score = 0
  }

  populateDeck(){
    let colors = ['red','green','purple']
    let shapes = ['squiggle','diamond','oval']
    let shading = ['solid','striped','open']
    let deck = []

    let index = 1
    for( let n = 1; n <= 3; n++){
      for( let c = 0; c < 3; c++){
        for( let s = 0; s < 3; s++){
          for( let sh = 0; sh < 3; sh++){
            let newCard = new Card(index++,n,colors[c],shapes[s],shading[sh])
            this.deck.push( newCard )
          }
        }
      }
    }
  }

  shuffleDeck(){
    var x;
    var randomNum;
    for (var i = this.deck.length; i > 0; i--) {
      randomNum = Math.floor(Math.random() * i);
      x = this.deck[i - 1];
      this.deck[i - 1] = this.deck[randomNum];
      this.deck[randomNum] = x;
    }
  }

  deal(){
    this.board = this.deck.splice(0,12)
  }

  addRow(){
    this.board = this.board.concat(this.deck.splice(0,4))
  }

  select( card ){
    this.selected.push( card )
  }

  checkMatch(){
    let one = this.selected[0]
    let two = this.selected[1]
    let three = this.selected[2]

    if(this.selected.length != 3){
      return 'must have 3 selected'
    }
    let toCheck = ['color','shape','number','shading']

    let checkDifferent = () => {
      for(let i = 0; i < toCheck.length; i++){
        if(one[toCheck[i]] === two[toCheck[i]] || one[toCheck[i]] === three[toCheck[i]] || two[toCheck[i]] === three[toCheck[i]]){
          return false
        }
      }
      return true
    }

    let checkSame = () => {
      for(let i = 0; i < toCheck.length; i++){
        if(one[toCheck[i]] !== two[toCheck[i]] || one[toCheck[i]] !== three[toCheck[i]] || two[toCheck[i]] !== three[toCheck[i]]){
          return false
        }
      }
      return true
    }

    return checkSame() || checkDifferent()
  }

  replace(){
    this.selected.map( selectedCard => {
      return this.board.findIndex( boardCard => {
        return selectedCard.id == boardCard.id
      })
    }).forEach( index => {
      this.board.splice(index, 1, this.deck.shift())
    })
  }
}

class Card{
  constructor(id,number,color,shape,shading){
    this.id = id
    this.number = number
    this.color = color
    this.shape = shape
    this.shading = shading
  }
}

export default class SetGame


// let game = new SetGame
// game.populateDeck()
// game.deal()
// console.log(game.board)
// game.select(game.board[2])
// game.select(game.board[4])
// game.select(game.board[6])
// game.replace()
// console.log(game.board)
