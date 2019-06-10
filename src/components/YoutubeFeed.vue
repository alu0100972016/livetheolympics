<template>
  <v-container align-content-center>
    <v-layout justify-space-around row wrap>
      <v-flex pa-1 xs12 sm6 v-for="video in videos" :key="video.id">
        <v-card flat class="pa-1 text-xs-center">
          <iframe
            :aspect-ratio="16 / 9"
            id="player"
            type="text/html"
            :src="video.src"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
      bottom: false,
      pageToken: ""
    };
  },
  methods: {
    getVideos() {
      const axios = require("axios");
      const APIKEY = "AIzaSyB-RVbhrV7FxLqwtSHF6VaBgW-U-cma5hk";
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTl3QQTvqHFjurroKxexy2Q&pageToken=${
        this.pageToken
      }&maxResults=8&order=date&type=video&key=${APIKEY}`;
      return axios.get(url).then(response => {
        if (response.status === 200) {
          this.pageToken = response.data.nextPageToken;
          return response.data.items.map(item => ({
            id: item.id.videoId,
            src: "https://www.youtube.com/embed/" + item.id.videoId
          }));
        }
      });
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
        this.getVideos().then(videos => {
          this.videos.push(...videos);
        });
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
    this.getVideos().then(videos => {
      this.videos.push(...videos);
    });
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.addVideos();
  }
};
</script>

<style>
iframe {
  width: 100%;
  height: 100%;
}
</style>
