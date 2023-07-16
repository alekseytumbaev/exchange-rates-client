import React from "react";
import DateSelector from "./DateSelector";
import ChartComponent from "./ChartComponent";
import "../css/ChangesPage.css";

class ChangesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCurrency: this.props.code,
            currencyList: [
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
            selectedPeriod: "",
            datePeriod: {
                startDateFormatted: this.props.date.startDateFormatted,
                endDateFormatted: this.props.date.endDateFormatted
            }
        };
    }

    handleCurrencySelect = event => {
        this.setState({selectedCurrency : event.target.value}, function() {
            this.props.updateChanges(this.state.datePeriod, this.state.selectedCurrency);
        }) ;
    };

    handlePeriodSelect = event => {
        const selectedPeriod = event.target.value;
        this.setState({ selectedPeriod }, () => {
            const { selectedPeriod } = this.state;
            const startDate = new Date();
            const endDate = new Date();

            if (selectedPeriod === "week") {
                startDate.setDate(endDate.getDate() - 7);
            } else if (selectedPeriod === "month") {
                startDate.setMonth(endDate.getMonth() - 1);
            } else if (selectedPeriod === "half year") {
                startDate.setMonth(endDate.getMonth() - 6);
            } else if (selectedPeriod === "year") {
                startDate.setFullYear(endDate.getFullYear() - 1);
            }

            const startDateFormatted = startDate.toISOString().slice(0, 10);
            const endDateFormatted = endDate.toISOString().slice(0, 10);

            this.setState(prevState => ({
                datePeriod: {
                    startDateFormatted,
                    endDateFormatted
                }
            }), () => {
                this.props.updateChanges(this.state.datePeriod, this.state.selectedCurrency);
            });
        });
    };

    render() {
        const { selectedPeriod, currencyList } = this.state;
        return (
            <div className={"changes-page"}>
                <div className={"info-div"}>
                    <h1 className={"main-text"}>Изменения курса валюты</h1>
                    <p className={"text-information"}>
                        Курсы валют предоставлены Центральным Банком Российской Федерации. Данные обновляются ежедневно и представляют изменения курсов различных валют относительно российского рубля.
                    </p>
                    <div className="custom-selected-date">
                        <span>Выбранная дата:</span>
                        <span> с {this.state.datePeriod.startDateFormatted} по {this.state.datePeriod.endDateFormatted}</span>
                    </div>
                    <DateSelector
                        selectedPeriod={selectedPeriod}
                        onSelectPeriod={this.handlePeriodSelect}
                        currencies={currencyList}
                        selectedCurrency={this.state.selectedCurrency}
                        onSelectCurrency={this.handleCurrencySelect}
                    />
                </div>
                <div className={"chart"}>
                    <ChartComponent currencyData={this.props.ratesChages} selectedCurrency={this.state.selectedCurrency}/>
                </div>
            </div>
        );
    }
}

export default ChangesPage;
