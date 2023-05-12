<template>
        <v-card
            title="Settings"
            subtitle="Enter number of minutes"
            color="basil"
            flat
          >
          <div>
            <v-sheet color="basil" width="300" class="mx-auto">
              <v-card-text>
              <div v-for="(timer, index) in timers" :key="index">
                <v-text-field
                :label=timer.name
                v-model="updatedTimers[index]"
                />
              </div>
              </v-card-text>
              <v-card-actions>
                <v-btn 
                @click="closeSettings"
                variant="outlined"
                color="error">
                close
                </v-btn>
                <v-btn 
                @click="save(updatedTimers)"
                variant="outlined"
                color="green">
                save
                </v-btn>
              </v-card-actions>
            </v-sheet>
          </div>
          </v-card>
  </template>
  <script>
  
  export default {
    data () {
      return {
        updatedTimers:[]
      }
    },
    methods: {
      closeSettings() {
      this.$emit('close')
    },
    },
    props:["timers","save"],
    mounted() {
      this.updatedTimers=this.timers.map((timer)=>{
        return timer.minutes
      })
    },
     
  }
  
  </script>