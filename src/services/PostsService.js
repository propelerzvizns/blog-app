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
    addPost(data){
        axios.post('http://localhost:3000/api/posts', data)
        
    }

}


export const postsService = new PostsService()