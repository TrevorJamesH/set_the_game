import './home.css'
import React from 'react';
import Board from 'components/Board/Board';

export default class Home extends React.Component{

  render(){
    return(
      <div id="home">
        <Board />
      </div>
    );
  };
}
