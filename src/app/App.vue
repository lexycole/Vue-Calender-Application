  <template>
    <div id="app">
      <img alt="Vue logo" src="../assets/logo.png">
      <CalendarWeek />
      <CalendarEntry />
    </div>
  </template>

  <script>
  import CalendarWeek from '../components/CalendarWeek.vue';
  import CalendarEntry from '../components/CalendarEntry.vue';

  export default {
    name: 'App',
    components: {
      CalendarWeek,
      CalendarEntry
    }
  }
  </script>

  <style>
  html, body {
    height: 100%;
  }
  #app {
  height: inherit;
  background: #6e6e6e;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-justify-content: center;
}
  </style>
