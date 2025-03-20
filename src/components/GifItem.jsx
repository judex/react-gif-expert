
export const GifItem = ({title, url, id}) => {
  
    return (
    <div className="border-1 border-gray-300 hover:border-cyan-500 rounded shadow-2xl">
        <figure key={id} className="bg-white hover:bg-cyan-100">
            <img src={url} alt={title} className="cover w-100 h-100"/>
            <figcaption className="text-sm p-2 font-semibold text-gray-700 rounded">{title}</figcaption>
        </figure>
    </div>
  )
}
