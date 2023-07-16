import React from "react";

const Rate = ({ rate }) => {
    return (
        <tr>
            <td>{rate.digitCode}</td>
            <td>{rate.chCode}</td>
            <td>{rate.valueName}</td>
            <td>{rate.quantity}</td>
            <td>{rate.rate}</td>
        </tr>
    );
};

export default Rate;