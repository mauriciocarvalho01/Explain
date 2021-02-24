import React, { useState, useEffect } from "react";
import axios from 'axios';
import LinearProgressWithLabel from '../../Utils/Progress';
import ChipNotSinc from '../../Utils/ChipNotSinc';
import ChipSinc from '../../Utils/ChipSinc';
import swal from 'sweetalert'


// Esta dando erro no useEffect quando clica e m sincronizar
export default function SincTable(props) {
  const [url, setUrl] = useState("");
  const [sinced, setSinced] = useState(false);
  const [sinc, setSinc] = useState("Não sincronizado");

  const { user } = props.user;

  const user_name = user ? user.user_name : "";
  const email = user ? user.email : "";
  const image = user ? user.image : "";

  async function getUrl() {
    const res = await axios.get('http://localhost:3000/api/classroom/synchronize/synchro');
    const { status } = res.data;
    if (status === 200) {
      const { url } = res.data;
      setUrl(url);
    }
  }

  function sincronization() {
    swal({
      title: `Deseja sincronizar com o Classroom?`,
      text: `A sincronização pode demorar um pouco`,
      icon: "info",
      buttons: true,
      dangerMode: false,
    })
      .then((willDelete) => {
        if (willDelete) {
          getUrl();
          swal("Sincronização em andamento, esse processo pode demorar um pouco!", {
            icon: "success",
          });
          setSinc("Sincronizando...");
        } else {
          setSinced(false);
          setSinc("Não sincronizado");
          swal("Sincronização Cancelada!");
        }
      });
  }

  if (url) {
    if (typeof window !== 'undefined') {
      window.location.replace(url);
    }
  } else {
    if (typeof window !== 'undefined') {
      var url_atual = window.location.href;
      var bash_one = url_atual ? url_atual.split("=") : url_atual;
      const code = bash_one.length > 1 ? bash_one[1].split("&")[0] : false;

      if (code) {
        async function InitSinc(code) {
          const res = await axios.post('http://localhost:3000/api/classroom/synchronize/synchro',
            { code: code });
          const { status } = res.data;
          if (status === 200) {
            setSinced(true);
            setSinc("Sincronizado");
          }
        }
        InitSinc(code);
      }
    }
  }


  return (
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title ">Sincronizar meu Google Classroom</h4>
                <p class="card-category">Escolha as configurações de sincronização</p>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <th>
                        Sinc
                      </th>
                      <th>
                        Nome
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                        Usuário
                      </th>
                      <th>
                        Status
                      </th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="form-check">
                            <label className="form-check-label">
                              <input checked={sinced} name='sinced' className="form-check-input" type="checkbox" value={sinced} onChange={sincronization} />
                              <span className="form-check-sign">
                                <span className="check"></span>
                              </span>
                            </label>
                          </div>
                        </td>
                        <td>
                          {user_name ? user_name : "Carregando..."}
                        </td>
                        <td>
                          {email ? email : "Carregando.."}
                        </td>
                        <td>
                          Estudante
                        </td>
                        <td>
                          {sinc === "Sincronizando..." ? <LinearProgressWithLabel /> : false}
                          {(!sinced && sinc !== "Sincronizado" && sinc !== "Sincronizando...") ? <ChipNotSinc sinc={sinc} image={image} /> : <ChipSinc sinc={sinc} image={image} />}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}