import React from "react";
import "../css/DateSelector.css";

class DateSelector extends React.Component {
    render() {
        return (
            <div className={"selectors"}>
                <div className={"selector"}>
                    <select value={this.props.selectedPeriod} onChange={this.props.onSelectPeriod}>
                        <option value="week">Неделя</option>
                        <option value="month">Месяц</option>
                        <option value="half year">Полгода</option>
                        <option value="year">Год</option>
                    </select>
                </div>
                <div className={"selector"}>
                    <select value={this.props.selectedCurrency} onChange={this.props.onSelectCurrency}>
                        {this.props.currencies.map((currency, index) => (
                            <option key={index} value={currency.codeValue}>
                                {currency.nameValue} ({currency.codeValue})
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default DateSelector;
