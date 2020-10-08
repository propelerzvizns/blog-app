<template>
    <form @submit.prevent="AddComment">
        <div class="form-group">

            <label for="text">Email address</label>
            <input type="text" class="form-control" id="text" v-model="text" >
       
        </div>
        <button  class="btn btn-primary">Add Comment</button>
    </form>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>