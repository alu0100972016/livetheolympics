<template>
  <v-container align-content-center>
    <v-layout justify-space-around row wrap>
      <v-flex lg8>
        <div id="id">
          <Timeline id="juegosolimpicos" sourceType="profile" />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Timeline } from "vue-tweet-embed";
export default {
  components: {
    Timeline
  }
};
</script>
