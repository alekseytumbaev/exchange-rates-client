import React from "react";
import Rate from "./Rate";
import "../css/Rates.css";

class Rates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSort: '' // Изначально не выбрана ни одна сортировка
        };
    }
    handleSortChange = event => {
        const selectedSort = event.target.value;
        this.setState({ selectedSort });
    };
    render() {
        const { rates } = this.props;
        const { selectedSort } = this.state;

        let sortedRates = rates.slice();

        switch (selectedSort) {
            case 'А-Я':
                sortedRates.sort((a, b) => a.valueName.localeCompare(b.valueName));
                break;
            case 'По убыванию':
                sortedRates.sort((a, b) => b.rate - a.rate);
                break;
            case 'По возрастанию':
                sortedRates.sort((a, b) => a.rate - b.rate);
                break;
            default:
                break;
        }

        return (
            <div className={"rates"}>
                <div className="sort-dropdown">
                    <select value={selectedSort} onChange={this.handleSortChange}>
                        <option value="">Без сортировки</option>
                        <option value="А-Я">А-Я</option>
                        <option value="По убыванию">По убыванию</option>
                        <option value="По возрастанию">По возрастанию</option>
                    </select>
                </div>
                <div className="table-container">
                    <table className="rates-table">
                        <thead>
                        <tr>
                            <th>Цифр. код</th>
                            <th>Букв. код</th>
                            <th>Наименование валюты</th>
                            <th>Единиц</th>
                            <th>Курс ЦБ РФ</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sortedRates.map((element) => (
                            <Rate key={element.id} rate={element} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default Rates;
