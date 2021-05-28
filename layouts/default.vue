<template>
  <v-app
    id="dashboard-view"
    class="d-flex justify-end align-center mb-6"
    dark
  >
    <v-main>
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </v-main>
    <v-footer
      height="82"
    >
      <div class="footer-items">
        <span
          v-for="link in links"
          :key="link.name"
        >
          <a
            :href="link.Link"
            class="footer-links"
          >{{ link.name }}</a>
        </span>
      </div>
      <v-spacer />
      <span>
        &copy;
        {{ (new Date()).getFullYear() }}
      </span>
    </v-footer>
    <!-- <core-footer v-if="$route.meta.name !== 'Maps'" /> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home ', Link: '/' },
      { name: 'GitHub', Link: 'https://github.com/JasGH' }
    ]
  })
}
</script>

<style>
.footer-links{
  text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    padding: 15px;
}
</style>
