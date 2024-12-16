import React, { useState } from 'react';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown">
      <a href="#" onClick={toggleDropdown}>
        {title}
      </a>
      {isOpen && (
        <ul className="dropdown-content">
          {items.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
