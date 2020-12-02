import { connect } from 'react-redux';
import InputCreate from "./InputCreate";
import {createEventName} from "../../../../actions/EventFetch";


// Envoyer des données dans les props
const mapStateToProps = (state) => ({
    events:state.eventReducer.events,
    eventName: state.eventReducer.eventName
})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    createEventName: (name)=>dispatch(createEventName(name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputCreate)