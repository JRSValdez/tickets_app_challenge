import React, { useState } from "react";
import { setClientToken } from "../API";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../redux/reducers/index";
import { authUser } from "../redux/actions/auth";
import { IUserCredentials, IAuth } from "../utils/interfaces";
import type { AuthDispatch } from "../redux/actions/types";

import ReactLoading from "react-loading";
import { Card, Form } from "react-bootstrap";
import {
  MainContainer,
  RoundedButton,
  RoundedInputText,
  ErrorAlert,
  CenterContainer,
} from "../components/common";

const initialState: IUserCredentials = {
  email: "",
  password: "",
};

const Login = () => {
  const [userCredentials, setUserCredentials] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch: AuthDispatch = useDispatch();
  const authState = useSelector((state: RootState): IAuth => state.auth);
  let history = useHistory();

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
      history.push("/");
      setIsLoading(false);
    });
  };

  return (
    <MainContainer>
      <CenterContainer>
        <Card style={{ maxWidth: "600px", width: "100%" }}>
          <Card.Header>
            <Card.Title>Login</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>Tickets App Login</Card.Text>
            {isLoading ? (
              <CenterContainer>
                <ReactLoading type="cubes" color="#000" />
              </CenterContainer>
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
                {authState.error ? (
                  <ErrorAlert message={authState.message} />
                ) : null}
              </React.Fragment>
            )}
          </Card.Body>
        </Card>
      </CenterContainer>
    </MainContainer>
  );
};

export default Login;
