<template>
  <div class="main-app">
    <nav class="navbar" role="navigation">
      <div class="navbar-brand">
        <div
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          v-on:click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div class="navbar-menu" v-bind:class="{'is-active': isOpen}" id="navbar">
        <div class="navbar-start">
          <a v-for="(item, i) in items" :key="i" :href="item.to" class="navbar-item">{{item.title}}</a>
        </div>
      </div>
    </nav>

    <nuxt />
    <footer app>
      <p>
        All content is found in "Deskbound" by Kelly Starrett. Find the book
        <a
          href="https://www.amazon.com/dp/B01E1HDJ64/ref=cm_sw_em_r_mt_dp_U_nseuDbD9NTBTW"
          target="_blank"
          rel="noopener noreferrer"
        >here</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: [
        {
          icon: "apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Exercises",
          to: "/exercises"
        }
      ]
    };
  },
  methods: {
    toggleMenu: function() {
      console.log("HELLO")
      this.isOpen = !this.isOpen
    }
  }
};
</script>

<style lang="scss" scoped>
.main-app {
  height: 100vh;
  position: relative;
}

footer {
  background-color: $deskbound-gray;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  margin-top: 2rem;
}

.navbar-burger {
  margin-right: auto;
  margin-left: 0;
}
</style>
