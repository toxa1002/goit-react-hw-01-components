import React from 'react';
import PropTypes from 'prop-types';
import StatisticElement from '../StatisticElement/StatisticElement';
import s from './Statistics.module.css';

function Statistics({ title = '', stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
                {stats.map(stat => (
                    <li key={stat.id} className={s.item}>
                        <StatisticElement
                            label={stat.label}
                            percentage={stat.percentage}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};

export default Statistics;

/* {props.map(stat =>(
        <StatisticElement
        label={stat.label}
        percentage={stat.percentage}
        id={stat.id}
        />))} */
