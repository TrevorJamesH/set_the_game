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
    this.clickHandler = this.clickHandler.bind(this)
    this.state = {
      game: createGame(),
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

  clickHandler(id){
    this.state.game.select(id)
    this.forceUpdate()
  }

  render(){
    const { board } = this.state.game
    const cards = board.slice() // clone

    const cardRows = []

    while(cards.length){
      cardRows.push(
        <CardRow key={cardRows.length} cards={cards.splice(0,3)} clickHandler = {this.clickHandler} />
      )
    }

    return(
      <div className="Board" >
        <div className='Board-headerContainer'>
          <h1 className="Board-title">The</h1>
          <h1 className="Board-title Board-title-base">Set Game</h1>
          <div className="Board-info">
            <ScoreBoard score={this.state.game.score}/>
            <SetCount sets={this.state.game.setsOnBoard}/>
            <Message message={this.state.game.message} />
          </div>
          <button className="Board-btns" onClick={this.reset}>reset</button>
          <button className="Board-btns" onClick={this.addRow}>add row</button>
        </div>
        <div className="Board-card-rows">{cardRows}</div>
      </div>
    )
  };
}

const CardRow = ({cards, clickHandler}) => {
  cards = cards.map( card =>
    <Card key={card.id} card={card} clickthing={() => clickHandler(card.id)}/>
  )
  return <div className="Board-CardRow">
    {cards}
  </div>
}

const ScoreBoard = ({score}) => {
  return <div className='scoreBoard'>
    <h1>Score:  {score}</h1>
  </div>
}

const SetCount = ({sets}) => {
  return <div className='scoreBoard'>
    <h5>Possible Sets:  {sets}</h5>
  </div>
}

const Message = ({message}) => {
  return <div className='message'>
    <h3>{message}</h3>
  </div>
}
