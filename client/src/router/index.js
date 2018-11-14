import Vue from 'vue'
import Router from 'vue-router'
import PessoaList from '@/components/pessoa/list'
import PessoaForm from '@/components/pessoa/form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'pessoa-list',
      component: PessoaList
    },
    {
      path: '/form',
      name: 'pessoa-form',
      component: PessoaForm
    },
    {
      path: '/form/:id',
      name: 'pessoa-form',
      component: PessoaForm
    }
  ]
})
