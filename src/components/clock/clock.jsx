import React from "react";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import momentTz from "moment-timezone";
import {DeleteClockButton} from "../delete-clock-button/delete-clock-button";
import {deleteClock} from "../../store/actions/actions";
import {TimezoneAutocomplete} from "../timezone-autocomplete/timezone-autocomplete";
import "./clock.scss";

const Clock = ({timezone, index, now}) => {
    const dispatch = useDispatch();
    const timeWithTimezone = momentTz.tz(now, timezone);
    const offset = timeWithTimezone.format("Z");
    const hour = timeWithTimezone.hour() % 12;
    const minute = timeWithTimezone.minute();
    const second = timeWithTimezone.second();

    const onDeleteButton = () => {
        dispatch(deleteClock(index));
    }

    return (
        <section className="wrapper col flex-grow-0 p-4 m-3">
            <div className="clock">
                <div id="hour" className="hour" style={{transform: `rotate(${30 * hour + 0.5 * minute}deg)`}}> </div>
                <div id="minute" className="minute" style={{transform: `rotate(${6 * minute + 0.1 * second}deg)`}}> </div>
                <div id="second" className="second" style={{transform: `rotate(${6 * second}deg)`}}> </div>
            </div>
            <p className="h5 pt-2 text-center text-dark">{offset}</p>
            <TimezoneAutocomplete timezone={timezone} index={index}/>
            <DeleteClockButton onClick={() => onDeleteButton()}/>
        </section>
    );
};

Clock.propTypes = {
    timezone: PropTypes.string,
    index: PropTypes.number.isRequired,
    now: PropTypes.object.isRequired
};

export {Clock};
