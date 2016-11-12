import React, {Component} from 'react';
import styles from './styles.scss';
import SignInUpButton from 'components/sign-in-up-button/SignInUpButton.js';
import CheckboxWithIcon from 'components/checkbox-with-icon/CheckboxWithIcon.js';
import Slider from 'react-slick';

class BlankComponent extends Component {
    render() {
        return (
            <div />
        );
    }
}

class RegistrationScreen2 extends Component {
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

        var carouselSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: (<BlankComponent />),
            prevArrow: (<BlankComponent />)
        };

        return (
            <div className={["container-fluid", styles.backgroundContainer].join(' ')}>
                <div className="col-xs-8 col-xs-offset-2">
                    <div className={["container", styles.contentContainer].join(' ')}>
                        
                        <div className="row">
                            <div className="col-xs-8 col-xs-offset-2" style={{textAlign: 'center'}}>
                                <h1>Hey %USERNAME%!</h1>
                                <h2>Welcome to your kingdom</h2>
                            </div>
                        </div>

                        <div className="row" style={{display: 'flex', justifyContent: 'center', paddingLeft: '5vw', marginTop: '2vw'}}>
                            <div className="col-xs-2" style={{}}>
                                <CheckboxWithIcon id="option1" name="element"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/male-3-xl.png"/>
                            </div>
                            <div className="col-xs-2" style={{}}>
                                <CheckboxWithIcon id="option2" name="element"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/male-3-xl.png"/>
                            </div>
                            <div className="col-xs-2" style={{}}>
                                <CheckboxWithIcon id="option3" name="element"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/male-3-xl.png"/>
                            </div>
                            <div className="col-xs-2" style={{}}>
                                <CheckboxWithIcon id="option4" name="element"
                                                    imgsrc="http://www.iconsdb.com/icons/preview/purple/male-3-xl.png"/>
                            </div>
                        </div>
                    
                        <div className="row" style={{marginTop: '2vw'}}>
                            <div className="col-xs-8 col-xs-offset-2" style={{textAlign: 'center'}}>
                                Now, choose an egg to hatch
                            </div>
                        </div>

                        <div className="row" style={{display: 'flex', justifyContent: 'center', marginTop: '5em'}}>
                            <div className="col-xs-5">
                                <Slider ref="slider" {... carouselSettings} >
                                    <div style={{textAlign: 'center'}}><h3>1</h3></div>
                                    <div style={{textAlign: 'center'}}><h3>2</h3></div>
                                    <div style={{textAlign: 'center'}}><h3>3</h3></div>
                                    <div style={{textAlign: 'center'}}><h3>4</h3></div>
                                    <div style={{textAlign: 'center'}}><h3>5</h3></div>
                                    <div style={{textAlign: 'center'}}><h3>6</h3></div>
                                </Slider>
                                <img src={require('images/arrowleft.png')} onClick={this.previous.bind(this)} style={{position:'absolute', float: 'left', top: '-1.5em', left: '-2em'}}/>
                                <img src={require('images/arrowright.png')} onClick={this.next.bind(this)} style={{position: 'relative', float: 'right', top: '-5.75em', left: '3em'}}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-5">
                                <SignInUpButton text="Continue" bgcolor="#FECC3B" shadowcolor="#B76E18" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationScreen2;

//style={{position:'absolute', float: 'left', top: '-1.5em'}}
//style={{position: 'relative', float: 'right', top: '-5.75em'}}