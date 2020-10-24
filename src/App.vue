<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style src="./resets/normalize.css"/>
<style src="./resets/reset.css"/>
<style src="./resets/typography.css"/>
<style src="./animations/rotate3d.css"/>

<style>
    body { 
      background-color: #222223;
    }
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    .layout-1200 {
      position: relative;
      width: 1200px;
      margin: 0 auto;
    }
    .pointer:hover {
      cursor: pointer;
    }
    .push:active {
      transform: scale(0.98);
    }
    .white-on-hover:hover {
      transition-duration: 300ms;
      color: white !important;
    }
    .button-hover:hover {
      transition-duration: 300ms;
      color: #232323 !important;
      background-color: #BFAB64 !important;
    }
</style>
