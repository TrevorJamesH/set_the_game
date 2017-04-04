import React from 'react';
import Card from 'components/presentation/Cards/Card';

export default class Home extends React.Component{

  render(){
    return(
      <div id="home">
        <h1>Set the game</h1>
        <div id="topContainer">
          <button id="resetBtn">reset game</button>
          <div className="score">Player 1:
            <input placeholder="00"></input>
          </div>
          <div className="score">Player 2:
            <input placeholder="00"></input>
          </div>
          <div className="score cardCount">Card Count:
            <input placeholder="60"></input>
          </div>
        </div>
        <table>
          <tr>
            <td></td>
            <td className="dataTop">A</td>
            <td className="dataTop">B</td>
            <td className="dataTop">C</td>
            <td className="dataTop">D</td>
          </tr>
          <tr>
            <td colspan="2" className="data">#1</td>
            <td colspan="2" className="cardArea"><Card /></td>
            <td colspan="2" className="cardArea"></td>
            <td colspan="2" className="cardArea"></td>
            <td colspan="2" className="cardArea"></td>
          </tr>
          <tr>
            <td colspan="2" className="data">#2</td>
            <td colspan="2" className="cardArea"></td>
            <td colspan="2" className="cardArea"></td>
            <td colspan="2" className="cardArea"></td>
            <td colspan="2" className="cardArea"></td>
          </tr>
          <tr>
            <td colspan="2" className="data">#3</td>
            <td colspan="2" className="cardArea"></td>
            <td colspan="2" className="cardArea"></td>
            <td colspan="2" className="cardArea"></td>
            <td colspan="2" className="cardArea"></td>
          </tr>
        </table>
      </div>
    );
  };
}
