/*!

=========================================================
* Explain Register Page - v1
=========================================================

* Product Page: http://localhost:3000/cadastro
* Copyright 2020 Mauricio Carvalho

* 

* Coded by Mauricio Carvalho

=========================================================

* 

*/
import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';



// Formulário cadastro

export default function Cadastro() {

  const [loading, setLoading] = useState('');
  const [errorMsg, setErrorMsg] = useState("");



  function notify(not) {
    return "alert alert-" + not;
  }

  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading('warning');
  }

  const handleLoginSuccess = async (response) => {

    try {

      const user = response.profileObj;
      console.log(user);
      const res = await axios.post('http://localhost:3000/api/controllers/cadastro', { data: user });

    } catch (error) {
      console.error("Ocorreu um erro:", error);
      setErrorMsg(error);
    }
  }


  return (
    <main className={styles.main}>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                  <h4 className="card-title">Cadastre-se</h4>
                  <p className="card-category">Cadastre-se normalmente ou use sua conta google</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row" >
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Nome</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Sobre Nome</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="bmd-label-floating">E-mail</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Apelido</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="bmd-label-floating">Senha</label>
                          <input type="password" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <GoogleLogin
                          clientId="603476163070-s50olv0oqrfkcls4eueu4ni4dkf9rq1q.apps.googleusercontent.com"
                          buttonText="Login Google"
                          onSuccess={handleLoginSuccess}
                          onFailure={handleLoginFailure}
                          isSignedIn={setErrorMsg}
                          cookiePolicy={'single_host_origin'}
                          className="btn btn-primary"
                        />
                      </div>
                      <div className="col-md-6">
                        <button type="submit" className="btn btn-primary pull-right">Cadastrar</button>
                      </div>
                    </div>
                    <div className="clearfix" />
                    {loading === 'warning' ? <div class={notify(loading)}>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <i class="material-icons">close</i>
                      </button>
                      <span>
                        <b> {loading}! - </b> Algo errado no registro</span>
                    </div>
                      : null
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
