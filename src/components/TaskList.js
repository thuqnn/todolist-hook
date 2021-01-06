import React from "react";

function TaskList(props) {
  return (
    <section className="listTask">
      <ul>
        <li>
          <div className="wrapItem">
            <input type="checkbox" />
            <label>Hoc HTML CSS</label>
            <button className="far fa-star"></button>
          </div>
        </li>
        <li>
          <div className="wrapItem">
            <input type="checkbox" />
            <label>Hoc Javascript</label>
            <button className="far fa-star"></button>
          </div>
        </li>
        <li>
          <div className="wrapItem">
            <input type="checkbox" />
            <label>Hoc Reactjs</label>
            <button className="far fa-star"></button>
          </div>
        </li>
        <li>
          <div className="wrapItem">
            <input type="checkbox" />
            <label>Hoc ES6</label>
            <button className="far fa-star"></button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default TaskList;
