import axios from "axios";

  export const weather = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5", 
  });

  export const unsplash = axios.create({
    baseURL: "https://api.unsplash.com/search",
  })

