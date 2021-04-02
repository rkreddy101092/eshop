const intialState = {
    logo: ''
}

const SET_LOGO = 'session/SET_LOGO';

const sessionReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_LOGO: {
            return {
                ...state,
            }
        }
    }
}
export default sessionReducer;