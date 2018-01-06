<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :is-show.sync="listShow" :texts="text"></select-input>
        <!-- <select-input @isShowHandle="isShow" :texts="text" :isShow="isListShow"></select-input> -->
        <!-- <select-input :is-show="listShow" @update:isShow="val => listShow = val " :texts="text"></select-input> -->
        <list v-show="isListShow" :listData="listData" @changeText="changeText"></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let data = [{"title": "TO"}, {"title": "OO"}, {"title": "MM"}, {"title": "UU"}, {"title": "RR"}, {"title": "DD"}]

export default {
  data(){
      return {
        listShow: false,
        listData: data,
        text: 'GO'
      }
  },
  computed:{
    isListShow(){
      return this.listShow
    }
  },
  methods: {
    changeText (text) {
      this.text = text
    },
    isShow(bool){
      this.listShow = bool
    }
  },
  components: {
    selectInput,
    list
  }
}

</script>
