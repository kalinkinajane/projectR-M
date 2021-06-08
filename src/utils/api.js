export const getInfo = () => {
 return fetch(
    "https://rickandmortyapi.com/api/character",
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
    }
    }
  )
  .then((res) =>{
      if(res.ok){
          return res.json();
      }
      return Promise.reject(res.status)
  })
};
