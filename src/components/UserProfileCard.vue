<template>

 
<div class="row no-gutters">
    <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{profile.name}}</h5>
        <p class="card-text">
          {{profile.email}}
        </p>
        <ul class="list-unstyled list-inline">
          <li><strong>{{profile.Comments.length}}</strong> 已評論餐廳</li>
          <li><strong>{{profile.FavoritedRestaurants.length}}</strong> 收藏的餐廳</li>
          <li><strong>{{profile.Followings.length}}</strong> followings (追蹤者)</li>
          <li><strong>{{profile.Followers.length}}</strong> followers (追隨者)</li>
        </ul>
        <p>
            <a href="/users/2/edit"><button type="submit" class="btn btn-primary" v-show="profile.isAdmin">edit</button></a>
            
            <button type="submit" class="btn btn-primary mr-2"
             v-show="!profile.isAdmin"
             v-on:click="addFollowing(profile)">追蹤</button>
            <button type="submit" class="btn btn-primary"
            v-show="!profile.isAdmin"
            v-on:click="deleteFollowing(profile)">取消追蹤</button>
          </p>
      </div>
    </div>
  </div>

  

</template>

<script>

export default{
  props:{
  profile:{
    type:Object,
    required:true
  }
},
methods:{
 addFollowing(user){
 console.log("follow this user:", user.id)
 },
 deleteFollowing(user){
  console.log("delete this user:",user.id)
 }
}
}




</script>