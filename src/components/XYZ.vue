<template>
  <div class="container">
    <p class="mt-3">Give this sequence number X, Y, 5, 9, 15, 23, Z . What number of X,Y,Z ?</p>
    <ul class="mt-3">
      <li>X = {{XYZ.x}}</li>
      <li>Y = {{XYZ.y}}</li>
      <li>Z = {{XYZ.z}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("GET_XYZ");
  },

  computed: {
    ...mapGetters(["XYZ"])
  }
};
</script>