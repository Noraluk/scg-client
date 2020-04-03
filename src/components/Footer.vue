<template>
  <footer>
    <div class="container ml-1">
      <span class="logo">SCG Test</span>
      <span class="fullname mr-2">Noraluk Chotibuth</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  background: skyblue;
  padding: 6px;
}

.logo {
  font-weight: 900;
}

.fullname {
  right: 0;
  position: fixed;
  font-weight: 900;
}
</style>