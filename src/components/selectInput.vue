<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        @click="showListHandle"
        :value="title"
      />
      <input type="button" :value="texts" style="color: #fff; font-weight: bold;"> 
      <span></span>
    </div>
</template>

<script>
export default {
  // 简单语法
 /* Vue.component('props-demo-simple', {
    props: ['size', 'myMessage']
  })
  // 对象语法，提供校验
  Vue.component('props-demo-advanced', {
    props: {
      // 检测类型
      height: Number,
      // 检测类型 + 其他验证
      age: {
        type: Number,
        default: 0,
        required: true,
        validator: function (value) {
          return value >= 0
        }
      }
    }
  })*/
  // props:['isShow'],
  props: {
    isShow: Boolean,
    texts: String
  },
  computed:{
    initIshow(){
      return this.isShow
    },
    title(){
        return this.$store.state.selectModule.title
    }
  },
  methods: {
    // showListHandle(){
    //     this.$emit('isShowHandle', !this.initIshow)
    // }

    showListHandle(){
      this.$emit('update:isShow', !this.initIshow)
    }
  }
}
</script>
