import { Movies } from "./actions";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    modalState: false
};
const movieReducer = (state = initialState, action) => {
    let { type, payload } = action;
  
    if (type === Movies.GET_MOVIES_LIST) {
        return{
            ...state,
            movies: payload,
            loading: false
        }
    }
    else if (type === Movies.OPEN_MODAL) {
        return{
            ...state,
            modalState: true
        }
    }
    else if (type === Movies.CLOSE_MODAL) {
        return{
            ...state,
            modalState: false
        }
    }
    else{
      return state;
    }
  };
  


export default movieReducer;


