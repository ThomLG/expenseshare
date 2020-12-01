import React from 'react';

function InputJoin(props) {
    const {events}=props;


    return (
        <div>
            <form onSubmit={this.handleSubmit(event)}>
            <input type='text' onChange={event.this.props.searchEvent({ name: event.target.value})}/>
            <button>Rejoindre</button>
            </form>
        </div>
    );
}

export default InputJoin;