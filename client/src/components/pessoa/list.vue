<template>
  <div class="list">
    <h1>Listagem de pessoas</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Email</th>
          <th scope="col">Endereço</th>
          <th scope="col">Sexo</th>
          <th scope="col">Ativo</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pessoa in pessoas" :key="pessoa.id">
          <th scope="row">{{ pessoa.id }}</th>
          <td>{{ pessoa.nome }}</td>
          <td>{{ pessoa.email }}</td>
          <td>{{ pessoa.endereco }}</td>
          <td>{{ pessoa.sexo }}</td>
          <td>{{ pessoa.ativo }}</td>
          <td><button type="button" class="btn btn-primary" @click="editar(pessoa.id)">Editar</button> | <button type="button" class="btn btn-primary" @click="remover(pessoa.id)">Remover</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script src="./ListController.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
