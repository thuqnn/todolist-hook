import React from "react";

function CompleteTask(props) {
  return (
    <div className="completed">
      <section className="listTask">
        <div className="totalComplete">
          <button className="fas fa-chevron-down"></button>
          <span> Completed</span>
          <span> 157</span>
        </div>
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
    </div>
  );
}

export default CompleteTask;
