<template>
<div>
<hr>
    <form @submit.prevent="addComment">
        <div class="form-group">

            <label for="text">text</label>
            <input type="text" class="form-control" id="text" v-model="comment.text" >
       
        </div>
        <button  class="btn btn-primary">Add Comment</button>
      
    </form>
</div>
</template>
<script>
export default {
    data(){
        return {
            comment: {
                text: ''
            }
        }
    },
    methods: {
    addComment(){
        this.$emit('commentAdded', this.comment)
     }
    }
}
</script>
<style scoped>

</style>