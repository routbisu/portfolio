import React, { useState } from 'react';
import './Dropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({
  options,
  onChange,
  defaultValue,
  defaultText,
  hideSelectedOption
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    defaultValue || defaultText || 'Select'
  );
  let ddMenu;

  const closeMenu = () => {
    setMenuOpen(false);
    if (typeof document !== `undefined`)
      document.removeEventListener('click', closeMenu);
  };

  const openMenu = () => {
    setMenuOpen(true);
    if (typeof document !== `undefined`)
      document.addEventListener('click', closeMenu);
  };

  const changeHandler = (evt, key) => {
    // Find option value and set
    const opt = options.find(o => o.key === key);
    if (opt) setSelectedItem(opt.value);
    if (onChange) onChange(key);
    if (ddMenu.contains(evt.target)) closeMenu();
  };

  const getOptions = option => (
    <button
      className="option"
      key={option.key}
      onClick={evt => changeHandler(evt, option.key)}
    >
      {option.value}
    </button>
  );

  return (
    <div className="dropdown-container">
      <button
        className="select"
        onClick={() => {
          menuOpen ? closeMenu() : openMenu();
        }}
      >
        {selectedItem}
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      {menuOpen && (
        <div
          className="options"
          ref={elem => {
            ddMenu = elem;
          }}
        >
          {options &&
            options.map(option =>
              hideSelectedOption
                ? option.key !== selectedItem && getOptions(option)
                : getOptions(option)
            )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
