import React from 'react';
import Card from 'components/Cards/Card';
import SetGame from '../../../setGame/index'

export default class Board extends React.Component{



  render(){
    let game = new SetGame()
    return(
      <div>
        <Card />
      </div>
    )
  };
}
