import React from "react";
import "../css/AboutPage.css";
import semen from "../img/semen.png";
import lena from "../img/lena.png"
import lesha from "../img/lesha.png"


const AboutPage = () => {
    return (
        <div className="about-page">
            <h1 className="page-title">О нас</h1>
            <p className="description">
                Мы - команда разработчиков, работающих над этим проектом. Наша цель - создать удобное и полезное приложение для пользователей. Мы стремимся предоставить актуальную информацию о курсах валют и изменениях на рынке. Надеемся, что наше приложение будет полезным и интересным для вас.
            </p>
            <h2 className="team-title">Наша команда</h2>
            <div className="team-members">
                <div className="team-member">
                    <img src={lesha} alt="Участник команды" />
                    <h3 className="member-name">Алексей</h3>
                    <p className="member-role">Бэкэнд разработчик</p>
                </div>
                <div className="team-member">
                    <img src={lena} alt="Участник команды" />
                    <h3 className="member-name">Елена</h3>
                    <p className="member-role">Бэкэнд разработчик</p>
                </div>
                <div className="team-member">
                    <img src={semen} alt="Участник команды" />
                    <h3 className="member-name">Семён</h3>
                    <p className="member-role">Фронтэнд разработчик</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
