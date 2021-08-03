export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
};

// add cases for setting the now playing song

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

        // refactor but not necessary yet 
        // case "SET_SPOTIFY":
        //     return {
        //         ...state,
        //         spotify: action.spotify,
        //     }
        
        // this will set the 'play' functunality
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            }

        // this will set the song that will be picked? for lack of a better word, to be played next 
        case "SET_ITEM":
            return{
                ...state,
                item: action.item,
            }    

              
            default: 
                return state;
    }
};

export default reducer;