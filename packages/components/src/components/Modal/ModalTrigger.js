import React from 'react';
import PropTypes from 'prop-types';

ModalTrigger.propTypes = {
    type: PropTypes.string,
    linkText: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};

export default function ModalTrigger(props) {
    const { type, onClick, linkText } = props;

    return <span onClick={onClick}>{linkText}</span>;
}
