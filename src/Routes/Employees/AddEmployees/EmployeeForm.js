import { Button, Grid } from '@mui/material';
import React from 'react';

import { Input } from '../../../Components/controls';
import { useForm } from '../../../Components/Form/UseForm';

const initialData = {
    name: '',
    email: '',
    mobile: '',
    joiningDate: '',
    role: '',
};

export default function EmployeeForm(props) {
    const { createEmployee } = props;

    const { data, setData, handleInputChange, resetForm } = useForm(initialData, validate);

    function validate() {
        return true;
    }

    function onSubmit(e) {
        e.preventDefault();
        if (validate()) {
            const employeeInput = { ...data, avatar: 'https://reqres.in/img/faces/1-image.jpg' };
            createEmployee(employeeInput);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Input
                        label='Name'
                        name='name'
                        value={data.name}
                        onChange={handleInputChange}
                        // error={errors.name}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input
                        label='Email'
                        name='email'
                        value={data.email}
                        onChange={handleInputChange}
                        // error={errors.email}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input label='Mobile' name='mobile' value={data.mobile} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <Input
                        label='Joining Date'
                        name='joiningDate'
                        value={data.joiningDate}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Input label='Role' name='role' value={data.role} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Button type='submit'>Submit</Button>
                        <Button color='primary' onClick={resetForm}>
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}
