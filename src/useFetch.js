import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError]= useState(null)
  
    useEffect(()=>{
        fetch(url)
        .then(response => {
            if (!response.ok){
              throw Error('Could not fetch data')
            }
            return response.json();
          })
            .then(data=>{
              setData(data);
              setIsPending(false);
              setError(null) //dont display laoding message if fetch has gotten data
            })
            .catch(err => {
              setIsPending(false);
              setError(err.message)
            })
      },[]);

      return {data, isPending, error}
}

export default useFetch;