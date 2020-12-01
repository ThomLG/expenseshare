export function fetchEvents(){
    return (dispatch, getState)=> {
        dispatch(fetchEventsPending());
        fetch(process.env.REACT_APP_API_URL + '/events')
            .then(response=>response.json())
            .then(data=>dispatch(fetchEventsSuccess(data['hydra:member'])))
            .catch(err=>dispatch(fetchEventsFailure(err)))
    }
}

export const FETCH_EVENTS_PENDING='FETCH_EVENTS_PENDING';
    function fetchEventsPending(){
        return {
            type : FETCH_EVENTS_PENDING
        };
    }

    export const FETCH_EVENTS_SUCCESS='FETCH_SUCCESS_PENDING';
    function fetchEventsSuccess(events){
        return {
            type : FETCH_EVENTS_SUCCESS, payload : events
        };
    }

    export const FETCH_EVENTS_FAILURE='FETCH_EVENTS_FAILURE';
    function fetchEventsFailure(error){
        return {
            type : FETCH_EVENTS_FAILURE, payload : error
        };
    }