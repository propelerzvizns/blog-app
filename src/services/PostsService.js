import axios from "axios";
export default class PostsService {
 
    async  getPosts(){
        const {data} =  await   axios.get('http://localhost:3000/api/posts')
        return data
           
    }
    async  getAPost(id){

    const {data} =  await   axios.get(`http://localhost:3000/api/posts/${id}?filter={"include":["comments"]}`)
   
        return data
        
    }
    addAPost(data){
        axios.post('http://localhost:3000/api/posts', data)
        
    }
    editAPost(data){
        axios.put('http://localhost:3000/api/posts', data)
        
        
    }
    deleteAPost(data){
        
       return axios.delete(`http://localhost:3000/api/posts/${data.id}`, data)
        
    }

    addAComment(postId, comment){
        axios.post(`http://localhost:3000/api/posts/${postId}/comments`, comment)
        console.log(postId);
        console.log(comment);
        
    }

    async  getComments(){
        const {data} =  await   axios.get('http://localhost:3000/api/commments')
        return data
           
    }
    

}


export const postsService = new PostsService()