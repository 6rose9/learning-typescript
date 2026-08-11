type ValidationRule = {
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    type?: 'number' | 'email',
}

export type ValidationSchema = {
    [field: string]: ValidationRule
}

export const validateForm = (data: Record<string, string>, schema: ValidationSchema) => {
    const errors: Record<string, string> = {};

    for (const field in schema) {
        const rules = schema[field]; // object type
        const value = data[field] ? data[field].trim() : ""; // string type

        // console.log(rules, value);

        if (rules.required && !value) {
            errors[field] = `${field} is required`;
        }

        if (rules.minLength && value.length < rules.minLength) {
            errors[field] = `${field} must be a least ${rules.minLength} characters`
        }

        if (rules?.type === 'email') {
            if (!value.includes('@') || !value.includes('.')) {
                errors[field] = `${field} must be a valid email`;
            }
        }

        if (rules.type === 'number' && value !== '' && isNaN(Number(value))) {
            errors[field] = `${field} must be a valid number`;
        }
    }

    return errors;
}