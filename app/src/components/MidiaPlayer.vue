<template>
    <div class="midiaplayer">
        <h3>{{ title }}</h3>
        <p class="post-author">{{ postAuthor }}</p>
        <div class="player">
            {{videoPath}}
        </div>
        <p class="votes">{{ votes }}</p>
        <p class="datetime">{{ datetime }}</p>
        {{ posts }}
    </div>
</template>

<script>

export default {
  name: 'MidiaPlayer',
  props: {
    title: String,
    postAuthor: String,
    videoPath: String,
    votes: Number,
    datetime: String,
    isPublished: Boolean
  },
  data() {
    return {
      posts: null
    }
  },
  created() {
  // GET request using fetch with set headers
  const headers = { "Content-Type": "application/json" };
  fetch("http:127.0.0.1:5000/api/post", { headers })
    .then(response => response.json())
    .then(data => (this.posts = data.total));
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.midiaplayer {
    border-style: solid;
}
</style>