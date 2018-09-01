import React from 'react'
import ReactDOM from 'react-dom'

function myfunction(name='sruthi',place='vadakara')
{
    return <div> 
                <h2>My function returns my name <b>{name}</b> and place <b>{place} </b></h2>
                <h1>helloooo drr</h1>
            </div>
}


ReactDOM.render(
  
    myfunction('Noname','Noplace'),

    document.getElementById('root')
);

