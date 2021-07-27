export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQCkGz0wp_7OS2YwhZKEr4TN0xl3HPsyy5alvXER0ZmIEAX29Gbn_ucoHfsYwxhwmp2Rw9UAL9AbzyxbYCf5thtBftXMacGyIm1_TI7_Q_3zK9fJQjSRDw6GXdVisTe9-mW2FGJPBwrgmUVQsOhGMzl4mxubNXN8iK1A2wy3lw',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
            default: 
                return state;
    }
}

export default reducer;