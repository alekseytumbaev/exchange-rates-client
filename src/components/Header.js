import React from "react";
import "../css/Header.css";
import logo from "../img/logo.png";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rates: [
                {
                    nameValue: "Австралийский доллар",
                    codeValue: "AUD"
                },
                {
                    nameValue: "Азербайджанский манат",
                    codeValue: "AZN"
                },
                {
                    nameValue: "Армянских драмов",
                    codeValue: "AMD"
                },
                {
                    nameValue: "Белорусский рубль ",
                    codeValue: "BYN"
                },
                {
                    nameValue: "Болгарский лев",
                    codeValue: "BGN"
                },
                {
                    nameValue: "Бразильский реал",
                    codeValue: "BRL"
                },
                {
                    nameValue: "Венгерских форинтов ",
                    codeValue: "HUF"
                },
                {
                    nameValue: "Вон Республики Корея",
                    codeValue: "KRW"
                },
                {
                    nameValue: "Вьетнамских донгов",
                    codeValue: "VND"
                },
                {
                    nameValue: "Гонконгский доллар",
                    codeValue: "HKD"
                },
                {
                    nameValue: "Грузинский лари",
                    codeValue: "GEL"
                },
                {
                    nameValue: "Датская крона",
                    codeValue: "DKK"
                },
                {
                    nameValue: "Дирхам ОАЭ",
                    codeValue: "AED"
                },
                {
                    nameValue: "Доллар США",
                    codeValue: "USD"
                },
                {
                    nameValue: "Евро",
                    codeValue: "EUR"
                },
                {
                    nameValue: "Египетских фунтов",
                    codeValue: "EGP"
                },
                {
                    nameValue: "Индийских рупий ",
                    codeValue: "INR"
                },
                {
                    nameValue: "Индонезийских рупий",
                    codeValue: "IDR"
                },
                {
                    nameValue: "Казахстанских тенге ",
                    codeValue: "KZT"
                },
                {
                    nameValue: "Канадский доллар",
                    codeValue: "CAD"
                },
                {
                    nameValue: "Катарский риал",
                    codeValue: "QAR"
                },
                {
                    nameValue: "Киргизских сомов",
                    codeValue: "KGS"
                },
                {
                    nameValue: "Китайский юань",
                    codeValue: "CNY"
                },
                {
                    nameValue: "Молдавских леев",
                    codeValue: "MDL"
                },
                {
                    nameValue: "Новозеландский доллар",
                    codeValue: "NZD"
                },
                {
                    nameValue: "Новый туркменский манат",
                    codeValue: "TMT"
                },
                {
                    nameValue: "Норвежских крон",
                    codeValue: "NOK"
                },
                {
                    nameValue: "Польский злотый",
                    codeValue: "PLN"
                },
                {
                    nameValue: "Румынский лей",
                    codeValue: "RON"
                },
                {
                    nameValue: "СДР (специальные права заимствования)",
                    codeValue: "XDR"
                },
                {
                    nameValue: "Сербских динаров",
                    codeValue: "RSD"
                },
                {
                    nameValue: "Сингапурский доллар",
                    codeValue: "SGD"
                },
                {
                    nameValue: "Таджикских сомони",
                    codeValue: "TJS"
                },
                {
                    nameValue: "Таиландских батов",
                    codeValue: "THB"
                },
                {
                    nameValue: "Турецких лир",
                    codeValue: "TRY"
                },
                {
                    nameValue: "Узбекских сумов",
                    codeValue: "UZS"
                },
                {
                    nameValue: "Украинских гривен",
                    codeValue: "UAH"
                },
                {
                    nameValue: "Фунт стерлингов Соединенного королевства",
                    codeValue: "GBP"
                },
                {
                    nameValue: "Чешских крон",
                    codeValue: "CZK"
                },
                {
                    nameValue: "Шведских крон",
                    codeValue: "SEK"
                },
                {
                    nameValue: "Швейцарский франк",
                    codeValue: "CHF"
                },
                {
                    nameValue: "Южноафриканских рэндов",
                    codeValue: "ZAR"
                },
                {
                    nameValue: "Японских иен",
                    codeValue: "JPY "
                }
            ],
            searchQuery: "",
            suggestions: []
        };
    }
    handleItemClick = (itemName, page) => {
        this.props.onPageChange(page);
        this.setState((prevState) => ({
            isPanelOpen: !prevState.isPanelOpen,
        }));
        this.props.updateCodeValute(itemName);
        this.setState({ searchQuery: "", suggestions: [] });
    };

    handleInputChange = (event) => {
        const searchQuery = event.target.value;
        const { rates } = this.state;

        if (searchQuery === "") {
            this.setState({ searchQuery, suggestions: [] });
        } else {
            const suggestions = rates.filter(
                (rate) =>
                    rate.nameValue.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    rate.codeValue.toLowerCase().includes(searchQuery.toLowerCase())
            );
            this.setState({ searchQuery, suggestions });
        }
    };

    render() {
        const { searchQuery, suggestions } = this.state;

        return (
            <div className="header">
                <img src={logo} alt="Логотип" className="logo" onClick={() => this.handleItemClick("AUD","home")}/>
                <div className="search-container">
                    <input type="text" placeholder="Поиск курса валют" value={searchQuery} onChange={this.handleInputChange}/>
                    {suggestions.length > 0 && (
                        <ul className="suggestions">
                            {suggestions.map((rate, index) => (
                                <li key={index} onClick={() => this.handleItemClick(rate.codeValue, "changes")}>
                                    {rate.nameValue} ({rate.codeValue})
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}

export default Header;
