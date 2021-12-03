import Axios from "axios";

const place=Axios.create({
    baseURL:`${process.env.REACT_APP_URL}/places`
})

export {place}