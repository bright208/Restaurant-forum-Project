<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="profile in profiles" :key="profile.id">
          <th scope="row">
            {{profile.id}}
          </th>
          <td>{{profile.email}}</td>
          <td>{{profile.isAdmin | userRole}}</td>
          <td>
             <button
              type="button"
              class="btn btn-link"
              v-if="profile.isAdmin&&currentUser.id !==profile.id"
              v-on:click="toggleUserRole(profile.id)"
            >
              set as user
            </button>
              <button
              type="button"
              class="btn btn-link"
              v-show="!profile.isAdmin"
              v-on:click="toggleUserRole(profile.id)"
            >
              set as admin
            </button>
          
          </td>
        </tr>      
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'

const dummyData={
       profile:[
         {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$ZcshVCQ1K9jdlXi.2QZZwOqkXcdhd0e1GJNOsZ4iLv3Fgj52W8TTK",
        "isAdmin": true,
        "image": null,
        "createdAt": "2021-11-10T11:38:07.000Z",
        "updatedAt": "2021-11-10T11:38:07.000Z"
        },
        {
          "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$6RuJwqrtZ7vF2rizwfA.Ven9qw4ow5YQafa0frnBwsMYdHzjox2Oe",
        "isAdmin": false,
        "image": null,
        "createdAt": "2021-11-10T11:38:07.000Z",
        "updatedAt": "2021-11-10T11:38:07.000Z"
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
        }
       ]
}

export default{

     components:{
      AdminNav:AdminNav
     },
     data(){
       return{
        profiles:[],
        currentUser: {
        id: 1,
        name: '管理者',
        email: 'root@example.com',
        image: 'https://i.pravatar.cc/300',
        isAdmin: true
        }
}         
           
     },
     methods:{
       fetchUser(){
         this.profiles=dummyData.profile
       },
       toggleUserRole(id){
        this.profiles=this.profiles.map(profile=>
         {
           if(profile.id===id){
            return {...profile,isAdmin:!profile.isAdmin}
           }
          else{
            return profile
          }
         }       
        )
       }
     },
     created(){
       this.fetchUser()
     },
     filters:{
       userRole(isAdmin){
        if(isAdmin){
          return "admin"
        }
        else{
          return "user"
        }        
       }
     }

}

</script>