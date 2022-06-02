import React, { Component } from 'react';
import PropType from 'prop-types';
export default class ButtonElement extends Component {
  render() {
    return (
      <button
        type={this.props.type}
        placeholder={this.props.placeholderLabel}
        name={this.props.htmlForName}
        onChange={this.props.onChange}
        value={this.props.value}
        children={this.props.children}
        disabled={this.props.disable}
      />
    );
  }
}
ButtonElement.Proptype = {
  className: PropType.string,
  type: PropType.string,
  children: PropType.string,
  placeholder: PropType.string,
  value: PropType.string,
};
