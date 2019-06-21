<template>
  <v-infinite-scroll
    :loading="loading"
    @bottom="addVideos"
    :offset="20"
    style="max-height: 80vh; overflow-y: scroll;"
    v-body-scroll-lock="true"
  >
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
  </v-infinite-scroll>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
      loading: false,
      pageToken: ""
    };
  },
  methods: {
    getVideos() {
      const axios = require("axios");
      const APIKEY = "AIzaSyB-RVbhrV7FxLqwtSHF6VaBgW-U-cma5hk";
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCTl3QQTvqHFjurroKxexy2Q&pageToken=${
        this.pageToken
      }&maxResults=10&order=date&type=video&key=${APIKEY}`;
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
    addVideos() {
      this.loading = true;
      this.getVideos().then(videos => {
        this.videos.push(...videos);
        this.loading = false;
      });
    }
  },
  mounted() {
    this.getVideos().then(videos => {
      this.videos.push(...videos);
    });
  }
};
</script>

<style>
iframe {
  width: 100%;
  height: 100%;
}
</style>
