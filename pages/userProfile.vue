<template>
  <v-container
    fill-height

    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
        md3
      >
        <v-card
          class="mx-auto"
        >
          <v-layout column align-center>
            <v-avatar
              slot="offset"
              class="mx-auto d-block justify-center"
              size="130"
            >
              <img
                src="https://cdn.alaatv.com/upload/images/profile/default_avatar.jpg?w=100&h=100"
              >
            </v-avatar>
            <v-card-text class="text-center ">
              <h3 class="mb-3">
                {{ userInfo.first_name }} {{ userInfo.last_name }}
              </h3>
              <FormDialog />
            </v-card-text>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex
        xs12
        md8
      >
        <v-card>
          <v-card
            color="primary"
            dark
          >
            <v-card-title class=" text-h5">
              اطلاعات شما
            </v-card-title>

            <v-card-subtitle>
              لطفا اطلاعات خود را تکمیل کنید
            </v-card-subtitle>
          </v-card>

          <v-form>
            <v-container py-5>
              <v-layout wrap>
                <v-flex
                  xs12
                  md6
                >
                  <v-card-text> نام: {{ userInfo.first_name }} </v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-card-text>  نام خانوادگی: {{ userInfo.last_name }}</v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-card-text> جنسیت: {{ userInfo.gender }}</v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-card-text> شهر: {{ userInfo.city }}</v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-card-text> استان: {{ userInfo.province }}</v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-card-text> کد ملی: {{ userInfo.national_code }}</v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  md12
                >
                  <v-card-text> آدرس: {{ userInfo.address }}</v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-card-text> مدرسه: {{ userInfo.school }}</v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-card-text> پایه تحصیلی: {{ userInfo.grade }}</v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-card-text> رشته تحصیلی: {{ userInfo.major }}</v-card-text>
                </v-flex>
                <v-flex
                  xs12
                  text-xs-right
                />
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
        <!-- </material-card> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import FormDialog from '~/components/FormDialog.vue'
export default {
  components: {
    FormDialog
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>
