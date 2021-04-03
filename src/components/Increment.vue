<template>
  <div>
    <h2>简易算器 0000000</h2>
    <div>
      <input type="button" value="-" @click="deHandle({de:5})" />
      <span>{{count}}</span>
      <input type="button" value="+" @click="addHandle" />
      <p>{{num}} HHHHHHHH</p>
      <input
        type="checkbox"
        v-model="toggle"
        v-bind:true-value="a"
        v-bind:false-value="b"
      >
      {{toggle ? toggle : b}}
    </div>
  </div>
</template>

<script>
    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    let calculators = {
        data(){
          return{
            toggle: '',
            a: 'a',
            b: 'b'
          }
        },
      /* computed: mapState({
          num: state => state.count,
          num: 'count',
          num (state) {
            return state.count + 100 
          },
          count: 'count'
      }), */
      // computed: mapState(['count']),
      computed: {
          count () {
            return this.$store.state.calculatorModule.count
          },
          num () {
            return this.$store.getters.filterCount
          }
          // ...mapState(['count']),
          // ...mapGetters({num: 'filterCount'})
      },
      methods: {
        // addHandle () {
        //   this.$store.dispatch('addAction')
        // },
        // deHandle () {
        //   this.$store.commit("deIncrement",{de:5})
        // }
        
        ...mapActions({
            addHandle: 'addAction'
        }),
        ...mapMutations({
            deHandle:'deIncrement'
        })
      }

    }

    export default calculators
</script>
<style>

</style>
