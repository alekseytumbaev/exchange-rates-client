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
import HomePage from "./HomePage";
import ChangesPage from "./ChangesPage";
import axios from "axios";
import AboutPage from "./AboutPage";
import Notification from "./Notification";

const baseUrl = "http://localhost:8080/";

class App extends React.Component {
    componentDidMount() {
        axios.get(this.state.urlTable).then((res) =>
        {
            this.setState({rates: res.data});
        });
        this.updateChangesPage(this.state.datePeriod, this.state.codeValute);
    }
    constructor(props) {
        const startDate = new Date();
        const endDate = new Date();
        startDate.setDate(endDate.getDate() - 7);
        super(props);
        const parts= new Date();
        const formattedDate = parts.toISOString().slice(0, 10);
        this.state = {
            rates: [],
            ratesChages: [],
            currentPage: "home",
            urlTable: baseUrl + "rates?date=" + formattedDate,
            urlChages: "",
            codeValute: "AUD",
            datePeriod: {
                startDateFormatted: startDate.toISOString().slice(0, 10),
                endDateFormatted: endDate.toISOString().slice(0, 10)
            }
        }
    };
    updateTable = (date) => {
        this.setState({ urlTable:baseUrl + "rates?date=" + date });
        axios.get(this.state.urlTable).then((res) =>
        {
            this.setState({rates: res.data});
        });
    };

    updateMassiveRates = (updatedRates) => {
        if (!Array.isArray(updatedRates)) {
            updatedRates = [updatedRates]; // Обернуть в массив, если это не массив
        }

        this.setState((prevState) => {
            const updatedRatesArray = [...prevState.rates];
            updatedRates.forEach((updatedRate) => {
                const indexToUpdate = updatedRatesArray.findIndex(
                    (rate) => rate.chCode === updatedRate.chCode
                );
                if (indexToUpdate !== -1) {
                    updatedRatesArray[indexToUpdate] = updatedRate;
                } else {
                    updatedRatesArray.push(updatedRate);
                }
            });
            return { rates: updatedRatesArray };
        });
    };


    updateChangesPage = (dates, valuteCode) => {
        this.setState({ codeValute: valuteCode }, () => {
            this.setState(
                { urlChanges: baseUrl + "rates/dynamic?from=" + dates.startDateFormatted + "&to=" + dates.endDateFormatted + "&code=" + this.state.codeValute },
                () => {
                    axios.get(this.state.urlChanges).then((result) =>
                    {
                        this.setState({ratesChages: result.data}, () => {

                        });
                    });
                }
            );
        });
    };

    updateCodeValute = (code) => {
        this.setState({ codeValute: code }, () => {
            this.updateChangesPage(this.state.datePeriod, this.state.codeValute);
        });
    };

    handlePageChange = (page) => {
        window.scrollTo(0, 0);
        this.setState({ currentPage: page });
    };
    renderPage = () => {
        const { currentPage } = this.state;
        const { rates } = this.state;
        switch (currentPage) {
            case "home":
                return (
                    <div>
                        <HomePage onPageChange={this.handlePageChange}/>
                        <Footer />
                    </div>
                );
            case "currency":
                return (<div>
                    <InfoText />
                    <DateButton updateTable={this.updateTable} />
                    <Rates rates={rates} currentPage={currentPage} onPageChange={this.handlePageChange} updateCodeValute = {this.updateCodeValute}/>
                    <TextAfterTable />
                    <Footer />
                </div>);
            case "changes":
                return (
                    <div>
                        <ChangesPage updateChanges = {this.updateChangesPage} ratesChages = {this.state.ratesChages} code={this.state.codeValute} date={this.state.datePeriod}/>
                        <Footer />
                    </div>
                );
            case "about":
                return (
                    <div>
                        <AboutPage />
                        <Footer />
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
                <Notification baseUrl={baseUrl} updateMassiveRates={this.updateMassiveRates}/>
                <Header currentPage={currentPage} onPageChange={this.handlePageChange} updateCodeValute = {this.updateCodeValute}/>
                {this.renderPage()}
                <SidePanel currentPage={currentPage} onPageChange={this.handlePageChange} />
            </div>
        );
    };
}

export default App;
