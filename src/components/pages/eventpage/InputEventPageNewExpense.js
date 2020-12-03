import React, {Component} from 'react';
import {expenseAdd} from "../../../actions/EventExpensesFetch";
import Moment from "moment";


class InputEventPageNewExpense extends Component{

        handleChange = event => {
            this.props.changeExpenseForm({
                name:event.target.name,
                amount:event.target.amount,
                user:event.target.user,
                value:event.target.value
            });
        }

        handleSubmit= event=>{
            event.preventDefault()
            this.props.expenseAdd()
        }

        render(){
        const categoriesList = categories.map
        (category => <option key={category.id} value={category.id}>{category.name}</option>);

        return (

            <div>
                <h3>Ajouter une nouvelle dépense</h3>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={this.props.form.title}
                            placeholder="Nom de la dépense"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            value={this.props.form.amount}
                            placeholder="Montant de la dépense"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="user"
                            id="user"
                            value={this.props.form.user}
                            placeholder="prénom de la personne"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <select>
                            {categoriesList}
                        </select>
                    </div>
                    <div>
                        <button>Ajouter dépense</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default InputEventPageNewExpense;