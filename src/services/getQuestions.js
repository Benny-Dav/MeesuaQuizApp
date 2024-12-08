import { apiClient } from "./config"
export const apiGetQuestions = async()=>{
    return apiClient.get("/triviaApi") 
}