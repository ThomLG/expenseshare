import { connect } from 'react-redux';
import InputJoin from "./InputJoin";



// Envoyer des données dans les props
const mapStateToProps = (state) => ({
    events: state.eventReducer.events
})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputJoin)