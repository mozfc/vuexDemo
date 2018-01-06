<template>
  <div class="box">
    <ul class="list">
      <li v-for="item in data" @click="getTitleHandle(item.title)">{{item.title}}</li>
    </ul>

    
    <ul class="listData" style="display:flex; justify-content:space-around; color:#fd635e; cursor: pointer;">
          <li v-for="(item,index) in listData" :key="index" @click="changeHandle(item.title)">{{item.title}}</li>
    </ul> 

  </div>
</template>

<script>
export default {
  props: ['listData'],
  computed:{
    data(){
        return this.$store.state.selectModule.list;
    }
  },
  methods:{
    getTitleHandle(title){
      // 改变vuex中状态
      this.$store.commit("changeTitle", {title})
    },  
    changeHandle (text) {
      this.$emit("changeText", text)
    }
  },
  created(){
    // 获取数据
    this.$store.dispatch('getListAction')
  }
}
</script>
