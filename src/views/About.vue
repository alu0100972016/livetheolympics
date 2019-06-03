<template>
  <v-container align-content-center>
    <v-layout justify-space-around row wrap>
      <v-flex lg5>
        <div v-for="video in videos" :key="video.id">
          <iframe
            id="player"
            type="text/html"
            width="720"
            height="405"
            :src="video.src"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      videos: []
    };
  },
  methods: {
    async getVideos() {
      const axios = require("axios");
      var APIKEY = "AIzaSyC9gTmYA4ies0KSkMhx9KQrmQTA7wVVMCM";
      var url =
        "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=5&order=date&type=video&key=" +
        APIKEY;
      var response = await axios.get(url);
      if (response.status === 200) {
        this.videos = response.data.items.map(item => ({
          id: item.id.videoId,
          src: "https://www.youtube.com/embed/" + item.id.videoId
        }));
      }
    },

    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addVideos() {
      if (this.bottomVisible()) {
        this.videos.push(this.getVideos());
      }
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.addVideos();
      }
    }
  },
  mounted() {
    this.videos = this.getVideos();
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.addVideos();
  }
};
</script>
