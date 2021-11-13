<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link
      :to="{ name: 'restaurant', params: {id: restaurant.id}}"
    >{{ restaurant.name }}</router-link>
          <small>{{restaurant.Category.name}}</small>
        </h4>
        <p>{{ restaurant.description }}</p>{{ restaurant.createdAt | fromNow }}
        <hr>
      </div>      
    </div>
  </div>
</template>


<script>

import moment from 'moment'//載入moment套件

export default{

   props:{
     
     restaurants:{
      type:Array,
      required:true
     }     
   },
  
  filters:{
    
    fromNow(datetime){

      if (!datetime) {//如果是空字串
        return '-'
      }
     
      return moment(datetime).fromNow()//使用moment套件裡面的fromNow方法

    }

  }


}

</script>

<style scoped>
small {
  font-size: 10px;
}
</style>