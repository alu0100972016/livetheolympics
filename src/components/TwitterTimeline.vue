<template>
  <v-container align-content-center>
    <v-layout justify-space-around row wrap>
      <v-flex lg8>
        <div id = "id">
          <a class="twitter-timeline" href="https://twitter.com/juegosolimpicos?ref_src=twsrc%5Etfw">Tweets by juegosolimpicos</a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { async } from 'q';
export default {
  async beforeMount(){
    function loadTimeline() {
      return (function(document, script, id) {
        console.log(script);
        var js, fjs = document.getElementsByTagName(script)[0],
        t = window.twttr || {};
        if (document.getElementById(id)) return t;
        js = document.createElement(script);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function(f) {
          t._e.push(f);
        };
        return t;
      }(document, "script", "twitter-wjs"));
    }
    
    let result = await loadTimeline();
    return result;
  }
}
</script>
