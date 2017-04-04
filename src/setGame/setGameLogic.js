// import React from 'react';
// import { render } from 'react-dom';
// import App from 'components/App/App';

class Game {
  constructor(){
    deck: new Deck
    board: new Board
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
console.log(deck)
