import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

  const [categories, setcategories ] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {    
    if( categories.includes(newCategory) ) return;    
    setcategories([newCategory, ...categories ]);
    // setcategories(cat => [...cat, newCategory]); //otra forma
  }

  return (
    <>
      <section className='container mx-auto p-8'>
        <h1 className='text-3xl font-bold mb-4'>GifExpertApp</h1>
        <div className="flex justify-between items-center gap-2 w-full mb-4">
          <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
            // setcategories={ setcategories }
          />
          {/* <button type="button" className='py-4 px-4 bg-blue-500 flex-grow text-white font-semibold rounded shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 whitespace-nowrap' onClick={ addCategory }>Add category</button> */}
        </div>
        <ul className='ms-4 mt-4 divide-y divide-gray-200 list-decimal'>
          {
            categories.map( category => (
              <GifGrid 
                key={ category } 
                category={ category }
              />
          ))}
        </ul>
      </section>
    </>
  )
}
