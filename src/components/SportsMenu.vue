<template>
  <v-container align-content-center>
    <v-layout justify-space-around row wrap>
      <v-flex
        pa-1
        xs6
        sm6
        md6
        v-for="(sport, index) in sports"
        :key="sport.name"
      >
        <v-card
          :color="ringsColor[index % ringsColor.length]"
          :class="'pa-1 text-xs-center ' + textColor[index % textColor.length]"
          elevation="6"
          hover
          :to="'athletes/' + sport.name"
        >
          <h2>{{ sport.name }}</h2>
          <v-img aspect-ratio="1.3" :src="sport.img" />
        </v-card>
      </v-flex>
    </v-layout>
    <br />
  </v-container>
</template>

<script>
import { firebaseDB } from "@/firebaseDB";
export default {
  data() {
    return {
      sports: [],
      ringsColor: ["#0087CD", "#000000", "#FB0222", "#FCC405", "#019F31"],
      textColor: [
        "black--text",
        "white--text",
        "white--text",
        "black--text",
        "black--text"
      ]
    };
  },
  mounted() {
    console.log("LOCATION: ");
    console.log(location);
    console.log(location.pathname);
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
