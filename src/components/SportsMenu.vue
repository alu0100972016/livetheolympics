<template>
  <div>
    <span v-for="sport in sports" :key="sport">
      <h2>{{ sport }}</h2>
    </span>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      sports: []
    };
  },
  mounted() {
    const db = firebase.firestore();
    db.collection("sports")
      .get()
      .then(querySnapshot => {
        this.sports = [];
        querySnapshot.forEach(doc => {
          this.sports.push(doc.data().name);
        });
      })
      .catch(() => {
        alert("Error getting documents");
      });
  }
};
</script>
