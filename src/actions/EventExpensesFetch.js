//-------Fetch des dépenses d'un évènement--------------------------------------
export function fetchEventsExpenses(slug){
    return (dispatch)=> {
        dispatch(fetchEventsExpensesPending());
        fetch(process.env.REACT_APP_API_URL + '/events/'+ slug+ '/expenses')
            .then(response=>response.json())
            .then(data=>dispatch(fetchEventsExpensesSuccess(data["hydra:member"])))
            .catch(err=>dispatch(fetchEventsExpensesFailure(err)))
    }
}

export const FETCH_EVENTS_EXPENSES_PENDING='FETCH_EVENTS_EXPENSES_PENDING';
function fetchEventsExpensesPending(){
    return {
        type : FETCH_EVENTS_EXPENSES_PENDING
    };
}

export const FETCH_EVENTS_EXPENSES_SUCCESS='FETCH_EVENTS_EXPENSES_SUCCESS';
function fetchEventsExpensesSuccess(events){
    return {
        type : FETCH_EVENTS_EXPENSES_SUCCESS, payload : events
    };
}

export const FETCH_EVENTS_EXPENSES_FAILURE='FETCH_EVENTS_EXPENSES_FAILURE';
function fetchEventsExpensesFailure(error){
    return {
        type : FETCH_EVENTS_EXPENSES_FAILURE, payload : error
    };
}
