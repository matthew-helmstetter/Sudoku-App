import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cells : Array(81).fill(null),
            board : Array(9).fill(null),

            player : "X",
            winner : null
        }
    }

    checkWinner() {
        let winLines = 
        [
            ["0","1","2"],
            ["3","4","5"],
            ["6","7","8"],
            ["0","3","6"],
            ["1","4","7"],
            ["2","5","8"],
            ["0","4","8"],
            ["2","4","6"],
        ]

        for (let index = 0; index < winLines.length; index++) {
            const [a,b,c] = winLines[index];
            if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
                alert('You won');
                this.setState({
                    winner: this.state.player
                })
            }
        }
    }

    handleClick(index) {
        let newBoard = this.state.board
        if(this.state.board[index] === null && !this.state.winner) {
            newBoard[index] = this.state.player
            this.setState({
            board : newBoard,
            player : this.state.player === "X" ? "O" : "X"
            })

        }
        this.checkWinner()
    }
    render() {
        const Box = this.state.board.map(
            () =>  
                <div className="biggerBox">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
        )
        const Cells = this.state.cells.map(
            () =>
                <div className="box">
                </div>
        )
        

       return (
           <div className="board">
                {Box}
           </div>
        );
    }
}

export default App;