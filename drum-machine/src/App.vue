<template>
<div id="app">
<i-container>
    <i-row class="_margin-top:4 " >
      <i-column xs="6" offset="3" class="_border _padding:1">
        <div class="d-flex justify-content-between">
          <div>
          <label for="power">Power</label>
        <i-toggle id="power" 
        v-model="toggled"
        @click="powerOff"/>
        </div>
        <div class="w-25">
          <label for="customRange" class="form-label">Volume</label>
          <input v-model="volume" type="range" class="form-range" id="customRange" min="0" max="5" step="1">
        </div>
        <div  class="_border _border-color:primary _margin-left:1 _padding-x:1 ">
          <i class="fa fa-music" style="font-size:48px;color:black"> {{name}}</i>
        </div>
        </div>
      </i-column>
      <i-column xs="6" offset="3" class="_border _padding:1 _margin-top:1">
          <div class="row boxRow">
            <div 
            :class="[{'button-disable': !toggled}, 'box _border']"
            @click="play(song)" 
            v-for="song in clips" :key="song.name">
              {{ song.name }}
              {{ song.icon }}
        </div>
          </div>
      </i-column>
    </i-row>
    </i-container>
</div>
</template>

<script>
import clips from './clips.js'
console.log(clips);
export default {
  name: 'App',
  components: {
   
  },
  data() {
    return {
      clips,
      name:'Song Name',
      volume:2,
      toggled:true
    }
  },
  methods: {
    play(song){
      if (this.toggled) {
        let audio =new Audio(song.url)
        audio.volume = this.volume / 5
      audio.play()
      this.name=song.name
      }
    },
    powerOff(){
        let boxRow=document.getElementsByClassName("boxRow")[0]
        !this.toggled ?boxRow.style.opacity=0.5 :boxRow.style.opacity=1
    }
  },
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}
label{
  font-weight: bold;
}
#music_icon{
  border: 1px;
}

.box{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 150px;
  height:150px;
  margin: 20px;
  font-weight: bold;
  /*____*/
  &:hover{
    border: 1px solid red;
  background-color: black;
  color: white;
  cursor: pointer;
  letter-spacing: 2px;
  }
}
.button-disable:hover{
  background-color: white;
  color:  black;
  cursor: not-allowed;
  letter-spacing: normal;
  border: 0px solid rgb(187, 185, 185);
}

.boxRow{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.clips{
  display: none;
}
</style>
