export const changeMonth = (value) => {
    return {
        type: 'change_moth',
        payload: value
    }
}

export const changeDay = (value) => {
    return {
        type: 'change_day',
        payload: value
    }
}