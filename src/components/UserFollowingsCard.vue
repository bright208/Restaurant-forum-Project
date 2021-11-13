<template>
<div  class="card mb-3">
      <div class="card-header">
        <strong>{{Followings.length}}</strong> followings (追蹤者)
      </div>
      <div class="card-body">
       <router-link v-for="Following in Followings" :key="Following.id"  
       :to="{name:'profile-page',params:{id:Following.id}}">
            <img :src="Following.image" width="60" height="60" class="avatar mr-1">
          </router-link>     
          
      </div>
    </div>    
 
 
    </template>

    <script>
   
    export default{
      
      props:{
         Followings:{
          type:Array,
          required:true
         }

      }


    }

    </script>