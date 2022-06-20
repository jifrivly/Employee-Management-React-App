import React from 'react';
import { useSelector } from 'react-redux';

import EmployeesHeader from './EmployeesHeader';
import EmployeesTable from './EmployeesTable';

export function Employees(props) {
    const {
        employeeList: { employees, error, loading },
    } = useSelector((state) => state.EmployeeReducer);

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
