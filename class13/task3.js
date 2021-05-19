
const fetchCode=async()=>{
    const res=await fetch("https://restcountries.eu/rest/v2/alpha/in");
   console.log(res.json());

    
}

fetchCode();