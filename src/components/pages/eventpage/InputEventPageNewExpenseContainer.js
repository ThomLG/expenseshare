import InputEventPageNewExpense from "./InputEventPageNewExpense";
import {connect} from "react-redux";
import {fetchEventsExpenses} from "../../../actions/EventExpensesFetch";
import {changeExpenseForm} from "../../../actions/EventExpensesFetch";
import {expenseAdd} from "../../../actions/EventExpensesFetch";
import {fetchCategories} from "../../../actions/CategoryFetch";


// Envoyer des données dans les props
const mapStateToProps = (state) => ({
    form: state.eventExpensesReducer.form,
    categories:state.categoriesReducer.categories
})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
changeExpenseForm: (fieldValuesForm)=>dispatch(changeExpenseForm(fieldValuesForm)),
expenseAdd:()=>dispatch(expenseAdd())

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputEventPageNewExpense)