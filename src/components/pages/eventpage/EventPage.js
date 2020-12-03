import React from 'react';
import InputEventPageNewExpenseContainer from "./InputEventPageNewExpenseContainer";
import Moment from 'moment';


class EventPage extends React.Component {

        componentDidMount() {
                const {fetchEvents} = this.props;
                const {fetchEventsExpenses} = this.props;
                fetchEvents(this.props.match.params.slug)
                fetchEventsExpenses(this.props.match.params.slug)
        }

        render() {

        if (this.props.error){
                return <div>Cet évènement n'existe pas</div>
            }

        if (this.props.event===null){
                return <div>Chargement en cours</div>
        }

        const expenseList= this.props.expenses.map((expense)=>
        { const dateEventExpense=Moment(expense.createdAt).format("DD/MM/YYYY");
           return(<tr key={expense.id}>
               <td>{expense.title}</td>
               <td>{expense.user}</td>
               <td>{expense.amount}</td>
               <td>{expense.paid}</td>
               <td>{dateEventExpense}</td>
           </tr>
           )
        })
            return (
                    <div>
                        <h1>{this.props.event.name}</h1>
                        <h2>Liste des dépenses</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Prénom</th>
                                        <th scope="col">Montant</th>
                                        <th scope="col">Remboursement</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {expenseList}
                                </tbody>
                            </table>
                        <InputEventPageNewExpenseContainer/>
                    </div>
                )
        }
}

export default EventPage;