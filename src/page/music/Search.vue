<template>
	<div>
		<div class="photo-index">
			<div class="mint-header is-fixed search-box">
				<div class="is-left" @click="util.comeBackSearch">
					<button class="mint-button mint-button--default mint-button--normal">
						<span class="mint-button-icon">
							<i class="mintui mintui-back"></i>
						</span>
						<label class="mint-button-text">返回</label>
					</button>
				</div>
				<div class="mint-header-title">
					<div class="search-input">
						<input type="text" v-model="keywords" placeholder="请输入内容" @keypress.enter="SearchSub">
					</div>
					<div class="search sub">
						<mt-button type="primary" size="large" @click="SearchSub">搜索</mt-button>
					</div>
				</div>
			</div>
			<div class="warp">
				<div class="musiclist">
					<div class="music" v-for="data in musiclist" key="data.id" :data-id="data.id">
						<router-link :to='{name: "musiclist", params:{id:data.id}}'>
							<div class="music-name">{{data.name}}</div>
							<div class="music-info">{{data.ar.name}} - {{data.al.name}}</div>
							<div class="music-info" v-show="data.alia[0]">{{data.alia[0]}}</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      keywords: '',
      musiclist: []
    }
  },
  mounted() {
    this.isHaveData()
  },
  methods: {
    isHaveData () {
      let musiclist = localStorage.getItem('musicsearchdata');
      if(musiclist) {
        musiclist = JSON.parse(musiclist) 
        this.musiclist = musiclist.musicdata
        // 再次进入搜索页时上一次的记录会在
        this.keywords = musiclist.keywords
      }
    },
    SearchSub () {
      let keywords = this.keywords
      this.util.openIndicator()
      this.axios.post(this.api.music.search + keywords).then((res) => {
        this.util.closeIndicator()
        this.musiclist = res.data.result.songs
        let data = {
          keywords,
          'musicdata': res.data.result.songs
        }
        localStorage.setItem('musicsearchdata', JSON.stringify(data))
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}     
</script>

<style lang="css">
</style>