<template>
  <div id="app">
    <Header/>
    <Main/>
    <News/>
    <Info/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import News from './components/News.vue'
import Info from './components/Info.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    News,
    Info,
    Footer
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
	font-size: 14px;
  line-height: 1.3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background-color: #fff;
}

.container {
  width: 95%;
  flex: 0 0 auto;
  position: relative;
  max-width: 1170px;
  margin: 0 auto;
}

#app {
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 28px;
  color: rgba(32, 53, 56, 1);
  font-weight: 900;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
}
h2 {
  font-size: 20px;
  color: rgba(32, 53, 56, 1);
  font-weight: 700;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
}
h3 {
  font-size: 18px;
  color: rgba(32, 53, 56, 1);
  font-weight: 700;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
}
h4 {
  font-size: 18px;
  color: rgba(32, 53, 56, 0.9);
  font-weight: 600;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
}
h5 {
  font-size: 22px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: -1px;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
}
</style>




