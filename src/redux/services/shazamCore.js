import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6220484683msh72b3f1054133c20p1fe247jsna7872d93c0eb',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        
    })