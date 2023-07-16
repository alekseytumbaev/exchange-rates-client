import React from "react";
import "../css/HomePage.css";
import ratesSrc from "../img/rates.jpg";
import changesRate from "../img/change.jpg"
import about from "../img/about.jpg"

class HomePage extends React.Component {
    handleItemClick = (itemName) => {
        this.props.onPageChange(itemName);
    }
    render() {
        return (
            <div className="home-page">
                <div className="main-block">
                    <img src={ratesSrc} alt="Курсы валют" className={"main-image"} />
                    <p className={"text-main"}>Курсы валют</p>
                    <p className={"text-main-low"}>Получите актуальную информацию о курсах валют</p>
                    <button className={"overlay-button"} onClick={() => this.handleItemClick("currency")} >Открыть</button>
                </div>
                <div className={"secondary-blocks"}>
                    <div className={"secondary-block"}>
                        <img src={changesRate} alt="Изменения курса" className={"secondary-image"} />
                        <p className={"text-secondary"}>Изменения курса</p>
                        <p className={"text-secondary-low"}>Отслеживайте изменения валютного курса</p>
                        <button className={"overlay-button"} onClick={() => this.handleItemClick("changes")}>Открыть</button>
                    </div>
                    <div className={"secondary-block"}>
                        <img src={about} alt="О нас" className={"secondary-image"} />
                        <p className={"text-secondary"}>О нас</p>
                        <p className={"text-secondary-low"}>Узнайте больше о нашем проекте</p>
                        <button className={"overlay-button"} onClick={() => this.handleItemClick("about")}>Открыть</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;


