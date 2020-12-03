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

//--------------------Création Nouvelle dépense---------------------------------------------

export const CHANGE_EXPENSE_FORM='CHANGE_EXPENSE_FORM';
export function changeExpenseForm(fieldValuesForm){
    return {
        type : CHANGE_EXPENSE_FORM, payload: fieldValuesForm
    };
}


//-------------------Ajout d'une nouvelle dépense dans l'api--------------------------------------------


export function expenseAdd() {
    return (dispatch, getState)=> {
        const state=getState();
        dispatch(expenseAddPending());
        fetch('http://expenseshare.api.pierre-jehan.com/expenses',
            {
                method: "post",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(
                    {
                        "title": state.eventExpensesReducer.form.title,
                        "user": state.eventExpensesReducer.form.user,
                        "amount": state.eventExpensesReducer.form.user,
                        "paid": false,
                        "createdAt": Date.now(),
                        "category": state.eventExpensesReducer.form.category,
                        "event": state.eventReducer.event["@id"]
                    }
                )
            })
            .then(response=>response.json())
            .then(data=>dispatch(expenseAddSuccess(data["hydra:member"])))
            .catch(err=>dispatch(fetchEventsExpensesFailure(err)))
    }

}
export const EXPENSE_ADD_PENDING='FETCH_EVENTS_EXPENSES_PENDING';
function expenseAddPending() {
    return {
        type: EXPENSE_ADD_PENDING
    };
}


export const EXPENSE_ADD_SUCCESS="EXPENSE_ADD_SUCCESS";
export function expenseAddSuccess(expense){
    return {
        type: EXPENSE_ADD_SUCCESS, payload: {expense: expense}};
}

export const EXPENSE_ADD_ERROR="EXPENSE_ADD_ERROR";
export function expenseAddError(error){
    return{
        type: EXPENSE_ADD_ERROR, payload: error, error:true};
}