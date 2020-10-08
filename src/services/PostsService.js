import axios from "axios";
export default class PostsService {
 
    async  getPosts(){
        const {data} =  await   axios.get('http://localhost:3000/api/posts')
        return data
           
    }
    async  getAPost(id){

    const {data} =  await   axios.get('http://localhost:3000/api/posts/' + id)
   
        return data
        
    }
    addAPost(data){
        axios.post('http://localhost:3000/api/posts', data)
        
    }
    editAPost(data){
        axios.put('http://localhost:3000/api/posts/', data)
        
        
    }
    

}


export const postsService = new PostsService()