
const initialState = ''


export const setNotification = (notification) => {
    return {
        type: 'SET_NOTIFICATION',
        content: notification
    }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
        content: ''
    }
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'CLEAR_NOTIFICATION':
            return action.content
        case 'SET_NOTIFICATION':
            return action.content
        default: return state
    }
}

export default reducer