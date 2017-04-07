import React from 'react';
import { render } from 'react-dom';
import App from 'components/App/App';

export default class SetGame {
  constructor(){
    this.deck = []
    this.board = []
    this.selected = []
    this.score = 0
    this.message = 'Pick Three'
    this.setsOnBoard
  }

  populateDeck(){
    let colors = ['card-red','card-green','card-purple']
    let shapes = ['squiggle','diamond','oval']
    let shading = ['card-solid','card-striped','card-open']
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
    this.checkPossible()
  }

  addRow(){
    if(this.board.length == 12){
      this.board = this.board.concat(this.deck.splice(0,3))
      this.checkPossible()
    }
  }

  select( id ){
    let selectedCardIndex = this.board.findIndex( card => card.id == id )
    let selectedCard = this.board[selectedCardIndex]

    if( selectedCard.highlight ){
      selectedCard.highlight = false
      this.selected = this.selected.filter( index => selectedCardIndex != index )
    }
    else{
      selectedCard.highlight = true
      this.selected.push( selectedCardIndex )
    }

    if( this.selected.length == 3 ){
      if( this.checkMatch( this.selected ) ){
        this.selected.forEach( index => {
          this.board.splice( index, 1, this.deck.shift() )
          this.showMessage('Set!')
        })
        this.score++
        this.selected = []
        this.checkPossible()
        if(!this.deck.length){this.message = 'Game Over Deck is Empty'}
      }
      else{
        this.selected.forEach( index => {
          this.board[index].highlight = false
          this.showMessage('Not a set')
        })
        this.selected = []
      }
    }
  }

  showMessage( message ){
    this.message = message
    setTimeout( (() => this.message = 'Pick Three'), 1000)
  }

  checkMatch( triplet ){
    let one = this.board[triplet[0]]
    let two = this.board[triplet[1]]
    let three = this.board[triplet[2]]

    const checkDifferent = ( trait ) => {
      if(one[trait] === two[trait] || one[trait] === three[trait] || two[trait] === three[trait]){
        return false
      }
      return true
    }

    const checkSame = ( trait ) => {
      if(one[trait] !== two[trait] || one[trait] !== three[trait] || two[trait] !== three[trait]){
        return false
      }
      return true
    }

    let set = true
    let toCheck = ['color','shape','number','shading']
    toCheck.forEach( trait => {
      if( !( checkSame( trait ) || checkDifferent( trait ) ) ){
        set = false
      }
    })
    return set
  }

  checkPossible(){
    let combinations = []
    for( let i = 0; i < this.board.length; i++){
      for( let j = 0; j < i; j++){
        for( let k = 0; k < j; k++){
          combinations.push([i,j,k])
        }
      }
    }
    let sets = 0
    combinations.forEach( combination => {
      if(this.checkMatch( combination )){
        console.log(combination)
        sets++
      }
    })
    this.setsOnBoard = sets
    if(sets<=0)(this.message = 'Game Over No Possible Sets')
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
    this.highlight = false
  }
}
