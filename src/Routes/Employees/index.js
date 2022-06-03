import React, { Component } from 'react';
import { Route, Router, Outlet } from 'react-router-dom';

// import { users } from '../../api/users';
import EmployeesHeader from './EmployeesHeader';
import EmployeesTable from './EmployeesTable';

// import style from './style.module.scss';

export class Employees extends Component {
    state = {
        loading: false,
        error: false,
        userList: [],
    };

    componentDidMount() {
        // this.fetchUsers();
    }

    // fetchUsers = () => {
    //     try {
    //         this.setState({ loading: true }, async () => {
    //             const data = await users();
    //             this.setState({
    //                 loading: false,
    //                 error: false,
    //                 userList: data.data.data,
    //             });
    //         });
    //     } catch (error) {
    //         /* Derive proper parse error logic based on context */
    //         this.setState({ loading: false, error: JSON.stringify(error) });
    //     }
    // };

    render() {
        const { userList, loading, error } = this.state;
        // eslint-disable-next-line no-console
        console.log(this.props);

        return (
            <div>
                {error ? (
                    <div>{error}</div>
                ) : loading ? (
                    <div>Loading....</div>
                ) : (
                    <div className='content-block'>
                        <section className='card'>
                            <div className='card-header'>
                                <EmployeesHeader />
                            </div>
                            <div className='card-body'>
                                <Outlet></Outlet>

                                <EmployeesTable employees={this.props.employees} />
                            </div>
                        </section>
                    </div>
                )}
            </div>
        );
    }
}
{
    /* <table className={style.userlist}>
    <thead>
        <tr>
            <td>id</td>
            <td>avatar</td>
            <td>first_name</td>
            <td>last_name</td>
            <td>email</td>
        </tr>
    </thead>
    <tbody>
        {this.props?.employees.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.avatar}</td>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                </tr>
            );
        })}
    </tbody>
</table> */
}
