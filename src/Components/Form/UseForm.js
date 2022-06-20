import { useState } from 'react';

export function useForm(initialData, validate) {
    const [data, setData] = useState(initialData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
        validate({ [name]: value });

        // eslint-disable-next-line no-console
        console.log(data);
    };

    const resetForm = () => {
        setData(initialData);
    };

    return {
        data,
        setData,
        handleInputChange,
        resetForm,
    };
}
