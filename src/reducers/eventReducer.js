import {
    FETCH_EVENTS_PENDING,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    CHANGE_EVENT_SLUG,

} from "../actions/EventFetch";


const initialState= {
    events:[],
    loading:{
        events: false,
    },

    error:{
        events: null,
    },

    eventSlug:""
};


function EventReducer(state=initialState, action)
{
    switch (action.type) {
        case FETCH_EVENTS_PENDING:
            return {
                ...state,
                loading: {...state.loading, events : true}
            };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload,
                loading: {...state.loading, events: false}
            };
        case FETCH_EVENTS_FAILURE:
            return {
                ...state, error: action.payload,
                loading: {...state.loading, events: false}
            };

        case CHANGE_EVENT_SLUG:
            return{
                ...state, eventSlug: action.payload
            }

        default:
            return state;
    }
}

export default EventReducer;