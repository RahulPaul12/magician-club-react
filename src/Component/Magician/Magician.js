import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Magician.css';
const Magician = (props) => {
    const { name, age, born, country, salary, img } = props.magician;
    const element = <FontAwesomeIcon icon={faUserPlus} />
    return (
        <div className="magician">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4><small>Born: {born}</small></h4>
            <h4><small>Country: {country}</small></h4>
            <h4><small>Age {age}</small></h4>
            <h4><small>Sallary: {salary}</small></h4>
            <button
                onClick={() => props.handleHirebtn(props.magician)}
                className="hire-btn">{element} Hire </button>
        </div>
    );
};

export default Magician;