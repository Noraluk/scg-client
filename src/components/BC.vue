<template>
  <div class="container">
    <p class="mt-3">If A = 21, A + B = 23, A + C = -21 . What number of B and C ?</p>
    <ul class="mt-3">
      <li>B = {{BC.b}}</li>
      <li>C = {{BC.c}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("GET_BC");
  },
  computed: {
    ...mapGetters(["BC"])
  }
};
</script>