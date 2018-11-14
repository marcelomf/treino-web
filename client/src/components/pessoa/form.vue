<template>
  <div class="form">
    <h1>Cadastro de pessoas, {{ pessoa.nome }}</h1>
    <form>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome" v-model="pessoa.nome">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email" v-model="pessoa.email">
      </div>
      <div class="form-group">
        <label for="endereco">Endereço</label>
        <textarea id="endereco" name="endereco" class="form-control" placeholder="Endereço" v-model="pessoa.endereco"></textarea>
      </div>
      <div class="form-group">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="sexo" id="sexom" value="M" v-model="pessoa.sexo">
          <label class="form-check-label" for="sexom">Masculino</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="sexo" id="sexof" value="F" v-model="pessoa.sexo">
          <label class="form-check-label" for="sexof">Feminino</label>
        </div>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="ativo" v-model="pessoa.ativo">
        <label class="form-check-label" for="ativo">Ativo</label>
      </div>
      <button type="button" class="btn btn-primary" @click="salvar()">Salvar</button>
    </form>
  </div>
</template>
<script src="./FormController.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
