export function fetchEvents(){
    return (dispatch, getState)=> {
        const state = getState();
        dispatch(fetchEventsPending());
        fetch(process.env.REACT_APP_API_URL + '/events' + state.eventReducer.events)
            .then(response=>response.json())
            .then(data=>dispatch(fetchEventsSuccess(data)))
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

    // afficher l'input dans le state input eventslug

export const CHANGE_EVENT_SLUG="CHANGE_EVENT_SLUG";
    export function changeEventSlug(slug){
        return{
            type: CHANGE_EVENT_SLUG, payload : slug
        };
    }
