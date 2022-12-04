import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import ChooseMusic from "./pages/ChooseMusic";
import Home from "./pages/Home";
import LOFIHiphop from "./pages/LOFIHiphop";
import LOFIChill from "./pages/LOFIChill";
import LOFIPiano from "./pages/LOFIPiano";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Profile from "./components/Profile";
import StudyLive from "./pages/StudyLive";
import ClassClassical from "./pages/ClassClassical";
import ClassNeoClassical from "./pages/ClassNeoClassical";
import ClassDarkAcademia from "./pages/ClassDarkAcademia";
import BinauralBeatsRelax from "./pages/BinauralBeatsRelax";
import BinauralBeatsFocus from "./pages/BinauralBeatsFocus";
import BinauralBeatsMotivation from "./pages/BinauralBeatsMotivation";
import NatureSoundsFireplace from "./pages/NatureFireplace";
import NatureSoundsNature from "./pages/NatureNature";
import NatureSoundsRain from "./pages/NatureRain";
import VideoPage from "./components/VideoPage";

const sideBarData = [
  { id: 1, genre: "Lofi chill", path: "/choose-music/lofi-chill" },
  { id: 1, genre: "Lofi chill", path: "/choose-music/lofi-chill" },
  { id: 1, genre: "Lofi chill", path: "/choose-music/lofi-chill" },
  { id: 1, genre: "Lofi chill", path: "/choose-music/lofi-chill" },
  { id: 1, genre: "Lofi chill", path: "/choose-music/lofi-chill" },
  { id: 1, genre: "Lofi chill", path: "/choose-music/lofi-chill" },
];

/*
Should make the API call in a util and pass data to each component instead

Sidebar should be used once.
The other pages should just be rendered with the chosen genre.
The chosen videoPage should be based on the sidebaritems' ID

*/

const testPages = sideBarData.map((item) => (
  <Switch>
    <Route>
      <div></div>
    </Route>
  </Switch>
));

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/choose-music/lofi-chill">
          <div className="main-music-container">
            <Sidebar />
            <VideoPage genre="lofi%20chill" title="Lofi chill" />
          </div>
        </Route>

        <Route exact path="/choose-music/lofi-piano">
          <div className="main-music-container">
            <Sidebar />
            <VideoPage genre="lofi%20piano" title="Lofi Piano" />
          </div>
        </Route>

        <Route exact path="/choose-music/lofi-hiphop">
          <div className="main-music-container">
            <Sidebar />
            <VideoPage genre="lofi%20hiphop" title="Lofi Hip hop" />
          </div>
        </Route>

        <Route exact path="/choose-music-classical-music-classical">
          <div className="main-music-container">
            <Sidebar />
            <VideoPage genre="classicalmusic" title="Classical Music" />
          </div>
        </Route>

        <Route exact path="/choose-music-classical-music-neo-classical">
          <div className="main-music-container">
            <Sidebar />
            <VideoPage genre="neoclassicalmusic" title="Neo Classical" />
          </div>
        </Route>

        <Route exact path="/choose-music-classical-music-dark-academia">
          <div className="main-music-container">
            <Sidebar />
            <VideoPage genre="neoclassicalmusic" title="Neo Classical" />
            <ClassDarkAcademia />
          </div>
        </Route>

        <Route exact path="/choose-music-binaural-beats-relax">
          <div className="main-music-container">
            <Sidebar />
            <BinauralBeatsRelax />
          </div>
        </Route>

        <Route exact path="/choose-music-binaural-beats-focus">
          <div className="main-music-container">
            <Sidebar />
            <BinauralBeatsFocus />
          </div>
        </Route>

        <Route exact path="/choose-music-binaural-beats-motivation">
          <div className="main-music-container">
            <Sidebar />
            <BinauralBeatsMotivation />
          </div>
        </Route>

        <Route exact path="/choose-music-nature-sounds-rain">
          <div className="main-music-container">
            <Sidebar />
            <NatureSoundsRain />
          </div>
        </Route>

        <Route exact path="/choose-music-nature-sounds-nature">
          <div className="main-music-container">
            <Sidebar />
            <NatureSoundsNature />
          </div>
        </Route>

        <Route exact path="/choose-music-nature-sounds-fireplace">
          <div className="main-music-container">
            <Sidebar />
            <NatureSoundsFireplace />
          </div>
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/signin">
          <Signin />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/choose-music">
          <ChooseMusic />
        </Route>

        <Route exact path="/study-live">
          <StudyLive />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
