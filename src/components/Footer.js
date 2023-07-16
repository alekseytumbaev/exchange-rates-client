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
                        <p>Email: popuGay@mail.com</p>
                        <p>Телефон: +1 234 456 789</p>
                    </div>
                    <div className="footer-section">
                        <h3>О нас</h3>
                        <p>Мы занимаемся...</p>
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
