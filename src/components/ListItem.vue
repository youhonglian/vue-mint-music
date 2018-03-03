<template lang="html">
  <div class="typewrap">
        <div class="type-title">全球榜</div>
        <ul class="typelist-ul3">
            <li v-for="data in typelist2" key="data.id">
                <router-link to='{name:"musiclist", params:{id:data.id}}'>
                    <img :src="data.src" class="typelist-img">
                    <p class="typelist-updatetime">{{data.updatetime}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
           typelist2: [
        {
          'id': '71385702',
          'src': 'http://p3.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=150y150',
          'title': 'ACG音乐榜',
          'updatetime': '每周四更新'
        },
        {
          'id': '71384707',
          'src': 'http://p4.music.126.net/BzSxoj6O1LQPlFceDn-LKw==/18681802069355169.jpg?param=150y150',
          'title': '古典音乐榜',
          'updatetime': '每周四更新'
        }
      ] 
        }
    }
}
</script>

<style lang="css">
</style>