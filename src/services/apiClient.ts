import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "7be09fe21c9b4cb799feae5ae93b029a"
    }
})