<template>
  <view class="wrap">
    <view class="content">
      <text class="text">Hello: {{ username }}</text>
      <button type="default" @click="toIndex" class="btn">toIndex</button>
      <button type="default" @click="changeUsername" class="btn">setUsername</button>
    </view>
    <my-form />
  </view>
</template>

<script>
  import MyForm from '@/components/myForm.vue'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'TestPage',
    components: {
      MyForm
    },
    data() {
      return {}
    },
    onLoad() {
      console.log('process', process.env)
      console.log('process', process.uniEnv.GATEWAY_URL)
    },
    computed: {
      ...mapGetters('User', ['username'])
    },
    methods: {
      ...mapMutations('User', ['setUsername']),
      toIndex() {
        uni.navigateTo({
          url: '../index/index'
        })
      },
      changeUsername() {
        this.setUsername('Mike')
      }
    }
  }
</script>

<style lang="scss">
  .wrap {
    display: block;
    .content {
      margin: 10px 10px;
      .btn {
        color: red;
      }
      .text {
        /*color: $uni-color-success;*/
        margin-right: 30px;
        color: $--color-primary;
      }
    }
  }
  button {
    font-size: 16px;
  }
  /*view {*/
  /*  margin: 100px 100px;*/
  /*}*/
</style>
