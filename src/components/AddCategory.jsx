import { useState } from "react";
import PropTypes from "prop-types";


export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setinputValue] = useState('One punch');

    const onInputChange = ({target})=>{
        // console.log(target.value);        
        setinputValue(target.value);
    }

    const onSubmit = (event) => {            
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // setcategories( categories => [inputValue, ...categories ]); 
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

  return (
    <form onSubmit={ onSubmit } className="w-full" aria-label="form">
        <input 
        className="w-full py-4 px-4 bg-white font-semibold rounded border-2 focus:border-blue-400" 
        type="text"
        placeholder="Buscar Gif" 
        value={ inputValue }
        onChange={ onInputChange }
        />
    </form>
  )
}
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
