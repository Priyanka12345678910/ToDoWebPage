import React, {Component} from 'react';

export default class TodoInput extends Component {
  render(){
    const {item, handleChange, handleSubmit, editItem} = this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"/>
              </div>
            </div>
            <input
              className="form-control"
              value={item}
              onChange={handleChange}
              placeholder="Add to Todo List"></input>
          </div>
          <button className= {editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>
          {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
