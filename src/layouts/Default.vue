<template>
  <div class="layout">
    <div class="bg-white font-barlow">
      <Navbar />
      
        <slot />
      <Footer />
      

      
    </div>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
      twitter {
        site
        creator
      }
    }
  }
</static-query>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  },
   metaInfo () {
    return {
      meta: [
        { key: 'author', name: 'author', content: this.$static.metadata.author },
        { key: 'twitter:site', name: 'twitter:site', content: this.$static.metadata.twitter.site },
        { key: 'twitter:creator', name: 'twitter:creator', content: this.$static.metadata.twitter.creator }
      ]
    }
  }
};
</script>


<style src="../tailwind.css" />
