import {
    FETCH_EVENTS_PENDING,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    CHANGE_EVENT_SLUG,
    CREATE_EVENT_NAME

} from "../actions/EventFetch";


const initialState= {
    event:null,

    loading:{
        event: false,
    },

    error:{
        event: null,
    },

    eventSlug:"",

    eventName:""
};


function EventReducer(state=initialState, action)
{
    switch (action.type) {
        case FETCH_EVENTS_PENDING:
            return {
                ...state,
                loading: {...state.loading, event : true}
            };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                event: action.payload,
                loading: {...state.loading, event: false}
            };
        case FETCH_EVENTS_FAILURE:
            return {
                ...state, error: action.payload,
                loading: {...state.loading, event: false}
            };

        case CHANGE_EVENT_SLUG:
            return{
                ...state, eventSlug: action.payload
            }

        case CREATE_EVENT_NAME:
            return {
                ...state, eventName: action.payload
            }

        default:
            return state;
    }
}

export default EventReducer;