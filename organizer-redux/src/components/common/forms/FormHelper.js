class FormHelper {
    static handleInputChange(event, stateField) {
        const target = event.target;
        const field = target.name;
        let value = target.value;

        if(value !== '' && !isNaN(value)) {
            value = Number(value);
        }

        const state = this.state[stateField];
        state[field] = value;
        this.setState({ stateField: state });
    }
}

export default FormHelper;