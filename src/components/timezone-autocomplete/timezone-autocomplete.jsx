import React from "react";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import momentTz from "moment-timezone";
import Typeahead from "react-bootstrap-typeahead/lib/components/Typeahead";
import {updateClock} from "../../store/actions/actions";

const TimezoneAutocomplete = ({timezone, index}) => {
    const dispatch = useDispatch();
    const updateTimezone = (value) => {
        dispatch(updateClock({
            index: index,
            timezone: value
        }));
    };

    return (
        <Typeahead
            id={`timezone-autocomplete-${index}`}
            labelKey={(option) => option.replace(/_/g, " ").replace(/\//g, " - ")}
            onChange={(values) => values.length && updateTimezone(values[0])}
            options={momentTz.tz.names()}
            placeholder="Выберите город..."
            defaultSelected={[timezone]}
            paginationText="Показать еще"
            align="left"
        />
    );
};

TimezoneAutocomplete.propTypes = {
    timezone: PropTypes.string,
    index: PropTypes.number.isRequired
};

export {TimezoneAutocomplete};
