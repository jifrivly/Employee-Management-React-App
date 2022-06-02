

export const isValid = async ({ fields, key, value }) => {
    try {
        await fields[key].validate({ [key]: value });
        return { isValid: true };
    } catch (error) {
        return { isValid: true, error: error.errors[0] };
    }
};