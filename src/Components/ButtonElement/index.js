import React, { Component } from 'react';
import PropType from 'prop-types';

export default function ButtonElement(props) {
    return (
        <button
            type={props.type}
            className={props.className}
            placeholder={props.placeholderLabel}
            name={props.htmlForName}
            onChange={props.onChange}
            value={props.value}
            children={props.children}
            disabled={props.disable}
            {...props}
        />
    );
}

ButtonElement.Proptype = {
    className: PropType.string,
    type: PropType.string,
    children: PropType.string,
    placeholder: PropType.string,
    value: PropType.string,
};
