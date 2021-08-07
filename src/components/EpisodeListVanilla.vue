<template>
  <table v-if="load">
    <tr>
      <th>Monitoring</th>
      <th>Number</th>
      <th>Title</th>
      <th>Air Date</th>
      <th>File</th>
      <th>Actions</th>
    </tr>
    <tr v-for="episode in formattedEpisodes" :key="episode.id">
      <td>{{ episode.monitoring }}</td>
      <td>{{ episode.number }}</td>
      <td>{{ episode.title }}</td>
      <td>{{ episode.formattedDate }}</td>
      <td>Yes</td>
      <td>Actions</td>
    </tr>
  </table>
</template>

<script>
import { DateTime } from "luxon";

export default {
  props: {
    episodes: {
      type: Array,
      default: function () {
        return [];
      },
    },
    load: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
  },
  methods: {
    formatDate(timestamp) {
      return DateTime.fromJSDate(new Date(timestamp)).toLocaleString(
        DateTime.DATE_SHORT
      );
    },
  },
  computed: {
    formattedEpisodes() {
      return this.episodes.map((elem) => {
        elem.formattedDate = this.formatDate(elem.released_at)
        return elem
      })
    }
  }
};
</script>
