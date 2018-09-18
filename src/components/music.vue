<template>
  <div class="music">
    <header>
      <div class="m-name">
        {{music.name}}——{{music.singer}}
      </div>

      <div class="m-menu">
        <img @click="showList = true" @ended="next" src="../assets/list.png" alt="">
      </div>
    </header>
    <transition name="fade">
      <div class="musicList" v-show="showList" @click="showList = !showList">
        <div class="listTitle">
          歌曲列表
        </div>
        <div class="m-list">
          <ul>
            <li v-for="(item,index) in MList" @click="getMusic(index)" :key="item.id">
              <div class="listSong">{{item.name}}</div>
              <div class="listSinger">{{item.singer}}</div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <div class="m-body">
      <router-link to='/exp'>哈哈</router-link>
      <h3>{{music.name}}</h3>
      <h4>{{music.singer}}</h4>
      <div class="m-image">
        <div>
          <!-- <audio :src="this.music.url" id="audio" autoplay='autoplay'></audio> -->
          <audio :src="this.music.url" id="audio"></audio>
        </div>
        <img :class="{isPause:isPause,rotate:isRotate}" :src="music.img" alt="">
      </div>
    </div>
    <div class="play">
      <div class="pre" @click="pre"><img src="../assets/backward.png" alt=""></div>
      <div class="pause">
        <img src="../assets/pause.png" v-show="isPlay" alt="" @click="pause">
        <img src="../assets/play.png" v-show="!isPlay" alt="" @click="play">
      </div>
      <div class="next" @click="next"><img src="../assets/forward.png" alt=""></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Exp from '../components/exp';
export default {
  name: 'Music',
  data () {
    return {
      apiUrl: 'http://www.egtch.com/t_works/Vuedata/data.php',
      music: '',
      showList: false,
      id: 0,
      MList: '',
      isPause: false,
      isRotate: false,
      isPlay: false
    }
  },
  components: {
    Exp
  },
  created () {
    this.getMusic(this.id)
  },
  methods: {
    getMusic(p){
      axios.get(this.apiUrl).then((re) => {
        let res = re.data.music;
        this.MList = res;
        if(p>res.length-1){
          p = 0;
        }else if(p<0){
          p = res.length-1;
        }
        this.id = p;
        this.music = res[p];
      })
    },
    pre(){
      this.isRotate = true;
      this.id--;
      this.getMusic(this.id);
    },
    next(){
      this.isRotate = true;
      this.id++;
      this.getMusic(this.id);
    },
    play(){
      let that = this;
      this.isPause = false;
      this.isPlay = true;
      this.isRotate = true;
      document.getElementById('audio').setAttribute('autoplay','autoplay');
      document.getElementById('audio').play();
      //音频播放完 自动进入下一首 ended：返回音频的播放是否已结束
      document.getElementById('audio').addEventListener('ended', function () {  
          // alert('over');
          that.next();
      }, false);
    },
    pause(){
      this.isPause = true;
      this.isPlay = false;
      document.getElementById('audio').pause();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .music{
    width: 100%;
    height: 100%;
  }
  header {
    height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid darkblue;
    background: aliceblue;
    overflow: hidden;
    position: relative;
    z-index: 44;
  }
  .m-name{
    float: left;
    line-height: 50px;
  }
  .m-menu{
    float: right;
  }
  .m-menu img{
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }

  .m-body{
    width: 100%;
    height: 100%;
    padding-top: 20px;
    background: url("../assets/bg.jpg") center no-repeat;
  }
  .musicList {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    top: 50px;
    left: 0;
    z-index: 33;
  }
  .listTitle{
    text-align: center;
    background: #fff;
  }
  .m-list{
    background: #fff;
    height: 365px;
    overflow: scroll;
  }
  .m-list ul{
    padding: 0 20px;
  }
  .m-list ul li{
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
  }
  .listSong{
    float: left;
  }
  .listSinger{
    float: right;
  }
  h3,h4{
    text-align: center;
    line-height: 38px;
  }
  h3{
    font-size: 32px;
  }
  h4{
    font-size: 22px;
  }
  .m-image{
    display: block;
    width: 150px;
    height: 150px;
    margin: 50px auto 0;
    border: 5px solid #000;
    border-radius: 50%;
    overflow: hidden;
  }
  .m-image img{
    width: 100%;
    height: 100%;
  }
  .rotate {
     animation: rotation 20s linear infinite;
   }

  @-webkit-keyframes rotation {
    from {
      transform: rotate(0deg)
    }
    to {
      -webkit-transform: rotate(360deg)
    }
  }
  .play{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 35;
    width: 100%;
    height: 200px;
    border-top: 3px solid #f99;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
  .pre img{
    width: 40px;
    height: 40px;
    position: absolute;
    left: 35px;
    top: 60px;
  }
  .next img{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 35px;
    top: 60px;
  }
  .pause img{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    left: 0;
    top: 60px;
    margin: auto;
  }
  .fade-enter-active,.fade-leave-active {
    transition: all .5s;
  }

  .fade-enter,.fade-leave-active {
    opacity: 0;
    top: -100%;
  }
  .isPause {
    animation-play-state: paused !important;
  }
</style>
