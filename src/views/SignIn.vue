  <template>
  <div class="container py-5">
    <form class="w-100" v-on:submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          autofocus
          required          
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required          
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit" :disabled="isProcessing">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>


<script>
import authorizationApi from "../apis/authorization.js";
import { Toast } from '../utils/helpers.js';
export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing:false
    };
  },
  methods: {
    handleSubmit() {
      if(!this.password||!this.email){
       Toast.fire({
          icon: 'warning',
          title: '帳號或密碼請勿空白'
       })
       return
      }
      this.isProcessing=true

      authorizationApi
        .signIn({ email: this.email, password: this.password })
        .then((response) => {
          const { data } = response;

          if (data.status !== "success") {
            throw new Error(data.message);
          }

          localStorage.setItem("token", data.token);
          // 成功登入後轉址到餐廳首頁
          this.$router.push("/restaurants");
        })
        .catch(error=>{
          this.password=""
          Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
          })
          this.isProcessing=false
          console.log(error)
        })
    },
  },
};
</script>