import React from 'react';

//a Bootstrap-style dropdown button with three dropdown options
function Dropdown() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Option 1</a>
        <a className="dropdown-item" href="#">Option 2</a>
        <a className="dropdown-item" href="#">Option 3</a>
      </div>
    </div>
  );
}

export default Dropdown;
