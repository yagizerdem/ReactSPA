// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import { useState, useEffect, useCallback } from 'react';

export default function useReverseGeoLocationApi() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [locationData, setLocationData] = useState();
  
    async function getLocation(lat, lon) {
      setIsLoading(true);
      try {
        const result = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
        );
        const data = await result.json();
        setLocationData(data);
        setIsLoading(false);
      } catch(ex) {
        console.error(ex);
        setIsLoading(false);
        setError(ex);
      }
    }
  
    return { isLoading, error, locationData, getLocation };
  }