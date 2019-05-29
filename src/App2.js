import React, { Component } from 'react';
import './App.css';
import BoardForm from './BoardForm';
import BoardItem from './BoardItem';

class App extends Component {

    constructor(props) {
      super(props);
      this.child = React.createRef();
    }

    state = {

        maxNo: 3,   // record for next no of boardno

        boards: [

            {

                brdno: 1,

                brdwriter: 'Kwon Julia',

                brdtitle: 'Save up to 30% on Tickets',

                brddate: new Date()

            },

            {

                brdno: 2,

                brdwriter: 'Kim Simon',

                brdtitle: 'Get A 2019 Season Pass',

                brddate: new Date()

            }

        ]

    }

    // To add new data
    // handleSaveData = (data) => {
    //   this.setState({
    //     maxNo: this.state.maxNo+1,
    //     boards: this.state.boards.concat({brdno:this.state.maxNo, brddate: new Date(), ...data})
    //   });
    // }

    // To edit data, updated handleSaveData
    handleSaveData = (data) => {

      let boards = this.state.boards;

      // INSERT - if no brdno, the data is new one
      if (data.brdno == null || data.brdno === '' || data.brdno === undefined) {

          this.setState ({

              maxNo: this.state.maxNo+1,

              boards: boards.concat({

                brdno: this.state.maxNo, brddate: new Date(), ...data

              })
         });

      // UPDATE - if brdno exists, the data of brdno will be updated
      } else {

        this.setState ({

            boards: boards.map(row => data.brdno === row.brdno ? {...data}:row)

            })
        }
    }

    // Remove the selected data using filter
    handleRemove = (brdno) => {
      this.setState({
        boards: this.state.boards.filter(row => row.brdno !== brdno)
      })
    }

    handleSelectedRow = (row) => {

      this.setState({selectedBoard: row});

    }

    handleSelectRow = (row) => {

      this.child.current.handleSelectRow(row);

    }

    render() {

        const { boards } = this.state;

        return (

           <div>
 
              <BoardForm  onSaveData = {this.handleSaveData} ref={this.child}/>

                   {

                       boards.map(row =>

                          // show all data
                          // (<BoardItem key={row.brdno} row={row} />)

                          // show data without the deleted data
                          (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove}
                            onSelectRow = {this.handleSelectRow} />)
                       )

                   }

           </div>

       );

    }

}

export default App;
