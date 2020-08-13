import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';

import BreadCamb from '../../components/UI/BreadCamb/BreadCamb';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject, checkValidity } from '../../shared/utility';
//import { withLocalize, Translate } from 'react-localize-redux';
import translations from '../../translations/login.json';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(translations)
    this.state = {
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Your Email'
          },
          value: '',
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Full Name'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password'
          },
          value: '',
          validation: {
            required: true,
            minLength: 6
          },
          valid: false,
          touched: false
        }
      },
      isSignup: false
    };
  }



  componentDidMount() {
    window.scrollTo(0, 0)

    if (this.props.authRedirectPath !== '/')
    {
      this.props.onSetAuthRedirectPath(this.props.authRedirectPath);
    }
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      })
    });

    this.setState({ controls: updatedControls });
  };

  submitHandler = event => {
    event.preventDefault();
    const method = this.state.isSignup ? 'signup' : 'signin';
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.controls.name.value,
      method
    );
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls)
    {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let form = formElementsArray.map(formElement => {

      if (!this.state.isSignup && formElement.id === 'name') return null;
      return (<Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        changed={event => this.inputChangedHandler(event, formElement.id)}
        invalid={!formElement.config.valid}
        touched={formElement.config.touched}
        shouldValidate={formElement.config.validation}
      />)
    }
    );

    if (this.props.loading)
    {
      form = <Spinner />;
    }

    let errorMessage = null;
    if (this.props.error)
    {
      errorMessage = <p> {this.props.error.message}</p>;
    }

    let authRedirect = null;
    if (this.props.isAuthenticated)
    {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div>
        <BreadCamb location='Authentication' />
        {authRedirect}
        {errorMessage}

        <div className='login-area ptb-120'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-md-offset-3 text-center'>
                <div className='login'>
                  <div className='login-form-container'>
                    <div className='login-text'>
                      <h2>{this.state.isSignup ? 'Signup' : 'login'}</h2>
                      <span>
                        {this.state.isSignup ? "Please Signup using account detail bellow" :  "Please Signin using account detail bellow"/>}
                      </span>
                    </div>
                    <div className='login-form'>
                      <form onSubmit={this.submitHandler}>
                        {form}
                        <div className='button-box'>
                          <button
                            type='submit'
                            className='default-btn floatright'
                          >
                            {this.state.isSignup ? "Signup" : "Signin"}
                          </button>
                        </div>
                      </form>
                      <div className='button-box'>
                        <button
                          className='default-btn floatright'
                          onClick={this.switchAuthModeHandler}
                        >
                          {this.state.isSignup ? "Switch to Signin" : "Switch to Signup"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, name, method) =>
      dispatch(actions.auth(email, password, name, method)),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
