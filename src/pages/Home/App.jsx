import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Map from '../../components/Map/Map';

const App = () => {
   const ipUrl =
      'https://geo.ipify.org/api/v2/country,city?apiKey=at_edGuIPJJhf6U2492iVTLAdM39RI6O&';
   const [ip, setIp] = useState('');
   const [city, setCity] = useState('');
   const [country, setCountry] = useState('');
   const [timezone, setTimezone] = useState('');
   const [isp, setIsp] = useState('');
   const [loading, setLoading] = useState(true);
   const [lat, setLat] = useState();
   const [long, setLong] = useState();

   useEffect(() => {
      async function fetchApi() {
         const res = await fetch(ipUrl);
         const json = await res.json();
         update(json);
      }
      fetchApi();
   }, []);

   const update = json => {
      setLoading(true);
      setIp(json.ip);
      setCity(json.location.region);
      setCountry(json.location.country);
      setTimezone(json.location.timezone);
      setIsp(json.isp);
      setLat(json.location.lat);
      setLong(json.location.lng);
      setLoading(false);
   };

   async function updateUi(Ip) {
      setLoading(true);
      const res = await fetch(ipUrl + 'ipAddress=' + Ip);
      const json = await res.json();
      update(json);
   }

   function handleSubmit(e, inputValue) {
      e.preventDefault();
      updateUi(inputValue);
   }

   return (
      <>
         <Header
            handleSubmit={handleSubmit}
            loading={loading}
            ip={ip}
            city={city}
            country={country}
            timezone={timezone}
            isp={isp}
         />
         {loading ? null : (
            <Map
               country={country || 'Invalid ip'}
               city={city || 'Invalid ip'}
               lat={lat || 'Invalid ip'}
               long={long || 'Invalid ip'}
               ipUrl={ipUrl || 'Invalid ip'}
            />
         )}
      </>
   );
};

export default App;
