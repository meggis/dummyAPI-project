 <template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <pre>{{ response }}</pre>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'About',
  data () {
    return {
      response: null
    }
  },
  mounted () {
    this.fetchPizzas()
  },
  methods: {
    async fetchPizzas () {
      this.response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(({ data }) => data)
    }
  }
}
</script>
