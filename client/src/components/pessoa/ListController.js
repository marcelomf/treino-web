import swal from 'sweetalert2'

export default {
  name: 'pessoa-list',
  async created () {
    try {
      let response = await this.$http.get("/pessoa")
      this.pessoas = response.data
    } catch(err) {
      console.log(err)
    }
  },
  data () {
    return {
      pessoas: []
    }
  },
  methods: {
    editar(idPessoa) {
      this.$router.push({path: `/form/${idPessoa}`})
    },
    async remover(idPessoa) {
      try {
        let response = await this.$http.delete(`/pessoa/${idPessoa}`)
        swal(response.data.msg)
        .then(async (result) => {
          response = await this.$http.get("/pessoa")
          this.pessoas = response.data
        })
      } catch(err) {
        console.log(err)
      }
    }
  }
}