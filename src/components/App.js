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

const baseUrl = "http://localhost:8080/rates";

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
        const parts= new Date().toLocaleDateString().split('.');
        const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
        this.state = {
            rates: [],
            ratesChages: [],
            currentPage: "home",
            urlTable: baseUrl + "?date=" + formattedDate,
            urlChages: "",
            codeValute: "AUD",
            datePeriod: {
                startDateFormatted: startDate.toLocaleDateString().split('.').reverse().join('-'),
                endDateFormatted: endDate.toLocaleDateString().split('.').reverse().join('-')
            }
        }
    }
    updateTable = (date) => {
        const parts = date.split('.');
        const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
        this.setState({ urlTable:baseUrl + "?date=" + formattedDate });
        axios.get(this.state.urlTable).then((res) =>
        {
            this.setState({rates: res.data});
        });
    };
    updateChangesPage = (dates, valuteCode) => {
        this.setState({ codeValute: valuteCode }, () => {
            this.setState(
                { urlChanges: baseUrl + "/dynamic?from=" + dates.startDateFormatted + "&to=" + dates.endDateFormatted + "&code=" + this.state.codeValute },
                () => {
                    axios.get(this.state.urlChanges).then((result) =>
                    {
                        this.setState({ratesChages: result.data}, () => {
                            console.log(this.state.ratesChages)
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
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };
    renderPage = () => {
        const { currentPage } = this.state;
        const { rates } = this.state;
        switch (currentPage) {
            case "home":
                window.scrollTo(0, 0);
                return (
                    <div>
                        <HomePage onPageChange={this.handlePageChange}/>
                        <Footer />
                    </div>
                );
            case "currency":
                window.scrollTo(0, 0);
                return (<div>
                    <InfoText />
                    <DateButton updateTable={this.updateTable} />
                    <Rates rates={rates} currentPage={currentPage} onPageChange={this.handlePageChange} updateCodeValute = {this.updateCodeValute}/>
                    <TextAfterTable />
                    <Footer />
                </div>);
            case "changes":
                window.scrollTo(0, 0);
                return (
                    <div>
                        <ChangesPage updateChanges = {this.updateChangesPage} ratesChages = {this.state.ratesChages} code={this.state.codeValute} date={this.state.datePeriod}/>
                        <Footer />
                    </div>
                );
            case "about":
                window.scrollTo(0, 0);
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
                <Header currentPage={currentPage} onPageChange={this.handlePageChange} updateCodeValute = {this.updateCodeValute}/>
                {this.renderPage()}
                <SidePanel currentPage={currentPage} onPageChange={this.handlePageChange} />
            </div>
        );
    }
}

export default App;
