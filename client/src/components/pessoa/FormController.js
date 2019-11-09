import swal from 'sweetalert2'

export default {
  name: 'pessoa-form',
  async created() {
    if(this.$route.params.id) {
      let response = await this.$http.get(`/pessoa/${this.$route.params.id}`)
      this.pessoa = response.data
    }
  },
  data () {
    return {
      pessoa: {}
    }
  },
  methods: {
    async salvar() {
      try {
        if(this.$route.params.id) {
          let response = await this.$http.put(`/pessoa/${this.$route.params.id}`, this.pessoa)
        } else {
          let response = await this.$http.post("/pessoa", this.pessoa)
        }
        swal('Pessoa salva com sucesso')
        .then((result) => {
          this.$router.push({path: '/'})
        })
      } catch(err) {
        console.log(err)
      }
    }
  }
}