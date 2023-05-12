<template>
  <v-container>
    <v-row no-gutters class="d-flex justify-center mb-6 bg-surface-variant">
      <v-col cols="6">
        <v-sheet class="pa-2 ma-2">
          <PomodoroApp />
        </v-sheet>
      </v-col>
      </v-row>
      </v-container>
</template>

<script>

import PomodoroApp from './components/PomodoroApp.vue'

export default {
  name: 'App',
  components: {
    PomodoroApp
  }
}
</script>

<style lang="scss">
*{
    box-sizing: border-box;
}
</style>
