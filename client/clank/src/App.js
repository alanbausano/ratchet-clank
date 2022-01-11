import React, { useContext } from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Root from "./componentes/Root/Root";
import ContextoReducerProvider from "./componentes/Contextos/ContextoReducer";
import ContextoDBProvider from "./componentes/Contextos/ContextoDB";
import ContextoModalesProvider from "./componentes/Contextos/ContextoModales";
import ContextoModalNegProvider from "./componentes/Contextos/ContextoModalNeg";
import Login from "./componentes/Login/Login";
import SignUp from "./componentes/Login/SignUp";
import AuthContext from "./componentes/Contextos/ContextoLogin";
import Perfil from "./componentes/Perfil/Perfil";
import LoginMobile from "./componentes/Login/LoginMobile";
import SignUpMobile from "./componentes/Login/SignUpMobile";
import PerfilMobile from "./componentes/Perfil/PerfilMobile";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  const authContxt = useContext(AuthContext);
  const isLoggedIn = authContxt.isLoggedIn;
  return (
    <QueryClientProvider client={queryClient}>
      <ContextoModalNegProvider>
        <ContextoModalesProvider>
          <ContextoReducerProvider>
            <ContextoDBProvider>
              <BreakpointProvider>
                <Router>
                  <Switch>
                    <Route path="/" component={Root} exact />

                    <Route path="/login">
                      <Breakpoint small down>
                        <LoginMobile />
                      </Breakpoint>
                      <Breakpoint medium up>
                        <Login />
                      </Breakpoint>
                      {isLoggedIn && <Redirect to="/" />}
                    </Route>

                    {isLoggedIn && (
                      <Route path="/profile">
                        <Breakpoint small down>
                          <PerfilMobile />
                        </Breakpoint>
                        <Breakpoint medium up>
                          <Perfil />
                        </Breakpoint>
                      </Route>
                    )}

                    {!isLoggedIn && (
                      <Route path="/signup">
                        <Breakpoint small down>
                          <SignUpMobile />
                        </Breakpoint>
                        <Breakpoint medium up>
                          <SignUp />
                        </Breakpoint>
                      </Route>
                    )}

                    <Route path="*">
                      <Redirect to="/" />
                    </Route>
                  </Switch>
                </Router>
              </BreakpointProvider>
            </ContextoDBProvider>
          </ContextoReducerProvider>
        </ContextoModalesProvider>
      </ContextoModalNegProvider>
    </QueryClientProvider>
  );
}

export default App;
