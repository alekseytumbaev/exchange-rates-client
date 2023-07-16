import React from "react";
import "../css/Notification.css";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNotification: false,
            message: ""
        };
    }

    componentDidMount() {
        const self = this; // Сохраняем ссылку на компонент в переменной

        const socket = new SockJS(this.props.baseUrl + "websockets");
        const stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/notifications/rates-updates', function (rates) {
                const parsedRates = JSON.parse(rates.body);
                self.setState({ message: parsedRates[0].valuteName + " изменился, теперь он стоит: " + parsedRates[0].rate }, () => {
                    self.showNotification(parsedRates[0]);
                });
            });
        });
    }

    showNotification = (rate) => {
        this.setState({ showNotification: true }, () => {
            setTimeout(() => {
                this.setState({ showNotification: false });
            }, 8000);
        });
        this.props.updateMassiveRates(rate);
    };

    hideNotification = () => {
        this.setState({ showNotification: false });
    };

    render() {
        const { showNotification } = this.state;

        return (
            <div>
                {showNotification && (
                    <div className="notification" onClick={this.hideNotification}>
                        <p>{this.state.message}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Notification;
