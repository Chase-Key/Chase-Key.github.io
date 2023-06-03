<template>
  <header>
  </header>
  <body>
    <div class="container">
      <div class="bubbles">
        <span style="--i:11;"></span>
        <span style="--i:12;"></span>
        <span style="--i:24;"></span>
        <span style="--i:10;"></span>
        <span style="--i:14;"></span>
        <span style="--i:23;"></span>
        <span style="--i:18;"></span>
        <span style="--i:16;"></span>
        <span style="--i:19;"></span>
        <span style="--i:20;"></span>
        <span style="--i:22;"></span>
        <span style="--i:25;"></span>
        <span style="--i:18;"></span>
        <span style="--i:21;"></span>
        <span style="--i:15;"></span>
        <span style="--i:13;"></span>
        <span style="--i:26;"></span>
        <span style="--i:17;"></span>
        <span style="--i:13;"></span>
        <span style="--i:28;"></span>
        <span style="--i:9;"></span>
      </div>
    </div>
    <div class="cards">
      <MainCard/>
      <ProjectCard/>
    </div>
    
  </body>
</template>

<script setup>
import MainCard from './components/MainCard.vue'
import ProjectCard from './components/ProjectCard.vue'
</script>

<style scoped>
.cards {
  top: -900px;
  z-index: 10;
  position: relative;
  margin-bottom: 0;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  background-color: #0c192c;
  overflow: hidden;
}
.container {
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  z-index: 0;
}
.bubbles {
  position: relative;
  display: flex;
}
.bubbles span {
  position: relative;
  width: 30px;
  height: 30px;
  background: #4fc3dc;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #4fc3dc44,
  0 0 50px #4fc3dc,
  0 0 100px #4fc3dc;
  animation: animate 15s linear infinite;
  animation-duration: calc(125s / var(--i));
}
.bubbles span:nth-child(even){
  background: #514fdc;
  box-shadow: 0 0 0 10px #ff2d7544,
  0 0 50px #514fdc,
  0 0 100px #514fdc;
}
@keyframes animate {
  0%{
    transform: translateY(100vh) scale(0);
  }
  100%{
    transform: translateY(-10vh) scale(1);
  }
}
</style>
