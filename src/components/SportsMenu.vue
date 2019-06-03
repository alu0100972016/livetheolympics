<template>
  <v-container align-content-center>
    <v-layout justify-space-around row wrap>
      <v-flex v-for="sport in sports" :key="sport.name">
        <h2>{{ sport.name }}</h2>
        <img :src="sport.img" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { firebaseDB } from "@/firebaseDB";
export default {
  data() {
    return {
      sports: []
    };
  },
  mounted() {
    firebaseDB
      .collection("sports")
      .orderBy("name")
      .get()
      .then(querySnapshot => {
        this.sports = [];
        querySnapshot.forEach(doc => {
          this.sports.push(doc.data());
        });
      })
      .catch(() => {
        alert("Error getting documents");
      });
  }
};
</script>
