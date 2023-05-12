<template>
<div class="container">
  <div class="row justify-content-md-center my-5">
    <div class="col-8">
      <div 
      class="title col-8 alert alert-info text-center" 
      style="width: 23rem;" role="alert">
        <h3>Calculator</h3>
      </div>
      <div class="card rounded" style="width: 23rem;">
        <div class="screen  text-light">{{ screen }}</div>
        <div class="d-grid gap-2">
          <button @click="clear" id="clear" type="button" class="btn btn-light">clear</button>
        </div>
        <div class="buttons">
          <div class="row">
            <div class="col"><button @click="tape(1)" type="button" class="btn btn-dark btn-lg ">1</button></div>
            <div class="col"><button @click="tape(2)" type="button" class="btn btn-dark btn-lg">2</button></div>
            <div class="col"><button @click="tape(3)" type="button" class="btn btn-dark btn-lg">3</button></div>
            <div class="col"><button @click="tape('+')" type="button" class="btn btn-warning btn-lg">+</button></div>
          </div>
          <div class="row">
            <div class="col"><button @click="tape(4)" type="button" class="btn btn-dark btn-lg">4</button></div>
            <div class="col"><button @click="tape(5)" type="button" class="btn btn-dark btn-lg">5</button></div>
            <div class="col"><button @click="tape(6)" type="button" class="btn btn-dark btn-lg">6</button></div>
            <div class="col"><button @click="tape('-')" type="button" class="btn btn-warning btn-lg">-</button></div>
          </div>
          <div class="row">
            <div class="col"><button @click="tape(7)" type="button" class="btn btn-dark btn-lg">7</button></div>
            <div class="col"><button @click="tape(8)" type="button" class="btn btn-dark btn-lg">8</button></div>
            <div class="col"><button @click="tape(9)" type="button" class="btn btn-dark btn-lg">9</button></div>
            <div class="col"><button @click="tape('x')" type="button" class="btn btn-warning btn-lg">x</button></div>
          </div>
          <div class="row">
            <div class="col"><button @click="tape(0)" type="button" class="btn btn-dark btn-lg">0</button></div>
            <div class="col"><button @click="tape('.')" type="button" class="btn btn-warning btn-lg">.</button></div>
            <div class="col"><button @click="tape('=')" type="button" class="btn btn-warning btn-lg">=</button></div>
            <div class="col"><button @click="tape('/')" type="button" class="btn btn-warning btn-lg">/</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  },
  data() {
    return {
      screen:0,
      result:0,
      num1:'0',
      num2:'',
      oprt:''
    }
  },
  methods: {
    tape(num){
      if(num=='+'||num=='-'||num=='x'||num=='/'||num=='='){
        num!='=' ?this.oprt=num:null
        if (this.num2!=''){
          let num1 = Number(this.num1)
          let num2 = Number(this.num2)
          this.oprt=='+' ?this.result=num1 +num2:null
          this.oprt=='-' ?this.result=num1 -num2:null
          this.oprt=='x' ?this.result=num1 *num2:null
          this.oprt=='/' ?this.result=num1 /num2:null
          this.num1=this.result
            this.screen=this.result
            this.num2=""
          if (num=='=' ) {
            this.oprt='='
          }
        }
        else{
          if (num=='=' ) {
          this.result=Number(this.num1)
          this.screen=this.result
          this.oprt='='
          }
        }

      }
      else{
        if (this.oprt=='' || this.oprt=='=') {
        this.oprt=='=' ? this.num1='':null
         if (num==".") {
           if (!this.num1.indexOf(num) !== -1){
            this.num1+=num
            this.screen=Number(this.num1)
           }
        }
         else{
            this.num1+=num
        this.screen=Number(this.num1)
         }
      }
        else{
          if (num==".") {
           if (!this.num2.indexOf(num) !== -1){
            this.num2+=num
        this.screen=Number(this.num2)
           }
        }
         else{
          this.num2+=num
        this.screen=Number(this.num2)
         }
      }
      }
    },
    clear(){
      this.screen=0
      this.result=0
      this.num1=''
      this.num2=''
      this.oprt=''
    }
  },
}
</script>

<style lang="scss">
.buttons .row .col{
  text-align: center;
 margin: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
button{
  font-weight: bolder;
  }

.buttons{
  padding: 3px 3px;
  background-color: rgb(231, 227, 227);
}
#clear{
  font-size: 20px;
  letter-spacing: 2px;
  &:hover{
    color: rgb(255, 174, 0);
    background-color: white;
  }
}
.screen{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: bolder;
  font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding-left: 5px;
  background-color: #25283D;
}
.title{
  letter-spacing: 2px;
}
.card,.title{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
