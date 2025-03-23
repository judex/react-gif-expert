import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => { 

    test( 'debe de hacer match con el snapshot', () => {
        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
    });

    test( 'debe de mostrar una categoria', () => {
        render( <GifExpertApp /> );
        expect( screen.getByText('One Punch') ).toBeTruthy();
    });

    test ('funcionalidad de AddCategory', () => {
        const onAddCategory = jest.fn();
        render( <GifExpertApp onAddCategory={ onAddCategory } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: 'One Punch'}});
        fireEvent.submit(form);
        expect( input.value ).toBe('');
    })
})
    