import { useEffect, useState, useCallback } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = useCallback(async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }, [category]);

  useEffect(() => {
    getImages();
  }, [getImages]); 
    
    return {
        images,
        isLoading
    }
}
