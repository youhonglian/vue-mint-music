<template lang="html">
  <div class="music-index">
    <div
    class="mint-header is-fixed search-box">
      <div class="is-left">
        <button class="mint-button mint-button--default mint-button-normal">
          <span class="mint-button-icon"></span>
          <label class="mint-button-text">音乐</label>
        </button>
      </div>
      <div class="mint-header-title">
        <div class="search-input">
          <router-link to="/music/search">
            <input type="text" placeholder="搜索喜欢的歌曲">
          </router-link>
        </div>
      </div>
      <div class="search-sub">
        <mt-button type="primary" size="large">
          <router-link to="/user">用户</router-link>
        </mt-button>
      </div>
    </div>
    <div class="wrap">
      <div class="music-banner">
        <mt-swipe :auto="3000">
          <mt-swipe-item
           v-for="data in banner" key="data.id">
            <img :src="data.src">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="typewrap">
      <div class="type-title">音乐特色榜</div>
      <ul class="typelist-ul2">
        <li v-for="data in typelist" key="data.id">
          <router-link 
          :to='{name: "musiclist", params:{id:data.id}}'>
            <img :src="data.src" class="typelist-img">
                <p class="typelist-title">{{data.title}}</p>
                <p class="typelist-updatetime">{{data.updatetime}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <v-listitem></v-listitem>
  </div>
</template>

<script>
import listitem from '@/components/listitem.vue'
export default {
    components: {
        'v-listitem': listitem
    },
    data () {
        return {
            banner: [
                {'id':1, 'src':'http://p4.music.126.net/kXn-DuZHpWUt92wtn-kdJg==/18922595114158461.jpg'},
                {'id':2, 'src':'http://p3.music.126.net/OrppkkA9uzaq7w4m4M0hyQ==/18734578627590227.jpg'},
                {'id':3, 'src':'http://p3.music.126.net/ByeFpfshMXvOjnaiy886ug==/18888510253690479.jpg'},
                {'id':4, 'src':'http://p4.music.126.net/Fnw_tQevNEQFpN0V_Sx_kw==/18917097556020132.jpg'},
  
            ],
            typelist:[
                {
                    'id':'19723756', 
                    'src':'http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150',
                    'title':'飙升榜',
                    'updatetime':'每天更新'
                },
                {
                    'id':'3779629', 
                    'src':'http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=150y150',
                    'title':'新歌榜',
                    'updatetime':'每天更新'
                },
                {
                    'id':'2884035', 
                    'src':'http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=150y150',
                    'title':'原创榜',
                    'updatetime':'每周四更新'
                },
                {
                    'id':'3778678', 
                    'src':'http://p3.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=150y150',
                    'title':'热歌榜',
                    'updatetime':'每周四更新'
                }
            ]
        }
    }
}
</script>

<style lang="css">
    /* 音乐榜 banner  */
.music-banner{
    height: 200px;
}
.music-banner img{
    width: 100%;
    height: 100%;
    float: left;
}
/* 音乐榜分类  */
.typewrap{
    border-bottom: 1px solid #ccc;
}
.type-title{
    font-size: 1.2rem;
    line-height: 1.6rem;
    margin: 0.6rem 0;
    padding: 0 0.6rem;
    border-left: 5px solid red;
}
.typelist-ul2, .typelist-ul3{
    width: 96%;
    height: auto;
    margin: auto;
    overflow: hidden;
}
.typelist-ul2 li, .typelist-ul3 li{
    position: relative;
    float: left;
    height: auto;
    margin: 0.2rem 2% 0.8rem 2%;
}
.typelist-ul2 li{
    width: 46%;
}
.typelist-ul3 li{
    width: 29%;  
}
.typelist-img{
    width: 100%;
}
.typelist-title{
    height: 1.5rem;
    line-height: 1.5rem;
    overflow: hidden;
    font-size: 1rem;
    padding: 0 0.4rem
}
.typelist-updatetime{
    position: absolute;
    left: 0.6rem;
    top: 0.3rem;
    color: #666;
    font-size: 0.8rem;
}
</style>