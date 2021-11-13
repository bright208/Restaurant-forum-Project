<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
    :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{restaurant.description}}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{name:'restaurant-dashboard',params:{id:restaurant.id}}"
      >Dashboard</router-link>

      <button
        type="button"
        class="btn btn-danger btn-border mr-2"
        v-if="restaurant.isFavorited"
        v-on:click="deleteFavorite()"
      >
        移除最愛
      </button>
      <button
        type="button"
        class="btn btn-primary btn-border mr-2"
        v-else
        v-on:click="addFavorite()"
      >
        加到最愛
      </button>
      <button
        type="button"
        class="btn btn-danger like mr-2"
        v-if="restaurant.isLiked"
        v-on:click="deleteLike()"
      >
        Unlike
      </button>
      <button
        type="button"
        class="btn btn-primary like mr-2"
        v-else
        v-on:click="addLike()"
      >
        Like
      </button>
    </div>
  </div>
</template>


<script>

export default{
   
   props:{
    initialrestaurant:{
      type:Object,
      required:true
    }
   },
   data(){

     return{
       restaurant:this.initialrestaurant
     }

   },
   methods:{
     addFavorite(){
      this.restaurant.isFavorited=true
     },
     deleteFavorite(){
      this.restaurant.isFavorited=false
     },
     addLike(){
      this.restaurant.isLiked=true
     },
     deleteLike(){
      this.restaurant.isLiked=false
     }
   }

}

</script>