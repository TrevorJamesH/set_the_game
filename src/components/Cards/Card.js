import React from 'react';

export default class Card extends React.Component{


  render(){
    let diamond =
    <div className="card diamond">
      <div className="leftDiamond"></div>
      <div className="rightDiamond"></div>
    </div>

    let oval =
    <div className="card">
      <div className="oval"></div>
    </div>

    let squiggly =
    <div className="card">
      <div className="squiggly"></div>
    </div>

    return(
      <div id="CardContainer">
        {oval}
      </div>
    );
  };

}
