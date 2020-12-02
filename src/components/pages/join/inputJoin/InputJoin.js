import React from 'react';

function InputJoin(props) {
    const {eventSlug, changeEventSlug, events}=props;

    if(eventSlug===events.slug){
    }


    return (
        <div>
            <h1>Rejoindre un évènement</h1>
            <form onSubmit={props.handleSubmit}>
                <label>
                <input type='text' value={eventSlug} onChange={event=>changeEventSlug(event.target.value)}/>
                </label>
                <input type="submit" value="Rejoindre"/>
            </form>
        </div>
    );
}

export default InputJoin;