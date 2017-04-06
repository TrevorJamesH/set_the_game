import './card.css'
import React from 'react';

export default class Card extends React.Component{

  // static propTypes = {
  //   card: React.PropTypes.object.isRequired,
  // }

  render(){
    const { card, clickthing } = this.props
    //const card = this.props.card
    let highlighted = card.highlight ? "Card card-highlighted" : "Card"

    let symbols = Array(this.props.card.number).fill().map((_, index) =>
      <Symbol
        key={index}
        shape={card.shape}
        color={card.color}
        shading={card.shading}
      />
    )

    return(
      <div className={highlighted} onClick={clickthing}>
        {symbols}
      </div>
    );
  };

}

const Symbol = ({shape, color, shading}) =>
  <div className="Card-Symbol">
    <div className={`${shape} ${color} ${shading}`}></div>
  </div>
