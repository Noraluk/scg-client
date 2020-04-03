<template>
  <header>
    <div class="container ml-3">
      <button @click="home" class="logo ml-3">SCG</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  methods: {
    home() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
header {
  background: skyblue;
  padding: 6px;
}

.logo {
  font-size: 1.5em;
  font-weight: 900;
}
</style>