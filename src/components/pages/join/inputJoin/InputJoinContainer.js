import { connect } from 'react-redux';
import InputJoin from "./InputJoin";
import {changeEventSlug} from "../../../../actions/EventFetch";



// Envoyer des données dans les props
const mapStateToProps = (state) => ({
    events:state.eventReducer.events,
    eventSlug: state.eventReducer.eventSlug,
})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    changeEventSlug: (slug)=>dispatch(changeEventSlug(slug))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputJoin)