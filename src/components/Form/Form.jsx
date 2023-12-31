import {useCallback, useEffect, useState} from "react";
import {useTelegram} from "../../hooks/useTelegram.js";
import "./Form.scss";

export const Form = () => {

    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [subject, setSubject] = useState("physical");

    const {tg, mainButton} = useTelegram();

    useEffect(() => {
        mainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!country || !city) {
            mainButton.hide();
        } else {
            mainButton.show();
        }
    }, [country, city]);

    const onSendData = useCallback(() => {
        const data = {
            country,
            city,
            subject
        };

        console.log(data);
        tg.sendData(JSON.stringify(data));
    }, [country, city, subject])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData]);

    return (
        <div className="form">
            <h3>Введите ваши данные</h3>
            <input
                className="input"
                placeholder="Страна"
                value={country}
                onChange={e => setCountry(e.target.value)}/>
            <input
                className="input"
                placeholder="город"
                value={city}
                onChange={e => setCity(e.target.value)}/>
            <select
                value={subject}
                className="select"
                onChange={e => setSubject(e.target.value)}
            >
                <option value="physical">Физ. лицо</option>
                <option value="legal">Юр. лицо</option>
            </select>
        </div>
    )
}