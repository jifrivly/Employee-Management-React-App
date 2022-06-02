import React, { Component } from 'react';
import PropType from 'prop-types';

import Form from './Form';

import { isValid } from '../../utils/formValidator';

import { HEADINGS } from '../../constants';
import { ROUTES } from '../../Routes.constants';
import { FORM_FIELDS } from './Login.config';

import style from './style.module.scss';


export default class LoginPage extends Component {
    state = {
        email: {
            value: 'eve.holt@reqres.in',
            error: ''
        },
        password: {
            value: 'cityslicka',
            error: ''
        }
    }

    componentDidUpdate(prevProps) {
        const { loading, error } = this.props;
        if (prevProps.loading && !loading && !error) {
            this.props.history.push(ROUTES.HOME);
        }
        if (prevProps.loading && !loading && error) {
            /* replace with approp component to show error */
            // eslint-disable-next-line no-alert
            alert(error);
        }
    }

    inputChange = async (e) => {
        const { name, value } = e.target;
        const data = await isValid({ fields: FORM_FIELDS, key: name, value });
        this.setState({
            [e.target.name]: {
                value,
                error: data.error || null
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const { signIn } = this.props;
        signIn({ email: email.value, password: password.value });
    };

    render() {
        const { loading } = this.props;
        return (
            <section className={style.loginWrapper}>
                <div className={style.login}>
                    <div className={style.login__header}>
                        <h2>{HEADINGS.LOGIN_HERE}</h2>
                    </div>
                    <div className={style.login__forms}>
                        <Form
                            {...this.state}
                            inputChange={this.inputChange}
                            onSubmit={this.handleSubmit}
                            loading={loading}
                        />
                    </div>
                </div>
            </section>
        );
    }
}
LoginPage.PropType = {
    className: PropType.string,
    value: PropType.string,
    emailError: PropType.string,
    type: PropType.string,
};
