import React from 'react';

function Acronym({initial, attribute, paragraph}) {
    return (
        <div className="acronym__container">

            <div className="acronym__header">
                <div className="acronym__title">{ initial }</div>
            </div>

            <div className="acronym__medium">
                <div className="acronym__attribute">{ attribute}</div>
            </div>

            <div className="acronym__body">
                <div className="acronym__paragraph">{ paragraph }</div>
            </div>
                    
        </div>  
    );
}

export default Acronym;