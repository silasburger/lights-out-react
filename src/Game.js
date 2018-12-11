import React, { Component } from 'react'
import Board from "./Board"

class Game extends Component {
  render(){
    console.log('game');
    return(
      <Board nrows={5} ncols={5} chanceLightStartsOn={0.5}/>
    )
  }
}

export default Game