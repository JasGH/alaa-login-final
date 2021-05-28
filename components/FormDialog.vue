<template>
  <v-dialog
    v-model="dialog"
    max-width="600px"
  >
    <template #activator="{ on }">
      <v-btn
        color="primary"
        class="font-weight-light "
        rounded
        v-on="on"
      >
        ویرایش اطلاعات
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">ویرایش  اطلاعات</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="userData.first_name"
                label="نام"
                required
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="userData.last_name"
                label="نام خانوادگی"
                required
              />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="userData.gender"
                :items="items"
                label="جنسیت"
                outlined
                required
              />
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="4"
            >
              <v-text-field
                v-model="userData.shahr"
                label="شهر"
                required
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="userData.province"
                label="استان"
                required
              />
            </v-col>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="userData.address"
                label="آدرس"
                required
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="userData.major"
                label="رشته تحصیلی"
                required
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="userData.school"
                label="مدرسه"
                required
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="userData.grade"
                label="پایه تحصیلی"
                required
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="blue darken-1"
          text
          @click="Close"
        >
          بستن
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="sendValues"
        >
          ذخیره
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FormDialog',
  data () {
    return {
      dialog: false,
      userData: {
        first_name: null,
        last_name: null,
        address: null,
        school: null,
        major: null,
        grade: null,
        gender: null,
        shahr: null,
        province: null

      },
      items: ['خانم', 'آقا']
      // must emit the setValues object to loginform
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {

    sendValues () {
      const userdefaultData = this.userInfo
      const updatedUser = {
        ...userdefaultData,
        first_name: this.userData.first_name === null || this.userData.first_name === undefined ? userdefaultData.first_name : this.userData.first_name,
        last_name: this.userData.last_name === null || this.userData.last_name === undefined ? userdefaultData.last_name : this.userData.last_name,
        address: this.userData.address === null || this.userData.address === undefined ? userdefaultData.address : this.userData.address,
        school: this.userData.school === null || this.userData.school === undefined ? userdefaultData.school : this.userData.school,
        major: this.userData.major === null || this.userData.major === undefined ? userdefaultData.major : this.userData.major,
        grade: this.userData.grade === null || this.userData.grade === undefined ? userdefaultData.grade : this.userData.grade,
        gender: this.userData.gender === null || this.userData.gender === undefined ? userdefaultData.gender : this.userData.gender,
        city: this.userData.shahr === null || this.userData.shahr === undefined ? userdefaultData.city : this.userData.shahr,
        province: this.userData.province === null || this.userData.province === undefined ? userdefaultData.province : this.userData.province
      }
      this.dialog = false
      //   console.log(updatedUser)
      this.userData = {
        first_name: null,
        last_name: null,
        address: null,
        school: null,
        major: null,
        grade: null,
        gender: null,
        shahr: null,
        province: null
      }
      this.$store.dispatch('updateUser', updatedUser)
    },
    Close () {
      this.userData = {
        first_name: null,
        last_name: null,
        address: null,
        school: null,
        major: null,
        grade: null,
        gender: null,
        shahr: null,
        province: null
      }
      this.dialog = false
    }
  }
}
</script>
