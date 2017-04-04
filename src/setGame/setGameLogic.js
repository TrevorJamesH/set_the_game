// import React from 'react';
// import { render } from 'react-dom';
// import App from 'components/App/App';

class Game {
  constructor(){
    this.deck = new Deck
    this.board = new Board
    this.selected = []
    this.score = 0
  }

  deal(){

  }

  addRow(){

  }

  checkMatch(){

  }
}

class Deck {
  constructor(){
    this.cards = []
    this.populate()
  }

  populate(){
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
            this.cards.push( newCard )
          }
        }
      }
    }
  }

  shuffle(){
    var x;
    var randomNum;
    for (var i = this.cards.length; i > 0; i--) {
      randomNum = Math.floor(Math.random() * i);
      x = this.cards[i - 1];
      this.cards[i - 1] = this.cards[randomNum];
      this.cards[randomNum] = x;
    }
  }
}

class Card{
  constructor(id,number,color,shape,shading){
    this.id = id
    this.number = number
    this.color = color
    this.shape = shape
    this.shading = shading
    this.highlighted = false
  }

  hightlight(){
    this.highlighted = true
  }
}



let deck = new Deck
deck.shuffle()
console.log(deck)
