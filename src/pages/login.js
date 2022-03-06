import "./style.css";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api/index";
import { useNavigate } from "react-router-dom";
import { useAcesso } from "../../context/AdminContext";
import { useUsuario } from "../../context/UsuarioContext";
import {
  Snackbar,
  
} from "@material-ui/core";

import MuiAlert from "@material-ui/lab/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const history = useNavigate();
    const {user, setUser } = useUsuario();

  const { acesso, setAcesso } = useAcesso();
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const [alertMensagem, setAlertMensagem] = useState({
    mensagem: null,
    cor: null,
  });
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      history("/")
    }
     

  })

  function cadastro() {
    history("/cadastro");
  }

  async function logar() {
    try {
      var { headers } = await api.post(`/login`, {
        email: usuario.email,
        senha: usuario.senha,
      });
      console.log(headers.authorization);
      localStorage.setItem("token", headers.authorization);
      getUsuario();
    } catch {
      setAlertMensagem({ mensagem: "Usuario Invalido!!", cor: "error" });
      handleClick();
      setUsuario({ email: "", senha: "" });
    }
  }

  async function getUsuario() {
    try {
      var { data } = await api.get(`/usuarios/email?value=${usuario.email}`);

      console.log(data);

      //se for nulo é um usuario
      if (data.acess == null) {
        localStorage.setItem("usuario", JSON.stringify(data));
        localStorage.setItem("acesso", data.acess);
        console.log("Voce se conectou na conta de Cliente");
        setUser(data)
        setAcesso(data.acess);
        history("/");

        // setAcesso(data.acesso);
      } else {
        localStorage.setItem("usuario", JSON.stringify(data));
        localStorage.setItem("acesso", data.acess);
        setUser(data)
        setAcesso(data.acess);
        history("/adm");
        console.log("oi adm")
      }
    } catch {
      alert("deu ruim");
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="loginContainer">
      <div className="segundoContainer">
        <h1 className="titulo">Login</h1>
        <form
          className="inputContainer"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(usuario);
            logar();
          }}
        >
          <label className="label">
            E-mail
            <input
              type="email"
              className="input"
              value={usuario.email}
              onChange={(e) => {
                setUsuario((prevState) => {
                  return { ...prevState, email: e.target.value };
                });
              }}
            />
          </label>
          <label className="label">
            Senha
            <input
              type="password"
              className="input"
              value={usuario.senha}
              onChange={(e) => {
                setUsuario((prevState) => {
                  return { ...prevState, senha: e.target.value };
                });
              }}
            />
          </label>
          <button className="button" type="submit">
            Logar
          </button>

          <div className="buttonContainer">
          <p className="texto" onClick={() =>cadastro()}>ainda não tem uma conta? Cadastre-se </p>
          </div>
        </form>
      </div>


      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertMensagem.cor}
          sx={{ width: "100%" }}
        >
          {alertMensagem.mensagem}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;