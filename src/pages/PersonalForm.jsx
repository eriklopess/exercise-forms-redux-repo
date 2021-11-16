/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import saveInfo from '../redux/actions/actions';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    const { dispatch } = this.props;
    return (
      <>
        <Link to="/professionalform">Professional Form</Link>
        <Link to="/formdisplay">Form Display</Link>
        <fieldset>
          <Input
            label="nome: "
            type="text"
            onChange={ this.handleChange }
            value={ nome }
            name="nome"
            required
          />
          <Input
            label="email: "
            type="text"
            onChange={ this.handleChange }
            value={ email }
            name="email"
            required
          />
          <Input
            label="cpf: "
            type="text"
            onChange={ this.handleChange }
            value={ cpf }
            name="cpf"
            required
          />
          <Input
            label="endereco: "
            type="text"
            onChange={ this.handleChange }
            value={ endereco }
            name="endereco"
            required
          />
          <Input
            label="cidade: "
            type="text"
            onChange={ this.handleChange }
            name="cidade"
            value={ cidade }
          />
          <Select
            defaultOption="Selecione"
            onChange={ this.handleChange }
            value={ estado }
            label="Estado: "
            id="estado"
            name="estado"
            options={ states }
          />
          <Button
            type="button"
            label="Enviar"
            onClick={ () => dispatch(saveInfo(this.state)) }
          />
        </fieldset>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.reducer,
});

export default connect(mapStateToProps)(PersonalForm);
