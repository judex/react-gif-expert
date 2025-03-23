import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en <AddCategory />', () => { 
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn(); //es un mock, un simulador de funcion

    test('Debe de cambiar el valor de la caja de texto', () => {        
        render( <AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: inputValue}});

        expect(input.value).toBe('Saitama');
        // screen.debug();                
    });
    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        render( <AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        // screen.debug(); 
        expect(input.value).toBe('');
        expect( onNewCategory).toHaveBeenCalled();// que se ha llamado funcion
        expect( onNewCategory).toHaveBeenCalledTimes(1); // llamado 1 vez funcion        
        expect( onNewCategory).toHaveBeenCalledWith(inputValue); //llamado funcion con el valor
    });
    test('No debe de llamar el onNewCategory si el input esta vacio', () => {
        render( <AddCategory onNewCategory={onNewCategory}/>);
        
        const form = screen.getByRole('form');    
        fireEvent.submit(form);
        expect( onNewCategory).toHaveBeenCalledTimes(0); // llamado 0 veces
        expect( onNewCategory).not.toHaveBeenCalled(); // no se ha llamado
    })

 })