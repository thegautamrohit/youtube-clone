import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import RecVideos from "./components/RecVideos/RecVideos";

import youtube from "./components/Youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  videoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  async componentDidMount() {
    this.handleSubmit("football");
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCxuoowknjr4T_7E9Gjy36WXGP-Hor_9nA",
        q: searchTerm,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    // console.log(response.data.items);
  };

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <div className="app">
        <Header onFormSubmit={this.handleSubmit} />
        <div className="app__page">
          <Sidebar />
          <RecVideos
            selectedVideo={selectedVideo}
            videos={videos}
            videoSelect={this.videoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
