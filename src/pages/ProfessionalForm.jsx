/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { saveProfessionalInfo } from '../redux/actions/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    const { dispatch } = this.props;
    return (
      <>
        <Link to="/">Form</Link>
        <Link to="/formdisplay">Form Display</Link>
        <fieldset>
          <TextArea
            label="Resumo do currículo: "
            value={ curriculo }
            name="curriculo"
            maxLength="1000"
            onChange={ this.handleChange }
            required
          />
          <Input
            label="Cargo:"
            name="cargo"
            type="text"
            value={ cargo }
            onChange={ this.handleChange }
            required
          />
          <TextArea
            label="Descrição do cargo: "
            name="descricao"
            maxLength="500"
            onChange={ this.handleChange }
            value={ descricao }
            required
          />
          <Button
            label="enviar"
            onClick={ () => dispatch(saveProfessionalInfo(this.state)) }
          />
        </fieldset>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.reducer,
});

export default connect(mapStateToProps, null)(ProfessionalForm);
