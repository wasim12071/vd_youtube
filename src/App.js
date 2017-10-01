import React, { Component } from 'react';
import NavBar from './NavBar';
import ReactPlayerVD from "./ReactPlayer.jsx";
import Playlist from "./Playlist";

class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state= {
            UrlList: [],
            name: "",
            description: "",
            Channel: "",
            url: ""
            }
    }

    setPlaylist = (e) =>
    {
        this.setState({UrlList:e.items});
        console.log(e.items);
    };


    playThis =(e) =>
    {
        let url = `https://www.youtube.com/watch?v=${e.contentDetails.videoId}`;
        let name = e.snippet.title;
        let description = e.snippet.description;
        this.setState({url,name,description});
    };


  render() {
      var player;

      var playerSize;

      var listSize;

      if(this.state.url)
      {
          player = <ReactPlayerVD getState={this.state}/>;
          playerSize = "col-8";
          listSize = "col-4 d-flex flex-column justify-content-center align-content-center";
      }
      else
      {
          playerSize = "col-12";
          player = <div></div>;
          listSize = "col-12 d-flex flex-column justify-content-center align-content-center";
      }
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row mainContent">

              <div id="VideoPlayer" className={playerSize}>
                  {player}
              </div>
              <div className={listSize}>
                  <Playlist setList={this.setPlaylist} getPlayList={this.state.UrlList}  selectThis={this.playThis} />
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
