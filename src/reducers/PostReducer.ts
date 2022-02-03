interface DefaultStateI {

}

const defaultState: DefaultStateI ={

};

const postReducer = (state: DefaultStateI = defaultState, action: any) : DefaultStateI => {
    return state;
}

export default postReducer;