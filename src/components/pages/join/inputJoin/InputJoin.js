import React from 'react';
import {Link} from "react-router-dom";



function InputJoin(props) {
    const {eventSlug, changeEventSlug, events}=props;



    return (
        <div>
            <h1>Rejoindre un évènement</h1>
                <label>
                    <input type='text' value={eventSlug} onChange={event=>changeEventSlug(event.target.value)}/>
                </label>
                <Link to={"/EventPage/" + eventSlug}>Rejoindre</Link>

        </div>
    );

}

export default InputJoin;