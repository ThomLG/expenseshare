import{
    FETCH_EVENTS_EXPENSES_PENDING,
    FETCH_EVENTS_EXPENSES_SUCCESS,
    FETCH_EVENTS_EXPENSES_FAILURE
}from "../actions/EventExpensesFetch";


const expenses= {
    expenses:[],

    loading:{
        event: false,
    },

    error:{
        event: null,
    }
};


function EventExpensesReducer(state=expenses, action)
{
    switch (action.type) {
        case FETCH_EVENTS_EXPENSES_PENDING:
            return {
                ...state,
                loading: {...state.loading, expenses: true}
            };
        case FETCH_EVENTS_EXPENSES_SUCCESS:
            return {
                ...state,
                expenses: action.payload,
                loading: {...state.loading, expenses: false}
            };
        case FETCH_EVENTS_EXPENSES_FAILURE:
            return {
                ...state, error: action.payload,
                loading: {...state.loading, expenses: false}
            };

        default:return state;

    }
}

export default EventExpensesReducer;


