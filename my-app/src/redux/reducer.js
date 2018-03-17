const initState = {};
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SETTING_SELECT':
            return {status: action.payload.status};
        default:
            return state;
    }
};

export default rootReducer;