import { connect } from 'react-redux';
import EventPage from "./EventPage";
import {fetchEvents} from "../../../actions/EventFetch";
import {fetchEventsExpenses} from "../../../actions/EventExpensesFetch";


// Envoyer des données dans les props
const mapStateToProps = (state) => ({
    event:state.eventReducer.event,
    expenses:state.eventExpensesReducer.expenses,
    error: state.eventReducer.error
})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    fetchEvents: slug=>dispatch(fetchEvents(slug)),
    fetchEventsExpenses: expense=>dispatch(fetchEventsExpenses(expense))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventPage)