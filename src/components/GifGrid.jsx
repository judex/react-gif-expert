import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {
  
  const {images, isLoading} = useFetchGifs(category)



  return (
    <>
        <li className='py-4'>
            <h3 className='text-2xl font-bold mb-5'>{ category }</h3>
            {
              isLoading && (
                <div className='text-sm font-bold mb-5'>Cargando...</div>
              )
            }
            <ol className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              { images.map( (image) => (
                <GifItem
                  key={image.id}
                  {...image}
                />
              ))}
            </ol>
        </li>
    </>
  )
}
