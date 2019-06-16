const INITIAL_STATE = {
    month: '',
    day: ''
}

export default (state = INITIAL_STATE, action) => {

    if(action.type == 'change_moth') {
        return { ...state, month: action.payload }
    }

    if(action.type == 'change_day') {
        return { ...state, day: action.payload }
    }
    return state;
}