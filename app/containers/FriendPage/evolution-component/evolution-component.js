import React, {Component} from 'react';

class EvolutionComponent extends Component {
    render() {

        var evolutions = [
            {imgsrc:require('images/friendicon_online.png')},
            {imgsrc:require('images/friendicon_online.png')},
            {imgsrc:require('images/friendicon_online.png')},
            {imgsrc:require('images/friendicon_online.png')},
        ];

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6" style={{paddingLeft: '0', paddingRight: '0'}}>
                        <div className="container-fluid">
                            <div className="row">
                                {
                                    evolutions.map(function(evo) {
                                        return (
                                            <div className="col-xs-6" style={{paddingLeft: '0'}}>
                                                <img src={evo.imgsrc}
                                                        style={{width:'3vw', height:'3vw'}} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EvolutionComponent;