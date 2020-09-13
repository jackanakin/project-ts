import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Go Barber" />

      <form>
        <h1>Faça se logon</h1>

        <Input icon={FiMail} name="email" placeholder="E-mail"></Input>

        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="forget">Esqueci minha senha</a>
      </form>

      <a href="">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background></Background>
  </Container>
);

export default SignIn;
