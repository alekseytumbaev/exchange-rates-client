import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/DateButton.css";

class DateButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date()
        };
    }

    handleDateSelect = date => {
        if (date.toLocaleDateString() > new Date().toLocaleDateString())
        {
            const newDate = new Date().toLocaleDateString();
            this.setState({ selectedDate: new Date() });
            this.props.updateTable(newDate);
        } else {
            const newDate = date.toLocaleDateString();
            this.setState({ selectedDate: date });
            this.props.updateTable(newDate);
        }
    };

    render() {
        const { selectedDate } = this.state;

        return (
            <div className="custom-datepicker">
                <div className="custom-datepicker-info">
                    <span>Выбранная дата:</span>
                    <span>{selectedDate.toLocaleDateString()}</span>
                </div>
                <div className="custom-datepicker-calendar">
                    <DatePicker
                        selected={selectedDate}
                        onChange = {this.handleDateSelect}
                        dateFormat="dd.MM.yyyy"
                        withPortal
                        customInput={<button className={"custom-datepicker-button"}>Выбрать</button>}
                    />
                </div>
            </div>
        );
    }
}

export default DateButton;
