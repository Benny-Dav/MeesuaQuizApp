import { apiClient } from "./config"

export const apiGetSubjects = async()=>{
    return apiClient.get("/fetchCategories")
}