import React, { Component } from 'react'
import 'reacty-youtube-playlist/dist/styles'

class YoutubePlaylistVD extends Component
{
    render () {
        return (
            <YouTubePlaylist
                width={'85%'}
                height={390}
                api_key='AIzaSyCbLdDIg0g6NfYeczVK4fF4zBJlak2M0YM'
                playlist_id='RDtt2k8PGm-TI'
                show_thumbnails
            />
        )
    }
}

export default YoutubePlaylistVD;
