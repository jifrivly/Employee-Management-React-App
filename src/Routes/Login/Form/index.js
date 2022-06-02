import React, { Component } from 'react';

import ButtonElement from '../../../Components/ButtonElement';
import InputField from '../../../Components/InputField';

import style from './style.module.scss';

export default class Form extends Component {
  render() {
    const { email, password, loading, inputChange, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <ul className={style.formsBlock__list}>
          <li>
            <InputField
              htmlForName='email'
              placeholderLabel='Email'
              type='text'
              onChange={inputChange}
              value={email.value}
              error={email.error}
            />

          </li>
          <li>
            <InputField
              htmlForName='password'
              placeholderLabel='Password'
              type='password'
              onChange={inputChange}
              value={password.value}
              error={password.error}
            />
          </li>
          <li>
            <ButtonElement
              disable={
                (password.error || email.error) ||
                (!email.value || !password.value) ||
                loading
              }
              children={loading ? 'Please wait' : 'Login'}
            />
          </li>
        </ul>
      </form>
    );
  }
}