import React from "react";
import PropTypes from "prop-types";
import "./delete-clock-button.scss";

const DeleteClockButton = ({onClick}) => {

    return (
        <button className="delete" onClick={() => onClick()} type="button">Удалить</button>
    );
};

DeleteClockButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export {DeleteClockButton};
