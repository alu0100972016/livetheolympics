<template>
  <v-container>
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed color="white">
      <v-btn to="/" color="blue-grey darken-3" flat value="news">
        <span>News</span>
        <v-icon>explore</v-icon>
      </v-btn>

      <v-btn to="/games" color="blue-grey darken-3" flat value="games">
        <span>The Games</span>
        <v-icon>play_circle_filled</v-icon>
      </v-btn>

      <v-btn to="/sports" color="blue-grey darken-3" flat value="sports">
        <span>Games</span>
        <v-icon>directions_run</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: "news"
    };
  }
};
</script>
