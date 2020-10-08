import axios from "axios";
export default class PostsService {
 
    async  getPosts(){
        const {data} =  await   axios.get('http://localhost:3000/api/posts')
        return data
           
           
    }
    async  getAPost(id){
        console.log(id);
        
    const {data} =  await   axios.get('http://localhost:3000/api/posts/' + id)
        return data
        
        
        
    }

}


export const postsService = new PostsService()