import React from 'react';
import './Modal.scss';
import SkillsDetails from '../SkillsDetails/SkillsDetails';
import CloseBtn from '../../images/close.png';

const Modal = ({ heading, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <div className="top-bar">
          <div className="header">
            <span>{heading}</span>
            <div className="btn-close" onClick={onClose}>
              <img src={CloseBtn} alt="" />
            </div>
          </div>
        </div>

        <div className="modal-content">
          {heading === 'SKILLS' && <SkillsDetails />}
          {heading === 'PROJECTS' && <SkillsDetails />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
