import AppHelper from '../common/AppHelper';
import { crud } from '../../constants/app';

class TodoHelper {
    static getDefaultState() {
        return {
            selectedTodo: null,
            todo: {
                name: '',
                type: 'Single',
                list_id: null,
                target: 1,
                progress: 0,
                done: false,
                Repeat: 0,
                completed_count: 0,
                noncompleted_count: 0,
                deadline: AppHelper.getDateNoHoursISO(new Date())
            },
            error: '',
            mode: crud.MODE_READ
        }
    }

    //Now here can do real validation!!!
    static isValidForm() {
        const name = this.state.todo.name;
        const type = this.state.todo.type;

        let formIsValid = true;
        let error = '';

        if (name === '' || type === '') {
            error = 'All input fields are required!';
            formIsValid = false;
        }

        if (error) {
            this.setState({ error });
        }

        return formIsValid;
    }
}

export default TodoHelper;