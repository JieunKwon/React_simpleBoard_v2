import React, { Component } from 'react';

class BoardItem extends React.Component {

    handleRemove = () => {
      const {row, onRemove} = this.props;
      onRemove(row.brdno);
    }

    handleSelectRow = () => {
      const {row, onSelectRow} = this.props;
      onSelectRow(row);
    }

    render() {

        return(

          <table class="BoardItem-table">
            <tr>
                <td>No. {this.props.row.brdno}</td>
                <td class="BoardItem-button"> <button onClick={this.handleRemove}>X</button> </td>
            </tr>
            <tr>
                <td class="BoardItem-writer" colspan="2">By  {this.props.row.brdwriter}
               ({this.props.row.brddate.toLocaleDateString('en')}) </td>
            </tr>
            <tr>
                <td class="BoardItem-title" colspan="2">
                  <a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a>
                </td>
            </tr>
         </table>
        );

    }

}

export default BoardItem;
