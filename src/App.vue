<template>
  <v-app>
    <Toolbar />

    <v-content>
      <router-view />
    </v-content>

    <v-content>
      <BottomNavigation />
    </v-content>
  </v-app>
</template>

<script>
import BottomNavigation from "./components/BottomNavigation.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  components: {
    BottomNavigation,
    Toolbar
  }
};
</script>
