<template>
  <v-footer
    id="core-footer"
    app
    absolute
    height="82"
  >
    <div>
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
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Home', Link: '/' },
      { name: 'Demo', Link: '' },
      { name: 'GitHub', Link: 'https://github.com/JasGH' }
    ]
  })
}
</script>
