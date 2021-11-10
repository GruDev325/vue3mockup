<template>
  <div class="sticky top-0 flex justify-end px-6 py-7">
    <button class="mr-1.5">
      <img alt="Vue vector" src="../assets/img/Vector.svg" />
    </button>
    <span>يبرع</span>
    <img class="ml-3" alt="Vue logo" src="../assets/img/globe.svg" />
  </div>
  <div class="md:w-1 mx-auto text-mainColor font-mainFont p-5">
    <div class="flex justify-center items-center">
      <img alt="Vue logo" src="../assets/img/Earthlink.png" />
    </div>
    <h2 class="text-3xl font-bold text-center mt-5">Sign in to Task Manager</h2>
    <form
      class="login-form border-solid border-gray-200 border shadow-md rounded-lg px-9 pt-7 pb-10 mt-10"
      @submit.prevent="onSubmit"
    >
      <div class="form-group" :class="{ error: v$.form.email.$errors.length }">
          <label for="email" class="text-base text-labelColor font-bold">Email</label>
          <input
            id="email"
            name="email"
            class="form-control border border-gray-200 border-solid rounded-md w-full mt-3 mb-2 p-3 text-base"
            type="email"
            v-model="v$.form.email.$model"
            placeholder="you@example.com"
          />
            <!-- error message -->
        <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="form-group" :class="{ error: v$.form.password.$errors.length }">
          <label for="password" class="text-base text-labelColor font-bold"
            >Password</label
          >
          <input
            type="password"
            class="form-control border border-gray-200 border-solid rounded-md w-full mt-3 mb-4 p-3 text-base"
            id="password"
            v-model="v$.form.password.$model"
            placeholder="Password"
          />
          <!-- error message -->
        <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="flex justify-between items-center mb-10 mt-5">
        <label class="flex items-center text-sm">
          <input type="checkbox" class="mr-1 w-4 h-4" />Keep me logged in</label
        >
        <a href="#" class="text-sm text-linkColor font-bold">Forgot password?</a>
      </div>
      <div class="input-errors" v-if="message">
        <div class="error-msg">{{ message }}</div>
      </div>
      <Button :value="'Sign in'" :background="v$.form.$invalid ? variables.colors.btnGrey : variables.colors.btnBlue" :fontColor="'white'" :padding="variables.spacing.md" :disabled="v$.form.$invalid"/>
    </form>
  </div>
</template>

<script lang="ts">

import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { defineComponent, defineAsyncComponent } from 'vue'
import { variables } from '../services/variables'
import { mapActions } from 'vuex'

export default defineComponent({
  setup () {
    return { v$: useVuelidate() }
  },
  name: 'Login',
  data: function () {
    return {
      variables: variables,
      form: {
        email: '',
        password: ''
      },
      message: ''
    }
  },
  validations: function () {
    return {
      form: {
        email: { required, email },
        password: { required, min: minLength(6) }
      }
    }
  },
  components: {
    Button: defineAsyncComponent(() => import('../components/Button.vue'))
  },
  methods: {
    ...mapActions(['loginWithEmail']),
    validationStatus (validation: { $error: any }):any {
      if (validation) {
        return validation.$error
      } else {
        return false
      }
    },
    async onSubmit () {
      if (!this.v$.form.$invalid) {
        const res = await this.loginWithEmail({
          email: this.form.email,
          password: this.form.password
        })
        if (res.status === 200) {
          this.$router.push('/dashboard')
        } else {
          this.message = res.message
          setTimeout(() => {
            this.message = ''
          }, 3000)
        }
      }
    }
  }
})
</script>
