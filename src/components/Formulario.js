import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre]=useState('');
    const [cantidad, guardarCantidad]=useState(0);
    const [error, guardarError]=useState(false);

    const agregarGasto = (ev) => {
        ev.preventDefault();
        //validar
        if(nombre.trim() === '' || cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }
        guardarError(false);
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        guardarGasto(gasto);
        guardarCrearGasto(true);
        // restear form
        guardarNombre('');
        guardarCantidad(0);
    }

    return ( 

        <form 
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            { error ? <Error mensaje='El valor ingresado no es válido'/> : null }

            <div className='campo'>
                <label>Nombre gasto</label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='Por ej. transporte'
                    value={nombre}
                    onChange={ev => guardarNombre(ev.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Cantidad gasto</label>
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='300'
                    value={cantidad}
                    onChange={ev => guardarCantidad(parseInt(ev.target.value, 10))}
                />
            </div>
            <input 
                type='submit'
                className='button-primary u-full-width'
                value='Agregar gasto'
            />
        </form>
     );
}
 
export default Formulario;