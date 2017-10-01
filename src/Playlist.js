import React, { Component } from 'react'
import $ from 'jquery';

class Playlist extends Component
{
    componentDidMount()
    {
        $.ajax({
            data: $.extend({
                key: 'AIzaSyCbLdDIg0g6NfYeczVK4fF4zBJlak2M0YM',
            },
                {maxResults:25, playlistId: 'PL9tY0BWXOZFt2TyOofWG0XwA8IDC8SGIN', part: 'snippet,contentDetails'}),
            type: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/playlistItems'
        }).done((data) => {
            this.props.setList(data);
        });
    }


    render ()
    {

        return (

            <div className="row mainList">
                {this.props.getPlayList.map(video =>
                    <div className="col-12 playList" key={video.contentDetails.videoId} onClick = {(e) => this.props.selectThis(video)}>
                        <div className="row">
                            <div className="col-4 padding-1rem ">
                                <img className="img-fluid" width={"100%"} height={'auto'} src={video.snippet.thumbnails.high.url} alt=""/>
                            </div>
                            <div className="col-7">
                                <p className="videoTitle">{video.snippet.title}</p>
                                <p className="videoChannel">{video.snippet.channelTitle}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Playlist;