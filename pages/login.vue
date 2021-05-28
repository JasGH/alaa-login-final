<template>
  <v-app>
    <v-layout justify-center align-center>
      <v-card class="elevation-10" style="flex: 0 1 400px">
        <v-card-title class="headline">
          ورود
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="userLogin">
            <v-alert v-if="alert" :type="alert.type">
              {{ alert.message }}
            </v-alert> <!-- :value="true"-->
            <v-text-field v-model="mobile" label="شماره موبایل" />
            <v-text-field v-model="password" label="کد ملی" type="password" />
            <v-btn type="submit" :loading="loading" :disabled="loading">
              ورود
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  layout: 'fullscreen',
  data () {
    return {
      mobile: '', // test : 09354771477
      password: '', // test : 1273421043
      alert: null,
      loading: false
    }
  },
  methods: {
    async userLogin () {
      try {
        const response = await this.$auth.loginWith('local', {
          data: {
            mobile: this.mobile,
            password: this.password
          }
        })
        console.log(response)
        this.$store.dispatch('setAllData', response)
        this.$router.push('/userProfile')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
