import './card.css'
import React from 'react';

export default class Card extends React.Component{

  // static propTypes = {
  //   card: React.PropTypes.object.isRequired,
  // }

  render(){
    const { card } = this.props

    let symbols = Array(this.props.card.number).fill().map((_, index) =>
      <Symbol
        key={index}
        shape={card.shape}
        color={card.color}
        shading={card.shading}
      />
    )

    return(
      <div className="Card">
        {symbols}
      </div>
    );
  };

}

const Symbol = ({shape, color, shading}) =>
  <div className="Card-Symbol">
    <div className={`${shape} ${color} ${shading}`}></div>
  </div>
