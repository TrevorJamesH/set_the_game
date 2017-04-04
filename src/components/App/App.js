import React from 'react';
import { render } from 'react-dom';
import Home from 'components/presentation/Home/Home';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Home />
      </div>
    );
  };
}
