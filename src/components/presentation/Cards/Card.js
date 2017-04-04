import React from 'react';

export default class Card extends React.Component{

  // <div className="card diamond">
  // <div className="leftDiamond"></div>
  // <div className="rightDiamond"></div>
  // </div>
  // <div className="card diamond">
  // <div className="leftDiamond"></div>
  // <div className="rightDiamond"></div>
  // </div>
  // <div className="card diamond">
  // <div className="leftDiamond"></div>
  // <div className="rightDiamond"></div>
  // </div>

  // <div className="card">
  // <div className="oval"></div>
  // </div>
  // <div className="card">
  // <div className="oval"></div>
  // </div>
  // <div className="card">
  // <div className="oval"></div>
  // </div>

  // <div className="card">
  // <div className="squiggly"></div>
  // </div>
  // <div className="card">
  // <div className="squiggly"></div>
  // </div>
  // <div className="card">
  // <div className="squiggly"></div>
  // </div>

  render(){
    return(
      <div id="CardContainer">
        <div className="card diamond">
          <div className="leftDiamond"></div>
          <div className="rightDiamond"></div>
        </div>
        <div className="card">
          <div className="oval"></div>
        </div>
        <div className="card">
          <div className="squiggly"></div>
        </div>
      </div>
    );
  };

}
