//For now thos won't be used
//Will try the component aploach first
//May go back to this later if needed

let timer = null;
let seconds = 0;
let todoId = null;

function timerStart(todoId) {
    type: 'TIMER_START',
    todoId
}

function timerStop() {
    type: 'TIMER_STOP',
    todoId,
    seconds
}

function tick() {
    type: 'TIMER_TICK'
}

function reset() {
    timer = null;
    todoId = null;
    seconds = 0;
}

function init() {

}


function start(todoId) {
    return (dispatch) => {
        clearInterval(timer);
        timer = setInterval(() => dispatch(tick()), 1000);
        dispatch(timerStart(todoId));
        dispatch(tick());
    };
}

function stop() {
    clearInterval(timer);
    dispatch(timerStop());
    dispatch(reset());
}

function pause() {
    //todo
}

