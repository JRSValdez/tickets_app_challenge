import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/actions/auth";
import { IUserCredentials } from "../utils/interfaces";
import type { AppDispatch } from "../redux/actions/auth";

import { Card, Form } from "react-bootstrap";
import {
  MainContainer,
  RoundedButton,
  RoundedInputText,
} from "../components/common";
import ReactLoading from "react-loading";

const initialState: IUserCredentials = {
  email: "",
  password: "",
};

const Login = () => {
  const [userCredentials, setUserCredentials] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let target = e.target;
    setUserCredentials({
      ...userCredentials,
      [target.name]: target.value,
    });
  };

  const handleAuthUser = () => {
    setIsLoading(true);
    dispatch(authUser(userCredentials)).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <MainContainer>
      <div className="d-flex justify-content-center align-items-center">
        <Card style={{ maxWidth: "600px", width: "100%" }}>
          <Card.Header>
            <Card.Title>Login</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>Tickets App Login</Card.Text>
            {isLoading ? (
              <ReactLoading type="cubes" color="#000" />
            ) : (
              <React.Fragment>
                <Form>
                  <Form.Group>
                    <RoundedInputText
                      name="email"
                      title="Email"
                      placeholder="email@example.com"
                      value={userCredentials.email}
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
                <RoundedButton onClick={handleAuthUser} color="primary">
                  Iniciar sesión
                </RoundedButton>
              </React.Fragment>
            )}
          </Card.Body>
        </Card>
      </div>
    </MainContainer>
  );
};

export default Login;
