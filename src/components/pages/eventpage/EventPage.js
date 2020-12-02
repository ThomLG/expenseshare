import React from 'react';
import InputEventPageContainer from "./InputEventPageContainer";


class EventPage extends React.Component {

        componentDidMount() {
                const {fetchEvents} = this.props;
                const {fetchEventsExpenses} = this.props;
                fetchEvents(this.props.match.params.slug)
                fetchEventsExpenses(this.props.match.params.slug)
        }


        render() {
        if (this.props.event===null){
                return <div>Chargement en cours</div>
        }

        const expenseList= this.props.expenses.map((expense)=>
            <li key={expense.id} value={expense.id}>
                Titre :{expense.title}
                Utilisateur {expense.user}
                Dette:{expense.amount}
                Réglée ? :{expense.paid}
                Date : {expense.createdAt}
            </li>)

                return (
                    <div>
                            <h1>{this.props.event.name}</h1>
                            <h2>Liste des dépenses</h2>
                            <ul>{expenseList}</ul>
                            <InputEventPageContainer/>
                    </div>
                )
        }
}

export default EventPage;