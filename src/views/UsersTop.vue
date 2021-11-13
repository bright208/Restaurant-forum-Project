<template>
  <div class="container py-5">
  <NavTabs/>
    <h1 class="mt-5">
      美食達人
    </h1>

    <hr>
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <a href="#">
          <img
            src="http://via.placeholder.com/300x300?text=No+Image"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.Followers.length}}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
           v-if="user.isFollowed"
            v-on:click.stop.prevent="notFollowed(user)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            v-on:click.stop.prevent="isFollowed(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import NavTabs from '../components/NavTabs.vue'

const dummyData={
    users: [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$ZcshVCQ1K9jdlXi.2QZZwOqkXcdhd0e1GJNOsZ4iLv3Fgj52W8TTK",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$6RuJwqrtZ7vF2rizwfA.Ven9qw4ow5YQafa0frnBwsMYdHzjox2Oe",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$Lgbvi2UsgRvpH2pURwO/f.zV7uBNWi/EaDiNseuwDAqKsdN5NFzLm",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-10T11:38:07.000Z",
            "updatedAt": "2021-11-10T11:38:07.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default {
   components:{
   NavTabs:NavTabs
   },
   data(){
     return{
       users:dummyData.users
     }
   },
   methods:{
    isFollowed(user){
      user.isFollowed=true
    },
    notFollowed(user){
      user.isFollowed=false
    }
   }
}

</script>