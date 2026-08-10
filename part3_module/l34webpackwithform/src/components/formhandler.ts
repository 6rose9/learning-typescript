export const formData = (form: HTMLFormElement): Record<string, string> => {
    const inputs = form.querySelectorAll<HTMLInputElement>('input');
    const values: Record<string, string> = {}

    inputs.forEach(input => {
        const key = input.name || input.id;
        values[key] = input.value;
    });

    return values;
}