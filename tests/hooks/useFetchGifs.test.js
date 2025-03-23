import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Pruebas en hook useFetchGifs', () => { 
    test('Debe de regresar el estado inicial', () => {
        const {result}= renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
        
    });

    test('Debe de retornas un arreglo de imagenes y isLoading en false', async() => {
        const {result}= renderHook( () => useFetchGifs('One Punch') );

        await waitFor( // esta funcion espera a que se cumpla la condicion
            () => expect(result.current.images.length).toBeGreaterThan(0) // se espera que se muestre el texto 'Cargando...' y que se encuentre en el DOM
        )
        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0); 
        expect(isLoading).toBeFalsy(); 
        
    });

 })