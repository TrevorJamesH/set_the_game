import React from 'react';

export default class Card extends React.Component{

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

  // <div className="card item1">
  // <div className="oval"></div>
  // </div>
  // <div className="card item2">
  // <div className="oval"></div>
  // </div>
  // <div className="card item3">
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
      <div>
        <div className="card diamond">
          <div className="leftDiamond"></div>
          <div className="rightDiamond"></div>
        </div>
        <div className="card item3">
          <div className="oval"></div>
        </div>
        <div className="card">
          <div className="squiggly"></div>
        </div>
      </div>
    );
  };

}
