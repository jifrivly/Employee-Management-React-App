import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EmployeesHeader from './EmployeesHeader';
import EmployeesTable from './EmployeesTable';

export function Employees(props) {
    const { employees, error, loading } = useSelector((state) => state.EmployeeReducer);

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
                            <EmployeesTable employees={employees} />
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
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
