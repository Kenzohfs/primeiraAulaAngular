import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  name = '';
  surname = '';
  birthdate = '';

  ngOnInit() {
  }

  alertarNome() {
    alert(this.name + ' ' + this.surname);
  }

  lista = [];

  cadastrar() {
    let formulario = {
      nome: this.name,
      sobrenome: this.surname,
      dataNascimento: this.birthdate
    }

    this.lista.push(formulario);

    this.limparFormulario()
  }

  limparFormulario() {
    this.name = '';
    this.surname = '';
    this.birthdate = '';
  }

  selectPerson(personData, indexPerson) {
    this.name = personData.nome;
    this.surname = personData.sobrenome;
    this.birthdate = personData.dataNascimento;

    this.lista.splice(indexPerson, 1);
  }

  deletePerson(indexPerson) {
    this.lista[indexPerson].deleted = true;
  }

  restorePerson(indexPerson) {
    delete this.lista[indexPerson].deleted;
  }

  /*
  getListPerson() {
    return this.lista.filter(o => o.deleted != true);
  }

  getDeletedListPerson() {
    return this.lista.filter(o => o.deleted == true);
  }
  */
}
