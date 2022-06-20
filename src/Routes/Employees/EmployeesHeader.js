import React from 'react';
import { AddEmployees } from './AddEmployees';

export default function EmployeesHeader(props) {
    return (
        <div>
            <h3>
                Employees
                <AddEmployees className='float-right' />
            </h3>
        </div>
    );
}
