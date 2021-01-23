import React from "react";
import { connect } from "react-redux";
import classes from "./Header.module.css";
import { onAddTodos, onAddText } from "../actionCreator"; //1

function Header({ onAddTodos, onAddText, currentText }) {
  //3
  const handleChange = (value) => {
    onAddText(value); //4
  };

  const handeKeyDown = (event) => {
    if (event.keyCode === 13 && currentText) {
      onAddTodos(currentText); //4
      onAddText(""); //4
    }
  };

  return (
    <header className={classes.heading}>
      <h1>Tasks</h1>
      <input
        type="text"
        value={currentText}
        placeholder="Add a task"
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(event) => handeKeyDown(event)}
      />
    </header>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    currentText: state.addTodos.currentText,
  };
};
//function addTodos is reducer
const mapDispatchToProps = { onAddTodos, onAddText }; //2 creatoraction same import

export default connect(mapStateToProps, mapDispatchToProps)(Header);
