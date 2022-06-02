import React, { Component } from 'react';
import PropType from 'prop-types';
import style from './style.module.scss';
export default class InputField extends Component {
  render() {
    return (
      <div className={style.formFeild}>
        <label htmlFor={this.props.htmlForName}>
          {this.props.placeholderLabel}
        </label>
        <input
          type={this.props.type}
          placeholder={this.props.placeholderLabel}
          name={this.props.htmlForName}
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <p>{this.props.error}</p>
      </div>
    );
  }
}
InputField.Prototype = {
  className: PropType.string,
  type: PropType.string,
  placeholder: PropType.string,
  value: PropType.string,
};