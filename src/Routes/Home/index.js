import React, { Component } from 'react';

import { users } from '../../api/users';

import style from './style.module.scss';

class LoggedInPage extends Component {
  state = {
    loading: false,
    error: false,
    userList: []
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = () => {
    try {
      this.setState({ loading: true }, async () => {
        const data = await users();
        this.setState({ loading: false, error: false, userList: data.data.data });
      });
    } catch (error) {
      /* Derive proper parse error logic based on context */
      this.setState({ loading: false, error: JSON.stringify(error) });
    }
  }
  render() {
    const { userList, loading, error } = this.state;
    return (
      <div>
        <p>You have Logged In </p>
        {error ? <div>{error}</div> :
          loading ? <div>Loading....</div> :
            <table className={style.userlist}>
              <tbody>
                {userList.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.year}</td>
                      <td>{data.pantone_value}</td>
                      <td>{data.color}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        }
      </div>
    );
  }
}
export default LoggedInPage;
