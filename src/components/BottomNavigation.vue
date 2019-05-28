<template>
  <v-container>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="white">
      <v-btn to="/" color="teal" flat value="recent">
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn to="/about" color="teal" flat value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn to="/sports" color="teal" flat value="sports">
        <span>Sports</span>
        <v-icon>directions_run</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "recent"
    };
  }
};
</script>
