<template>
  <o-table v-if="load" :data="formattedEpisodes" narrowed hoverable :mobile-cards="true">
    <o-table-column field="monitoring" label="" v-slot="props" position="left">
      {{props.row.monitoring}}
    </o-table-column>

    <o-table-column
      sortable
      numeric
      field="number"
      label="#"
      v-slot="props"
      position="left"
    >
      {{ props.row.number }}
    </o-table-column>

    <o-table-column field="title" label="Title" v-slot="props" width="60%">
      {{ props.row.title }}
    </o-table-column>

    <o-table-column
      field="released_at"
      label="Air Date"
      v-slot="props"
      position="right"
    >
      {{ props.row.formattedDate }}
    </o-table-column>

    <o-table-column label="File" position="right" width="5%" v-slot="props">
      Yes
    </o-table-column>

    <o-table-column label="Actions" position="right" v-slot="props">
      Actions
    </o-table-column>
  </o-table>
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
    monitoringDisabled: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
    load: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  emits: ["reload"],
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
