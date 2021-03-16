import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/index";
import { IAuth } from "../../utils/interfaces";
import { Route, Redirect } from "react-router-dom";

interface IProtectedPageProps {
  children: JSX.Element;
  exact: boolean;
  path: string;
}

const ProtectedPage = ({
  children,
  exact = true,
  path,
}: IProtectedPageProps) => {
  const authState = useSelector((state: RootState): IAuth => state.auth);
  return (
    <Route
      exact={exact}
      path={path}
      render={({ location }) =>
        authState.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedPage;
