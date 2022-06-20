import React, { useState } from 'react';
import PropType from 'prop-types';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useDispatch } from 'react-redux';
import { addEmployee } from '../../../Redux/Actions/Employees';
import EmployeeForm from './EmployeeForm';
import Popup from '../../../Components/Popup';

function AddEmployees(props) {
    const [openPopup, setOpenPopup] = useState(false);
    const dispatch = useDispatch();

    function createEmployee(employeeInput) {
        dispatch(addEmployee(employeeInput));
        setOpenPopup(false);
    }

    function closeModal() {
        setOpenPopup(false);
    }

    return (
        <div className={props.className}>
            <Button
                variant='outlined'
                startIcon={<AddIcon />}
                onClick={() => {
                    setOpenPopup(true);
                }}>
                Add New
            </Button>
            <Popup title='Employee Form' openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <EmployeeForm createEmployee={createEmployee} />
            </Popup>
        </div>
    );
}

AddEmployees.Proptype = {
    className: PropType.string,
};

export { AddEmployees };
