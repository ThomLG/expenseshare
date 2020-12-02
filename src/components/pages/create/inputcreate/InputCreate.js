import React from 'react';
import {Link} from "react-router-dom";

function InputCreate(props) {
    const {eventName, createEventName, events}=props;

    //créer une exception pour que ce soit une chaine de caractère et si le nom existe déjà

    return (
        <div>
            <h1>Créer un évènement</h1>

                <label>
                    <input type='text' value={eventName} onChange={event=>createEventName(event.target.value)}/>
                </label>
                <Link to={"/CreatePage/" + eventName}>Créer</Link>

        </div>
    );
}

export default InputCreate;