import React from "react";
import "../css/SidePanel.css";
import { IoIosMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";


class SidePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPanelOpen: false, // Состояние панели: открыта или закрыта
        };
    }

    handleTogglePanel = () => {
        this.setState((prevState) => ({
            isPanelOpen: !prevState.isPanelOpen, // Инвертировать состояние панели
        }));
    };

    handleItemClick = (itemName) => {
        this.props.onPageChange(itemName);
    };

    render() {
        const { isPanelOpen } = this.state;

        return (
            <>
                <div className={`side-panel ${isPanelOpen ? "open" : ""}`}>
                    <div className={'toggle-button'} onClick={this.handleTogglePanel}>
                        <IoIosCloseCircleOutline className={'menu-icon'} />
                    </div>
                    <div className={'panel-content'}>
                        <span className={'panel-item'} onClick={() => this.handleItemClick("home")}>
                            Главная
                        </span>
                        <span className={'panel-item'} onClick={() => this.handleItemClick("currency")}>
                            Курсы валют
                        </span>
                        <span className={'panel-item'} onClick={() => this.handleItemClick("changes")}>
                            Изменения
                        </span>
                        <span className={'panel-item'} onClick={() => this.handleItemClick("about")}>
                            О нас
                        </span>
                    </div>
                </div>
                {!isPanelOpen && (
                    <div className="side-panel-close" onClick={this.handleTogglePanel}>
                        <IoIosMenu className={"menu-icon"} />
                    </div>
                )}
            </>
        );
    }
}

export default SidePanel;