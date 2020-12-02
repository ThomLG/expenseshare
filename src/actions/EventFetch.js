export function fetchEvents(slug){
    return (dispatch)=> {
        dispatch(fetchEventsPending());
        fetch(process.env.REACT_APP_API_URL + '/events/'+ slug)
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

export const FETCH_EVENTS_SUCCESS='FETCH_EVENTS_SUCCESS';
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

/*----------------------------------------------------------------------------------------------------*/

    // afficher l'input dans le state input eventslug

export const CHANGE_EVENT_SLUG="CHANGE_EVENT_SLUG";
    export function changeEventSlug(slug){
        return{
            type: CHANGE_EVENT_SLUG, payload : slug
        };
    }


// afficher l'input dans le state input eventcreate

export const CREATE_EVENT_NAME="CREATE_EVENT_NAME";
export function createEventName(name){
    return{
        type: CREATE_EVENT_NAME, payload : name
    };
}
