<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
           <router-link
      :to="{name: 'restaurant', params: {id: restaurant.id}}"
    >
            {{restaurant.name}}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{restaurant.Category.name}}</span>
        <p class="card-text text-truncate">
          {{restaurant.description}}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
          v-on:click.prevent.stop="deleteFavorite()"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          v-on:click.prevent.stop="addFavorite()"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          v-on:click.prevent.stop="deleteLike()"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          v-on:click.prevent.stop="addLike()"
        >
          Like
        </button>
      </div>
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