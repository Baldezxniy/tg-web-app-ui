import { useTelegram } from "../../hooks/useTelegram.js";
import { Button } from "../Buttom/Button.jsx";

import "./Header.scss";

export const Header = (props) => {

    const { onClose, user } = useTelegram();

    return (
        <header className="header">
            <Button onClick={onClose}>Закрыть</Button>
            <span className="username">{user?.username}</span>
        </header>
    );
};