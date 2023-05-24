import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import ChooseMusic from "./pages/ChooseMusic";
import Home from "./pages/Home";
import StudyLive from "./pages/StudyLive";
import VideoPage from "./components/VideoPage";
import { routes } from "./utils/MainUtils";


function App() {
  const renderRoutes = () =>
    routes.map(({ path, genre, title }, index) => (
      <Route
        key={index}
        exact
        path={path}
        render={() => (
          <div className="main-music-container">
            <Sidebar />
            <VideoPage genre={genre} title={title} />
          </div>
        )}
      />
    ));

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/choose-music">
          <ChooseMusic />
        </Route>
        <Route exact path="/study-live">
          <StudyLive />
        </Route>
        {renderRoutes()}
      </Switch>
    </div>
  );
}

export default App;
