import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import {
  MainContainer,
  RoundedButton,
  RoundedInputText,
} from "../components/common";

interface IInitialState {
  username: string;
  password: string;
}

const initialState: IInitialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [userCredentials, setUserCredentials] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let target = e.target;
    setUserCredentials({
      ...userCredentials,
      [target.name]: target.value,
    });
  };

  return (
    <MainContainer>
      <div className="d-flex justify-content-center align-items-center">
        <Card style={{ maxWidth: '600px', width:'100%' }}>
          <Card.Header>
            <Card.Title>Login</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>Tickets App Login</Card.Text>
            <Form>
              <Form.Group>
                <RoundedInputText
                  name="username"
                  title="Usuario"
                  placeholder="Usuario"
                  value={userCredentials.username}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <RoundedInputText
                  name="password"
                  title="Contraseña"
                  placeholder="Contraseña"
                  value={userCredentials.password}
                  onChange={handleChange}
                  type="password"
                />
              </Form.Group>
            </Form>
            <RoundedButton color='primary'>Iniciar sesión</RoundedButton>
          </Card.Body>
        </Card>
      </div>
    </MainContainer>
  );
};

export default Login;
