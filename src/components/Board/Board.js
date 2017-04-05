import './board.css'
import React from 'react';
import Card from 'components/Cards/Card';
import SetGame from '../../setGame/index'

const createGame = () => {
  const game = new SetGame()
  game.populateDeck()
  game.shuffleDeck()
  game.deal()
  // game.addRow()
  return game
}

export default class Board extends React.Component{
  constructor(){
    super()
    this.reset = this.reset.bind(this)
    this.addRow = this.addRow.bind(this)
    this.state = {
      game: createGame()
    }
  }

  reset(){
    this.setState({
      game: createGame()
    })
  }

  addRow(){
    this.state.game.addRow()
    this.forceUpdate()
  }

  render(){
    const { board } = this.state.game
    const cards = board.slice() // clone

    const cardRows = []

    while(cards.length){
      cardRows.push(
        <CardRow key={cardRows.length} cards={cards.splice(0,4)} />
      )
    }

    return(
      <div className="Board">
        <div>
          <h1 className="Board-title">Set Game</h1>
          <button onClick={this.reset}>reset</button>
          <button onClick={this.addRow}>add row</button>
        </div>
        <div className="Board-card-rows">{cardRows}</div>
      </div>
    )
  };
}

const CardRow = ({cards}) => {
  cards = cards.map( card =>
    <Card key={card.id} card={card}/>
  )
  return <div className="Board-CardRow">
    {cards}
  </div>
}
