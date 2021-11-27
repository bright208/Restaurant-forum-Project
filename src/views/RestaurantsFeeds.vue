<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants  :restaurants="restaurants"/>
        <!-- 最新餐廳渲染區域-->
      </div>
      <div class="col-md-6">
        <!-- 最新評論渲染區域-->
        <h3>最新評論</h3>
        <NewestComments  :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>

import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'
import feedsAPI from '../apis/restaurants.js'
import {Toast} from '../utils/helpers'


export default {
     data () {
    return {
      restaurants: [],
      comments: []
    }
  },
  methods: {
   async fetchFeeds () {
      
     try{
      const response=await feedsAPI.getFeeds()
      this.restaurants = response.data.restaurants
      this.comments = response.data.comments
     }
     catch {
      Toast.fire({
        icon:"error",
        title:"無法取得動態資料，請稍後再試"
      })
     }     
    }
  },
   created () {    
    this.fetchFeeds()       

  },
   components:{
   NavTabs:NavTabs,
   NewestRestaurants:NewestRestaurants,
   NewestComments:NewestComments
   }
}

</script>