import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DEFAULT_TICK_PERIOD} from "../../utils/consts";
import {Clock} from "../clock/clock";
import {AddClockButton} from "../add-clock-button/add-clock-button";
import {addClock} from "../../store/actions/actions";
import momentTz from "moment-timezone";

const App = () => {

    const dispatch = useDispatch();
    const clocks = useSelector(state => state.clocks);
    const [now, setNow] = useState(momentTz());

    useEffect(() => {
        const intervalId = setInterval(() => setNow(momentTz()), DEFAULT_TICK_PERIOD);
        return () => clearInterval(intervalId);
    }, []);

    const addNewClock = () => {
        dispatch(addClock({
            timezone: ""
        }));
    }

    return (
        <main className="container text-center">
            <h1 className="m-3">Время на бирже</h1>
            <AddClockButton onClick={() => addNewClock()} more={clocks.length > 0}/>
            {clocks && clocks.length ?
                <div className="row justify-content-center align-items-start m-auto">
                    {clocks.map((item, i) =>
                        <Clock key={i} timezone={item.timezone} index={i} now={now}/>
                    ).reverse()}
                </div>
                : <p className="p-5 m-auto text-secondary">
                    Для&nbsp;настройки и отображения первых&nbsp;часов
                    нажмите&nbsp;на&nbsp;кнопку "Добавить"</p>
            }
        </main>
    )
};

export {App};
