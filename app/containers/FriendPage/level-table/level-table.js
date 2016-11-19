import React, {Component} from 'react';
import Slider from 'react-slick';
import BlankComponent from 'components/blank-component';

class LevelTable extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }

    next() {
        this.refs.slider.slickNext()
    }
    previous() {
        this.refs.slider.slickPrev()
    }

    render() {

        var levels = [
            {name: 'Fire breath', level: 7, imgsrc:require('images/fire.png')},
            {name: 'Magic', level: 4, imgsrc:require('images/magic.png')},
            {name: 'Disappearance', level: 2, imgsrc:require('images/disappearence.png')},
            {name: 'Flying', level: 1, imgsrc:require('images/flying.png')}
        ];

        var carouselSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: (<BlankComponent />),
            prevArrow: (<BlankComponent />),
            vertical: true,
        };

        return (
            <div>
                <Slider ref="slider" {... carouselSettings}>
                    {
                        levels.map(function(level) {
                            return (
                                    <div style={{height: '2.5vw'}}>
                                        <div style={{float: 'left', width: '3vw', display: 'flex', justifyContent: 'center'}}><img src={level.imgsrc} /></div>
                                        <div style={{float: 'left', paddingLeft: '1vw'}}>{level.name}</div>
                                        <div style={{float: 'right'}}>{level.level}</div>
                                    </div>
                            );
                        })
                    }
                </Slider>
                <i className="fa fa-angle-down" aria-hidden="true"
                    style={{fontSize: '4vw', color:'#A9C147', display: 'flex', justifyContent: 'center'}}
                    onClick={this.next.bind(this)}></i>
            </div>
        );
    }
}

export default LevelTable;