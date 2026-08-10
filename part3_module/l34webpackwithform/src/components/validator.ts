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

}