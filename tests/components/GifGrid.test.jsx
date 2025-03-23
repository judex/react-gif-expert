import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { use } from "react";

jest.mock('../../src/hooks/useFetchGifs');

describe('Preubas en <GifGrid />', () => {  // se define el nombre de la prueba
    const category = 'One Punch'; // se define la categoria

    
    test('Debe de el loading inicialmente ', () => { 
        useFetchGifs.mockReturnValue({ // se define el mock de useFetchGifs
            images: [],
            isLoading: true
        }); 
        render( <GifGrid category={ category } /> ); // se renderiza el componente
        // screen.debug(); // se imprime el DOM para ver los elementos
        expect( screen.getByText('Cargando...') ).toBeTruthy(); // se espera que se muestre el texto 'Cargando...' y que se encuentre en el DOM
        expect( screen.getByText(category) ).toBeTruthy();// se espera que se muestre el texto 'One Punch' y que se encuentre en el DOM
     });

     test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [ // temporalmente define el array de imagenes
            {
                id:'numero1',
                title: 'Saitama',
                url: 'https://one-punch.com/saitama.jpg'
            },
            {
                id:'numero2',
                title: 'Goku',
                url: 'https://one-punch.com/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({ // se define el mock de useFetchGifs
            images: gifs, // se define el array de imagenes
            isLoading: false
        }); 
        render( <GifGrid category={ category } /> ); // se renderiza el componente        
        expect( screen.getAllByRole('img').length ).toBe(2); // se espera que se muestre 2 imagenes
     })
 })
