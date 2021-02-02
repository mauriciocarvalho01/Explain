
import { useState } from 'react';
import swal from 'sweetalert';



const initalValues = {
  universidade: false,
  nickName: false,
  password1: false,
  password2: '',
  estudante: '',
  professor: false
}
export default function ContentProfile(props) {

  const [updateUser, setupdateUser] = useState(initalValues);
  const [validPass, setValidPass] = useState(false);
  const [validCategoryUser, setValidcategoryUser] = useState(false);


  const { user } = props;
  const { name, email, image } = user;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setupdateUser({ ...updateUser, [name]: value });

  }

  const handleSubmit = event => {

    const googleProfile = {
      updateData: updateUser,
      googleName: name,
      googleEmail: email,
      googleImage: image
    }
    console.log(googleProfile);

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    swal({
      title: "Sucesso!",
      text: "Seu cadastro foi atualizado!",
      icon: "success",
      button: "Ok!",
    })

    event.preventDefault();
  }


  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header card-header-primary">
                <h4 className="card-title">Editar Perfil</h4>
                <p className="card-category">Complete seu perfil</p>
              </div>
              <div className="card-body">
                <form action="POST">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="bmd-label-floating">Universidade</label>
                        <input type="text" className="form-control" name="universidade" onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Nome de usuário</label>
                        <input type="text" className="form-control" name="nickName" onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">E-mail</label>
                        <input type="email" className="form-control" name="email" value={email} disabled />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Nome</label>
                        <input type="text" className="form-control" name="nome" value={name ? name.split(" ")[0] : " "} disabled />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Sobrenome</label>
                        <input type="text" className="form-control" name="sobrenome" value={name ? name.split(" ")[1] : " "} disabled />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Senha</label>
                        <input type="password" className="form-control" name="password1" onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="bmd-label-floating">Confimar Senha</label>
                        <input type="password" className="form-control" name="password2" onChange={handleChange} required />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-check">
                        <label className="form-check-label">
                          Estudante
                          <input name="estudante" className="form-check-input" type="checkbox" value="E" onChange={handleChange} />
                          <span className="form-check-sign">
                            <span className="check"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check">
                        <label className="form-check-label">
                          Professor
                          <input name="professor" className="form-check-input" type="checkbox" value="P" onChange={handleChange} />
                          <span className="form-check-sign">
                            <span className="check"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary pull-right" onClick={handleSubmit}>Alterar Perfil</button>
                  <div className="clearfix"></div>
                </form>
              </div>
            </div>
            {
              // !validPass ?
              //   <div className="alert alert-warning">
              //     <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              //       <i className="material-icons">close</i>
              //     </button>
              //     <span>
              //       <b> Atenção - </b> As senhas não são iguais</span>
              //   </div>
              //   : false
            }
            {/* {
              checked ? true :
                <div className="alert alert-warning">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Atenção - </b> Você não pode ter uma conta Estudante e Professor, sugiro criar uma outra conta.</span>
                </div>
            } */}
          </div>
          <div className="col-md-4">
            <div className="card card-profile">
              <div className="card-avatar">
                <a href="javascript:;">
                  <img className="img" src={image} />
                </a>
              </div>
              <div className="card-body">
                <h6 className="card-category text-gray">CEO / Co-Founder</h6>
                <h4 className="card-title">{name}</h4>
                <p className="card-description">
                  Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                <a href="javascript:;" className="btn btn-primary btn-round">Follow</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}