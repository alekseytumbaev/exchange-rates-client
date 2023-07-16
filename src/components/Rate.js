const Rate = ({ rate, onPageChange, updateCodeValute }) => {
    const handleItemClick = (itemName, page) => {
        onPageChange(page);
        updateCodeValute(itemName);
    };

    return (
        <tr onClick={() => handleItemClick(rate.chCode, "changes")}>
            <td>{rate.digitCode}</td>
            <td>{rate.chCode}</td>
            <td>{rate.valuteName}</td>
            <td>{rate.quantity}</td>
            <td>{rate.rate}</td>
        </tr>
    );
};

export default Rate;
