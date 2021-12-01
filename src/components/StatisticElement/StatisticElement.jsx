import React from 'react';
import PropTypes from 'prop-types';
import s from './StatisticElement.module.css';

function StatisticElement({ label, percentage }) {
    return (
        <>
            <span className={s.label}>{label} </span>
            <span className={s.percentage}>{percentage} % </span>
        </>
    );
}

StatisticElement.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};

export default StatisticElement;
