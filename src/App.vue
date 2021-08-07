<template>
<o-tabs>
  <o-tab-item>
        <template v-slot:header>Oruga</template>
  <div
    class="p-5 bg-gray-600 cursor-pointer rounded-md my-4"
    v-for="season in media.children"
    :key="season.id"
    @click="expand(season.id)"
  >
    <div class="text-2xl">
      <!-- <monitoring-toggle
            @click.stop
            class="text-xl"
            :monitoring="season.monitoring"
            :disabled="!media.monitoring"
            @toggle="toggleMonitoring(season)"
          /> -->
      {{ season.title }}
    </div>
    <transition name="fade">
      <div
        @click.prevent
        @click.stop
        class="bg-gray-800 rounded-md p-1 cursor-default"
        v-show="expandedCfg[season.id]"
      >
        <episode-list
          :load="loadedCfg[season.id]"
          @reload="loadMedia"
          :monitoring-disabled="!media.monitoring"
          :episodes="season.children"
        />
      </div>
    </transition>
    <div class="text-center mt-2">
      <o-icon
        v-if="loadingCfg[season.id]"
        size="large"
        icon="hourglass-start"
      />
      <o-icon
        v-if="!loadingCfg[season.id] && expandedCfg[season.id]"
        size="large"
        icon="chevron-up"
      />
      <o-icon
        v-if="!loadingCfg[season.id] && !expandedCfg[season.id]"
        size="large"
        icon="chevron-down"
      />
    </div>
  </div>
  </o-tab-item>
  <o-tab-item>
    <template v-slot:header>Native Table</template>
      <div
    class="p-5 bg-gray-600 cursor-pointer rounded-md my-4"
    v-for="season in media.children"
    :key="season.id"
    @click="expand1(season.id)"
  >
    <div class="text-2xl">
      <!-- <monitoring-toggle
            @click.stop
            class="text-xl"
            :monitoring="season.monitoring"
            :disabled="!media.monitoring"
            @toggle="toggleMonitoring(season)"
          /> -->
      {{ season.title }}
    </div>
    <transition name="fade">
      <div
        @click.prevent
        @click.stop
        class="bg-gray-800 rounded-md p-1 cursor-default"
        v-show="expandedCfg1[season.id]"
      >
        <episode-list-vanilla
          :load="loadedCfg1[season.id]"
          :episodes="season.children"
        />
      </div>
    </transition>
    <div class="text-center mt-2">
      <o-icon
        v-if="loadingCfg1[season.id]"
        size="large"
        icon="hourglass-start"
      />
      <o-icon
        v-if="!loadingCfg1[season.id] && expandedCfg1[season.id]"
        size="large"
        icon="chevron-up"
      />
      <o-icon
        v-if="!loadingCfg1[season.id] && !expandedCfg1[season.id]"
        size="large"
        icon="chevron-down"
      />
    </div>
  </div>
  </o-tab-item>
</o-tabs>
</template>

<script>
import EpisodeList from "./components/EpisodeList.vue";
import EpisodeListVanilla from "./components/EpisodeListVanilla.vue";
import obj from "./data"

export default {
  data() {
    return {
      media: {},
      loadedCfg: {},
      loadingCfg: {},
      expandedCfg: {},
      loadedCfg1: {},
      loadingCfg1: {},
      expandedCfg1: {},
    };
  },
  components: { EpisodeList, EpisodeListVanilla },
  methods: {
    expand(id) {
      this.expandedCfg[id] = !this.expandedCfg[id];
      this.loadingCfg[id] = true;
      setTimeout(() => {
        this.loadedCfg[id] = true;
        this.loadingCfg[id] = false;
      }, 0);
    },
    expand1(id) {
      this.expandedCfg1[id] = !this.expandedCfg1[id];
      this.loadingCfg1[id] = true;
      setTimeout(() => {
        this.loadedCfg1[id] = true;
        this.loadingCfg1[id] = false;
      }, 0);
    },
  },
  mounted() {
    this.media = obj.data
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
