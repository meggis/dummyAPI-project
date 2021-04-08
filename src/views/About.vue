 <template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p>Your activity for today: {{ response }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'About',
  data () {
    return {
      response: null,
    }
  },
  mounted () {
    this.fetchApi()
    console.log(this.$header)
  },
  methods: {
    async fetchApi () {
      this.response = await axios.get('https://dummyapi.io/data/api/user', { headers: this.$headers }).then(({data}) => data)
    }
  }
}
</script>