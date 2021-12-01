import React from 'react';
import PropTypes from 'prop-types';

function TransactionItem({ type, amount, currency }) {
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
}
TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionItem;
