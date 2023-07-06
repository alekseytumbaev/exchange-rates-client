import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../css/TextAfterTable.css";

class InfoText extends React.Component {
    render() {
        return (
            <div className="text">
                <p>Информация о курсах обмена валюты, установленных Центральным банком Российской Федерации. Курсы иностранных валют к рублю по ЦБ на выбранную дату.</p>
            </div>
        );
    }
}

export default InfoText;
