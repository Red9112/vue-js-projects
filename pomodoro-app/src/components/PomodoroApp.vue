<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">

      <div>
        <h1 class="justify-center font-weight-bold text-h2 text-basil">
        Pomodoro
      </h1>
      <div class="d-flex justify-end mb-6">
         <v-col cols="auto">
       <v-btn 
        @click="showSettings"
        color="dark"  icon="mdi-calendar" size="large">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m388 976-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535L80 456l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669 346l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592 850l-20 126H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410 576q0-29 20.5-49.5T480 506q29 0 49.5 20.5T550 576q0 29-20.5 49.5T480 646Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715 576q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538 348l-14-112h-88l-14 112q-34 7-63.5 24T306 414l-106-46-40 72 94 69q-4 17-6.5 33.5T245 576q0 17 2.5 33.5T254 643l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z"/></svg>
        </v-btn>
      </v-col>
      </div> 
      </div>
    
  <SettingsDialog 
    v-if="toggle"
    :timers="timers"
    :save="save"
    @close="showSettings"
    />
    </v-card-title>

    <v-tabs
      v-if="!toggle"
      v-model="tab"
      bg-color="transparent"
      color="basil"
      grow
    >
    <v-tab
      v-for="(item,i) in items"
      :key="item"
      :value="item"
      @click="setType(i)"
    >
    {{ item }}
    </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item
        v-for="item in items"
        :key="item"
        :value="item"
      >
        <v-card
          v-if="!toggle"
          color="basil"
          flat
        >
            <div class="pomodoro">
              <div class="time">
              <h1 id="countdown">
                {{this.displayTime()}}
              </h1>
              <v-progress-linear 
              height="10"
              color="error" 
              :model-value=this.progressValue>
            </v-progress-linear>
            </div>
          <div class="d-flex justify-center mb-2">
            <v-btn class="ma-1 pa-2" color="info"    @click="start">Start</v-btn>
            <v-btn class="ma-1 pa-2" color="error"   @click="pause">Pause</v-btn>
            <v-btn class="ma-1 pa-2" color="warning" @click="resetTimer">Reset</v-btn>
          </div>
           
            
            </div>
          
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>

  import SettingsDialog from './SettingsDialog.vue'

export default {

components:{
   SettingsDialog
},
  data () {
    return {
      progressValue:0,
      toggle:false,
      timerInterval:null,
      timers:[
      {
          type:0,
          name:"pomodoro",
          minutes:25
        },
        {
          type:1,
          name:"Short Break",
          minutes:5
        },
        {
          type:2,
          name:"Long Break",
          minutes:15
        }
      ],
      type:0,
      minutes: 25,
      seconds: 0,
      isPaused: true,
      tab: 'Appetizers',
      items: [
        'Pomodoro', 'Short Break', 'Long Break',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  mounted() {
    setInterval(this.setProgressBar, 1000)
  },
  methods: {
    save(updatedChanges){
this.timers=this.timers.map((timer,i)=>{
  return {...timer, minutes:parseInt(updatedChanges[i])}
})
this.resetTimer()
this.showSettings()
    },
    setProgressBar(){
      const x= this.timers[this.type].minutes
       this.progressValue=this.minutes*100/x
    },
    showSettings(){
this.toggle=!this.toggle
    },
setType(item){
this.type=item
this.resetTimer()
    },
    resetTimer(){
clearInterval(this.timerInterval);
if(this.type==0)this.minutes=this.timers[0].minutes
else if(this.type==1)this.minutes=this.timers[1].minutes
else if(this.type==2)this.minutes=this.timers[2].minutes

this.seconds = 0;
this.isPaused = true;
},
displayTime(){
return this.minutes.toString().padStart(2, "0")+":"+this.seconds.toString().padStart(2, "0");
},
pause(){
clearInterval(this.timerInterval);
  this.isPaused = true;
},
start(){
  if (this.isPaused) {
    this.timerInterval = setInterval(() => {
    if (this.seconds === 0) {
      if (this.minutes === 0) {
        clearInterval(this.timerInterval);
        alert("Time's up!");
      } 
      else {
        this.minutes--;
        this.seconds = 59;
      }
    } 
    else {
      this.seconds--;
    }
  }, 1000);
  this.isPaused = false;
}
}
  },
}
</script>

<style>

.bg-basil {
background-color: #FFFBE6 !important;
}
.text-basil {
color: #356859 !important;
}
.time{
text-align: center;
margin: 20px;
font-weight: 400;
letter-spacing: 2px;
font-size: 80px;
padding: 5px;
}
</style>

