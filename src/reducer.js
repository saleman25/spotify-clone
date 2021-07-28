export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            }    

        case "SET_ON_REPEAT":
            return{
                ...state,
                on_repeat: action.on_repeat,
            }  
              
            default: 
                return state;
    }
};

export default reducer;