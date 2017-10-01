import React, { Component } from 'react'
import $ from 'jquery';
import ReactPlayer from 'react-player'

class ReactPlayerVD extends Component
{
    render ()
    {
        return(
            <div className="row">
                <div className="col-12">
                    <ReactPlayer
                        url={this.props.getState.url}
                        width = {'100%'}
                        config={{
                            youtube: {
                                playerVars: {
                                    showinfo: 1 ,
                                    controls:1 ,
                                    cc_load_policy: 1,
                                    enablejsapi: 1 ,
                                    iv_load_policy: 0
                                }
                            }
                        }}
                    />
                </div>
                <div className="col-12">
                    <h1>{this.props.getState.name}</h1>
                    <p>{this.props.getState.description}</p>
                </div>
            </div>

        )
    }
}

export default ReactPlayerVD;