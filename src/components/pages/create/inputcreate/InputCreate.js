import React from 'react';

function InputCreate(props) {
    return (
        <div>
            <h1>Créer un évènement</h1>
            <form>
                <label>
                    <input type='text'/>
                </label>
                <input type="submit" value="Créer"/>
            </form>
        </div>
    );
}

export default InputCreate;