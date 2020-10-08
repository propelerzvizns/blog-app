import axios from "axios";
export default class PostsService {
 
    async  getPosts(){
     const {data} =  await   axios.get('http://localhost:3000/api/posts')
     return data
        
        
    }
}


export const postsService = new PostsService()