import React from "react";
import "../css/Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Контакты</h3>
                        <p>Адрес: г. Барнаул</p>
                        <p>Email: ACE_Barnaul@mail.com</p>
                        <p>Телефон: +7 996 700 07 02</p>
                    </div>
                    <div className="footer-section">
                        <h3>О нас</h3>
                        <p>Мы занимаемся разработкой веб-приложений, которые будут полезны каждому!</p>
                    </div>
                    <div className="footer-section">
                        <h3>Авторство</h3>
                        <p>Создано группой разработчиков ACE</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} Все права защищены.
                </div>
            </footer>
        );
    }
}

export default Footer;
