import React, {useContext} from 'react';
import {StoreContext} from './store';

const Fruits = () => {

    const [state, dispatch] = useContext(StoreContext);
    return( 
      <div>
      <h1>Frutas</h1>
      <button type='button'
              onClick={ () => dispatch({type: 'addFruit', payLoad: 'Maçã'}) }  >Adicionar Fruta</button>
       <button type='button'
              onClick={ () => dispatch({type: 'addFruit', payLoad: 'Brócolis'}) }  >Adicionar Vegetal</button>        
          <ul>
            {
              state.fruits.map(fruit => { 
              return (<li>{fruit}</li>)
            })}
          </ul>
      </div>
    )
}

export default Fruits;
