import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ type, id, amount, currency }) => (
                    <tr key={id}>
                        <TransactionItem
                            type={type}
                            amount={amount}
                            currency={currency}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
};
export default TransactionHistory;
