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
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        if (selectedDate > currentDate) {
            this.setState({ selectedDate: currentDate });
            this.props.updateTable(currentDate.toISOString().slice(0, 10));
        } else {
            this.setState({ selectedDate });
            this.props.updateTable(selectedDate.toISOString().slice(0, 10));
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
