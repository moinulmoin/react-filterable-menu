import React from 'react';

function Buttons({ handleClick, categories }) {
    return (
        <div className="text-center">
            {categories.map((each) => (
                <button
                    key={new Date().getTime().toString() * Math.random()}
                    type="button"
                    className="btn ms-3 btn-danger"
                    onClick={() => handleClick(each)}
                >
                    {each.toUpperCase()}
                </button>
            ))}
        </div>
    );
}

export default Buttons;
