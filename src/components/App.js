import React from "react";
import '../css/App.css';
import '../components/Header'
import '../components/SidePanel'
import Header from "./Header";
import SidePanel from "./SidePanel";
import Rates from "./Rates";
import InfoText from "./InfoText";
import DateButton from "./DateButton";
import Footer from "./Footer";
import TextAfterTable from "./TextAfterTable";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rates: [
                {
                    id: 1,
                    digitCode: "036",
                    chCode: 'AUD',
                    valueName: 'Австралийский доллар',
                    quantity: 1,
                    rate: 58.5989,
                    date: "02.07.2023"
                },
                {
                    id: 2,
                    digitCode: "944",
                    chCode: 'AZN',
                    valueName: 'Азербайджанский манат',
                    quantity: 1,
                    rate: 51.9908,
                    date: "02.07.2023"
                },
                {
                    id: 3,
                    digitCode: "051",
                    chCode: 'AMD',
                    valueName: 'Армянских драмов',
                    quantity: 100,
                    rate: 22.8940,
                    date: "02.07.2023"
                },
                {
                    id: 4,
                    digitCode: "933",
                    chCode: 'BYN',
                    valueName: 'Белорусский рубль',
                    quantity: 1,
                    rate: 29.1515,
                    date: "02.07.2023"
                },
                {
                    id: 5,
                    digitCode: "975",
                    chCode: 'BGN',
                    valueName: 'Болгарский лев',
                    quantity: 1,
                    rate: 49.4292,
                    date: "02.07.2023"
                },
                {
                    id: 6,
                    digitCode: "986",
                    chCode: 'BRL',
                    valueName: 'Бразильский реал',
                    quantity: 1,
                    rate: 18.1932,
                    date: "02.07.2023"
                },
                {
                    id: 7,
                    digitCode: "348",
                    chCode: 'HUF',
                    valueName: 'Венгерских форинтов',
                    quantity: 100,
                    rate: 25.8132,
                    date: "02.07.2023"
                },
                {
                    id: 8,
                    digitCode: "410",
                    chCode: 'KRW',
                    valueName: 'Вон Республики Корея',
                    quantity: 1000,
                    rate: 67.0748,
                    date: "02.07.2023"
                },
                {
                    id: 9,
                    digitCode: "704",
                    chCode: 'VND',
                    valueName: 'Вьетнамских донгов',
                    quantity: 10000,
                    rate: 37.1363,
                    date: "02.07.2023"
                },
                {
                    id: 10,
                    digitCode: "344",
                    chCode: 'HKD',
                    valueName: 'Гонконгский доллар',
                    quantity: 1,
                    rate: 11.2980,
                    date: "02.07.2023"
                },
                {
                    id: 11,
                    digitCode: "981",
                    chCode: 'GEL',
                    valueName: 'Грузинский лари',
                    quantity: 1,
                    rate: 33.7641,
                    date: "02.07.2023"
                },
                {
                    id: 12,
                    digitCode: "208",
                    chCode: 'DKK',
                    valueName: 'Австралийский доллар',
                    quantity: 1,
                    rate: 12.9807,
                    date: "02.07.2023"
                },
                {
                    id: 13,
                    digitCode: "784",
                    chCode: 'AED',
                    valueName: 'Датская крона',
                    quantity: 1,
                    rate: 24.0633,
                    date: "02.07.2023"
                },
                {
                    id: 14,
                    digitCode: "840",
                    chCode: 'USD',
                    valueName: 'Дирхам ОАЭ',
                    quantity: 1,
                    rate: 88.3844,
                    date: "02.07.2023"
                },
                {
                    id: 15,
                    digitCode: "978",
                    chCode: 'EUR',
                    valueName: 'Доллар США',
                    quantity: 1,
                    rate: 96.0195,
                    date: "02.07.2023"
                },
                {
                    id: 16,
                    digitCode: "818",
                    chCode: 'EGP',
                    valueName: 'Евро',
                    quantity: 10,
                    rate: 28.6062,
                    date: "02.07.2023"
                },
                {
                    id: 17,
                    digitCode: "356",
                    chCode: 'INR',
                    valueName: 'Египетских фунтов',
                    quantity: 10,
                    rate: 10.7719,
                    date: "02.07.2023"
                },
                {
                    id: 18,
                    digitCode: "360",
                    chCode: 'IDR',
                    valueName: 'Индийских рупий',
                    quantity: 10000,
                    rate: 58.8210,
                    date: "02.07.2023"
                },
                {
                    id: 19,
                    digitCode: "398",
                    chCode: 'KZT',
                    valueName: 'Индонезийских рупий',
                    quantity: 100,
                    rate: 19.4624,
                    date: "02.07.2023"
                },
                {
                    id: 20,
                    digitCode: "124",
                    chCode: 'CAD',
                    valueName: 'Казахстанских тенге',
                    quantity: 1,
                    rate: 66.6800,
                    date: "02.07.2023"
                },
                {
                    id: 21,
                    digitCode: "634",
                    chCode: 'QAR',
                    valueName: 'Канадский доллар',
                    quantity: 1,
                    rate: 24.2814,
                    date: "02.07.2023"
                },
                {
                    id: 22,
                    digitCode: "417",
                    chCode: 'KGS',
                    valueName: 'Катарский риал',
                    quantity: 10,
                    rate: 10.1357,
                    date: "02.07.2023"
                },
                {
                    id: 23,
                    digitCode: "156",
                    chCode: 'CNY',
                    valueName: 'Киргизских сомов',
                    quantity: 1,
                    rate: 12.1588,
                    date: "02.07.2023"
                },
                {
                    id: 24,
                    digitCode: "498",
                    chCode: 'MDL',
                    valueName: 'Китайский юань',
                    quantity: 10,
                    rate: 48.3572,
                    date: "02.07.2023"
                },
                {
                    id: 25,
                    digitCode: "554",
                    chCode: 'NZD',
                    valueName: 'Молдавских леев',
                    quantity: 1,
                    rate: 53.6935,
                    date: "02.07.2023"
                },
                {
                    id: 1,
                    digitCode: "036",
                    chCode: 'AUD',
                    valueName: 'Австралийский доллар',
                    quantity: 1,
                    rate: 58.6989,
                    date: "03.07.2023"
                },
                {
                    id: 2,
                    digitCode: "944",
                    chCode: 'AZN',
                    valueName: 'Азербайджанский манат',
                    quantity: 1,
                    rate: 51.9908,
                    date: "03.07.2023"
                },
                {
                    id: 3,
                    digitCode: "051",
                    chCode: 'AMD',
                    valueName: 'Армянских драмов',
                    quantity: 100,
                    rate: 22.8940,
                    date: "03.07.2023"
                },
                {
                    id: 4,
                    digitCode: "933",
                    chCode: 'BYN',
                    valueName: 'Белорусский рубль',
                    quantity: 1,
                    rate: 29.1515,
                    date: "03.07.2023"
                },
                {
                    id: 5,
                    digitCode: "975",
                    chCode: 'BGN',
                    valueName: 'Болгарский лев',
                    quantity: 1,
                    rate: 49.4292,
                    date: "03.07.2023"
                },
                {
                    id: 6,
                    digitCode: "986",
                    chCode: 'BRL',
                    valueName: 'Бразильский реал',
                    quantity: 1,
                    rate: 18.1932,
                    date: "03.07.2023"
                },
                {
                    id: 7,
                    digitCode: "348",
                    chCode: 'HUF',
                    valueName: 'Венгерских форинтов',
                    quantity: 100,
                    rate: 25.8132,
                    date: "03.07.2023"
                },
                {
                    id: 8,
                    digitCode: "410",
                    chCode: 'KRW',
                    valueName: 'Вон Республики Корея',
                    quantity: 1000,
                    rate: 67.0748,
                    date: "03.07.2023"
                },
                {
                    id: 9,
                    digitCode: "704",
                    chCode: 'VND',
                    valueName: 'Вьетнамских донгов',
                    quantity: 10000,
                    rate: 37.1363,
                    date: "03.07.2023"
                },
                {
                    id: 10,
                    digitCode: "344",
                    chCode: 'HKD',
                    valueName: 'Гонконгский доллар',
                    quantity: 1,
                    rate: 11.2980,
                    date: "03.07.2023"
                },
                {
                    id: 11,
                    digitCode: "981",
                    chCode: 'GEL',
                    valueName: 'Грузинский лари',
                    quantity: 1,
                    rate: 33.7641,
                    date: "03.07.2023"
                },
                {
                    id: 12,
                    digitCode: "208",
                    chCode: 'DKK',
                    valueName: 'Австралийский доллар',
                    quantity: 1,
                    rate: 12.9807,
                    date: "03.07.2023"
                },
                {
                    id: 13,
                    digitCode: "784",
                    chCode: 'AED',
                    valueName: 'Датская крона',
                    quantity: 1,
                    rate: 24.0633,
                    date: "03.07.2023"
                },
                {
                    id: 14,
                    digitCode: "840",
                    chCode: 'USD',
                    valueName: 'Дирхам ОАЭ',
                    quantity: 1,
                    rate: 88.3844,
                    date: "03.07.2023"
                },
                {
                    id: 15,
                    digitCode: "978",
                    chCode: 'EUR',
                    valueName: 'Доллар США',
                    quantity: 1,
                    rate: 96.0195,
                    date: "03.07.2023"
                },
                {
                    id: 16,
                    digitCode: "818",
                    chCode: 'EGP',
                    valueName: 'Евро',
                    quantity: 10,
                    rate: 28.6062,
                    date: "03.07.2023"
                },
                {
                    id: 17,
                    digitCode: "356",
                    chCode: 'INR',
                    valueName: 'Египетских фунтов',
                    quantity: 10,
                    rate: 10.7719,
                    date: "03.07.2023"
                },
                {
                    id: 18,
                    digitCode: "360",
                    chCode: 'IDR',
                    valueName: 'Индийских рупий',
                    quantity: 10000,
                    rate: 58.8210,
                    date: "03.07.2023"
                },
                {
                    id: 19,
                    digitCode: "398",
                    chCode: 'KZT',
                    valueName: 'Индонезийских рупий',
                    quantity: 100,
                    rate: 19.4624,
                    date: "03.07.2023"
                },
                {
                    id: 20,
                    digitCode: "124",
                    chCode: 'CAD',
                    valueName: 'Казахстанских тенге',
                    quantity: 1,
                    rate: 66.6800,
                    date: "03.07.2023"
                },
                {
                    id: 21,
                    digitCode: "634",
                    chCode: 'QAR',
                    valueName: 'Канадский доллар',
                    quantity: 1,
                    rate: 24.2814,
                    date: "03.07.2023"
                },
                {
                    id: 22,
                    digitCode: "417",
                    chCode: 'KGS',
                    valueName: 'Катарский риал',
                    quantity: 10,
                    rate: 10.1357,
                    date: "03.07.2023"
                },
                {
                    id: 23,
                    digitCode: "156",
                    chCode: 'CNY',
                    valueName: 'Киргизских сомов',
                    quantity: 1,
                    rate: 12.1588,
                    date: "03.07.2023"
                },
                {
                    id: 24,
                    digitCode: "498",
                    chCode: 'MDL',
                    valueName: 'Китайский юань',
                    quantity: 10,
                    rate: 48.3572,
                    date: "03.07.2023"
                },
                {
                    id: 25,
                    digitCode: "554",
                    chCode: 'NZD',
                    valueName: 'Молдавских леев',
                    quantity: 1,
                    rate: 53.6935,
                    date: "03.07.2023"
                }
            ],
            currentPage: "home",
            selectedDate : new Date().toLocaleDateString()
        }
    }
    updateTable = (date) => {
        this.setState({ selectedDate: date });
    };
    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };
    renderPage = () => {
        const { currentPage } = this.state;
        const { rates, selectedDate } = this.state;
        const filteredRates = rates.filter((rate) => rate.date === selectedDate);
        switch (currentPage) {
            case "home":
                return (
                    <div>

                    </div>
                );
            case "currency":
                return (<div>
                    <InfoText />
                    <DateButton updateTable={this.updateTable} />
                    <Rates rates={filteredRates} />
                    <TextAfterTable />
                    <Footer />
                </div>);
            case "changes":
                return (
                    <div>

                    </div>
                );
            case "about":
                return (
                    <div>

                    </div>
                );
            default:
                break;
        }
    };

    render() {
        const { currentPage } = this.state;
        return (
            <div className="App">
                <Header />
                <SidePanel currentPage={currentPage} onPageChange={this.handlePageChange} />
                {this.renderPage()}
            </div>
        );
    }
}

export default App;
