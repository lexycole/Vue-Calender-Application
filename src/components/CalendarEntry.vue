      <template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input type="text" placeholder="New Event" v-model="inputEntry" required />
      <p class="calendar-entry-day">
        Day of event: <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <a class="button is-primary is-small is-outlined"
        @click="submitEvent(inputEntry)">
        Submit
      </a>
      <p style="color: red; font-size: 13px" v-if="error">
        You must type something first!
      </p>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'CalendarEntry',
  data () {
    return {
      inputEntry: '',
      error: false
    }
  },
  computed: {
    titleOfActiveDay () {
      return store.getActiveDay().fullTitle;
    }
  },
  methods: {
    submitEvent (eventDetails) {
      if (eventDetails === '') return this.error = true;

      store.submitEvent(eventDetails);
      this.inputEntry = '';
      this.error = false;
    }
  }
}
</script>

    <style>
    #calendar-entry {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}

#calendar-entry .calendar-entry-note input {
  width: 200px;
  font-weight: 600;
  border: 0;
  border-bottom: 1px solid #CCC;
  font-size: 15px;
  height: 30px;
  margin-bottom: 10px;
}

#calendar-entry .calendar-entry-note input:focus {
  outline: none;
}

#calendar-entry .calendar-entry-note .calendar-entry-day {
  color: #42b883;
  font-size: 12px;
  margin-bottom: 10px;
  padding-bottom: 5px;
}

#calendar-entry .calendar-entry-note .calendar-entry-day .bold {
  font-weight: 600;
}

#calendar-entry .calendar-entry-note .submit {
  display: block;
  margin: 0 auto;
}
    </style>