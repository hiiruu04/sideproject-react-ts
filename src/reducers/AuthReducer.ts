interface DefaultStateI {

};

const defaultState: DefaultStateI = {

};

const authReducer = (state: DefaultStateI = defaultState, action: any) : DefaultStateI => {
    return state
};

export default authReducer;