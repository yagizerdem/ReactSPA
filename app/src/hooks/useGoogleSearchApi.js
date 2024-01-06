import { useState } from "react";


export default function useGoogleSearchApi(){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [position , setPosition] = useState(null)
    function getPosition() {
      if (!navigator.geolocation)
        return setError("Your browser does not support geolocation");
  
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    }
  
    return { isLoading, error, getPosition , position };
}