import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_PENDING,
    FETCH_CATEGORIES_SUCCESS
} from "../actions/CategoryFetch";

const initialState={

    categories:[],

    loading:{
        categories:false
    },

    error:{
        categories:null
    }
};

function CategoriesReducer(state=initialState, action){
    switch (action.type){
        case FETCH_CATEGORIES_PENDING:
            return {
                ...state,
                loading: {...state.loading, categories: true}
            };
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                loading: {...state.loading, categories: false}
            };
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: {...state.loading, categories: false}
            };

            default:return state;
    }
}

export default CategoriesReducer