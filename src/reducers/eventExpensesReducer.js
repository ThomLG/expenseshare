import{
    FETCH_EVENTS_EXPENSES_PENDING,
    FETCH_EVENTS_EXPENSES_SUCCESS,
    FETCH_EVENTS_EXPENSES_FAILURE,
    CHANGE_EXPENSE_FORM,
    EXPENSE_ADD_PENDING,
    EXPENSE_ADD_SUCCESS,
    EXPENSE_ADD_ERROR
}from "../actions/EventExpensesFetch";


const initialState= {
    expenses:[],

    loading:{
        event: false,
        expenses:false,
        newExpense:false
    },

    error:{
        event: null,
        expenses:null,
        newExpense: null
    },

    form:{
        title:"",
        user:"",
        amount:0,
        paid:false,
        createdAt:Date.now(),
        category:"",
        event:""
    }
};


function EventExpensesReducer(state=initialState, action)
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
        case CHANGE_EXPENSE_FORM:
            return {
                ...state,
                form: {...state.form, [action.payload.name]:action.payload.value} //name et value font référence aux name et value de l'input
            }

            case EXPENSE_ADD_PENDING:
            return {
                ...state,
                loading: {...state.loading, newExpense : true}
            };

        case EXPENSE_ADD_SUCCESS:
            return {
                ...state,
                expenses: [...state.expenses,action.payload],
                loading: {...state.loading, newExpense: false}
            };

        case EXPENSE_ADD_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: {...state.loading, newExpense: false}
            };
        default:return state;

    }
}

export default EventExpensesReducer;


