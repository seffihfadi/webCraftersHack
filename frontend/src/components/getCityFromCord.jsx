
export const getCityFromCord = async ( lat, lon ) => {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching city data:');
      return null;
    }
  };
  