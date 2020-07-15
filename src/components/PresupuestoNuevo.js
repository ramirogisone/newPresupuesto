import React, {Fragment, useState} from 'react';
import Error from './Error';

const PresupuestoNuevo = ({guardarPresupuesto, guardarRestante, actualizarNewPresupuesto}) => {

    // definir state
    const [cantidad, guardarCantidad]=useState(0);
    const [error, guardarError]=useState(false);
    
    const definirPresupuesto = (ev) => {
        guardarCantidad(parseInt(ev.target.value, 10));
    }

    const insertarPresupuesto = ev => {
        ev.preventDefault();

        //validaciones
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        //luego de validar
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarNewPresupuesto(false);
    }

    return ( 
        <Fragment>
            <h2>Ingresa el nuevo presupuesto</h2>

            { error ? <Error mensaje='El presupuesto debe ser mayor a uno' /> : null }

            <form 
                onSubmit={insertarPresupuesto}
            >
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Ingresa tu presupuesto'
                    onChange={definirPresupuesto}
                />
                <input 
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir presupuesto'
                />
            </form>
        </Fragment>
     );
}
 
export default PresupuestoNuevo;