import React, { Component } from 'react';
import Cell from './components/Cell'
import './App.css';


//let reset = [null,null,null,null,null,null,null,null,null]

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0,
            cells : [null,null,null,null,null,null,null,null,null]
            //gamestatus: null
        }
    }

    xPredicate = (element) => {return (element === "X")}
    oPredicate = (element) => {return (element === "O")}

    checker = (array) => {

        let xMap = array.map((subarray) => {
            return subarray.every(this.xPredicate)
            }
        )

        let oMap = array.map((subarray) => {
          return subarray.every(this.oPredicate)
          }
        )


        if (xMap.includes(true)){
          //this.setState({cells: reset, counter: 0})
          alert("X Wins!")
          window.location.reload(true)

        } else if (oMap.includes(true)){
          //this.setState({cells: reset, counter: 0})
          alert("O Wins")
          window.location.reload(true)

        } else if (!this.state.cells.includes(null)){
          //this.setState({cells: reset, counter: 0})
          alert("draw")
          window.location.reload(true)
        }
    }

    // The splitArray function takes in a number N and returns the cell array from state in subarrays with parts of N
    // splitArray = (subarrayLength) => {
    //     let cellsArray = [null,null,null,null,null,null,null,null,null]
    //     let splitArray = []
    //     let j = 3
    //
    //     for (let i = 0; j <= cellsArray.length; i += 3) {
    //         splitArray.push(cellsArray.slice(i,j))
    //         j += 3
    //     }
    //     return splitArray
    // }

    checkHorizontal = () => {
        //make a copy of cell array
        let cellsArray = this.state.cells

        //split copy into sets of 3
        let rowOne = cellsArray.slice(0,3)
        let rowTwo = cellsArray.slice(3,6)
        let rowThree = cellsArray.slice(6,9)

        let horCells = []
        horCells.push(rowOne, rowTwo, rowThree)

        //for every turn check each set of 3
        //if a sub array contains 3 of the same mark alert Win

        return this.checker(horCells)
    }

    checkVertical = () => {
        let cellsArray = this.state.cells

        //split copy into sets of 3
        let rowOne = cellsArray.slice(0,3)
        let rowTwo = cellsArray.slice(3,6)
        let rowThree = cellsArray.slice(6,9)

        let splitCells = []
        splitCells.push(rowOne, rowTwo, rowThree)

        let vertOne = [rowOne[0], rowTwo[0], rowThree[0]]
        let vertTwo = [rowOne[1], rowTwo[1], rowThree[1]]
        let vertThree = [rowOne[2], rowTwo[2], rowThree[2]]

        let vertCells = []
        vertCells.push(vertOne,vertTwo,vertThree)

        return this.checker(vertCells)
    }

    checkDiagonal = () => {
        let cellsArray = this.state.cells

        let rowOne = cellsArray.slice(0,3)
        let rowTwo = cellsArray.slice(3,6)
        let rowThree = cellsArray.slice(6,9)

        let splitCells = []
        splitCells.push(rowOne, rowTwo, rowThree)

        let leftDiagonal = []
        let rightDiagonal = []

        leftDiagonal = splitCells.map((element,index) => {
          return element[index]
        })

        rightDiagonal = splitCells.map((element,index) => {
          element.reverse()
          return element[index]
        })

        let diagCells = [leftDiagonal, rightDiagonal]

        return this.checker(diagCells)
    }

    handleClick = (index) => {
        if (this.state.cells[index] == null){
            if (this.state.counter%2 === 0) {
                let { counter, cells } = this.state
                counter++ //Update counter value
                cells[index] = "X" //Update cell array
                this.setState({cells: cells,
                    counter: counter})

            } else {
                let { counter, cells } = this.state
                counter++ //Update counter value
                cells[index] = "O" //Update cell array
                this.setState({cells: cells,
                    counter: counter})
            }
        }
        this.checkHorizontal()
        this.checkVertical()
        this.checkDiagonal()
    }

    render() {

    return (
    <div>

      <header className = "Title">
            <p> Tic Tac Toe </p>
      </header>

      <div className="flex-container">
          <Cell index = {0} handleClick = {this.handleClick} label = {this.state.cells[0]}/>
          <Cell index = {1} handleClick = {this.handleClick} label = {this.state.cells[1]}/>
          <Cell index = {2} handleClick = {this.handleClick} label = {this.state.cells[2]}/> <br/></div>

      <div className="flex-container">
          <Cell index = {3} handleClick = {this.handleClick} label = {this.state.cells[3]}/>
          <Cell index = {4} handleClick = {this.handleClick} label = {this.state.cells[4]}/>
          <Cell index = {5} handleClick = {this.handleClick} label = {this.state.cells[5]}/> <br/></div>

      <div className="flex-container">
          <Cell index = {6} handleClick = {this.handleClick} label = {this.state.cells[6]}/>
          <Cell index = {7} handleClick = {this.handleClick} label = {this.state.cells[7]}/>
          <Cell index = {8} handleClick = {this.handleClick} label = {this.state.cells[8]}/></div>

     </div>
    )

  }
}

export default App;
