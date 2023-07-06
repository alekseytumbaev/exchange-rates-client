import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../css/InfoText.css";

class InfoText extends React.Component {
    render() {
        return (
            <div className="info-text">
                <h1>Официальные курсы валют на заданную дату, устанавливаемые ежедневно Центральным банком Российской Федерации</h1>
            </div>
        );
    }
}

export default InfoText;
