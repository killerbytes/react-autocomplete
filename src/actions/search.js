import axios from 'axios'
import { apiUrl, github } from '../constants/Config'

export function searchRepo(query){
    return function(dispatch){
        dispatch({type: "SEARCH_REPO"})
        return axios.get(`${apiUrl}/search/repositories`, {
            params: {
                q: query,
                client_id: github.id,
                client_secret: github.secret
            }
        })
        .then(function(res){
            dispatch({
                type: "SEARCH_REPO_FULFILLED",
                payload: res.data
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}

export function searchUser(query){
    return function(dispatch){
        dispatch({ type: "SEARCH_USER" });
        return axios.get(`${apiUrl}/search/users`,{
            params: {
                q: query,
                client_id: github.id,
                client_secret: github.secret                
            }
        })
        .then(function(res){
            dispatch({
                type: "SEARCH_USER_FULFILLED",
                payload: res.data
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}