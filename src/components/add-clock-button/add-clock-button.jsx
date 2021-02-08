import React from "react";
import PropTypes from "prop-types";

const AddClockButton = ({onClick, more = false}) => {
    return (
        <button className="btn btn-outline-info" onClick={() => onClick()} type="button">Добавить {more && "еще"}</button>
    );
};

AddClockButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    more: PropTypes.bool
};

export {AddClockButton};
