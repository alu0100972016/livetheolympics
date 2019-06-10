<template>
  <v-container align-content-center>
    <h1 class="headline text-uppercase" align="center">
      Atletas de {{ $route.params.sport }}
    </h1>
    <br />
    <v-layout justify-space-around row wrap>
      <v-flex
        pa-1
        xs12
        sm6
        md4
        v-for="(athlete, index) in athletes"
        :key="athlete.name"
      >
        <v-card
          height="100%"
          :color="ringsColor[index % ringsColor.length]"
          :class="'pa-2 text-xs-center ' + textColor[index % textColor.length]"
          elevation="6"
        >
          <v-avatar size="200px">
            <v-img :alt="athlete.name" :src="athlete.img" />
          </v-avatar>
          <h2 class="namep">{{ athlete.name }}</h2>
          <p class="descriptionp">{{ athlete.description }}</p>
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
      athletes: [],
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

  beforeMount() {
    firebaseDB
      .collection("athletes")
      .where("sport", "==", this.$route.params.sport)
      .get()
      .then(querySnapshot => {
        this.athletes = [];
        querySnapshot.docs.forEach(doc => {
          this.athletes.push(doc.data());
        });
      })
      .catch(err => {
        alert("Error getting documents: " + err);
      });
  }
};
</script>
