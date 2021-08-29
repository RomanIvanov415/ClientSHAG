import React, { Component } from 'react'
import slide0 from '../assets/img/rastr/slide0.jpg'
import slide1 from '../assets/img/rastr/slide1.jpg'
import slide2 from '../assets/img/rastr/slide2.jpg'
import slide3 from '../assets/img/rastr/slide3.jpg'
import slide4 from '../assets/img/rastr/slide4.jpg'

export default class Slider extends Component {
    constructor(props){
        super(props)
        this.state = {
            shownPicture: 0,
        }
        this.nextSlide = this.nextSlide.bind(this)
        this.lastSlide = this.lastSlide.bind(this)
    }
    slides = [
        {
            img: slide0,
            id: 0,
        },
        {
            img: slide1,
            id: 1,
        },
        {
            img: slide2,
            id: 2,
        },
        {
            img: slide3,
            id: 3,
        },
        {
            img: slide4,
            id: 4,
        },
    ]
    nextSlide(){
        const sp = this.state.shownPicture
        this.state.shownPicture === 4 ? this.setState({shownPicture: 0}) : this.setState({shownPicture: sp + 1})
    }
    lastSlide(){
        const sp = this.state.shownPicture
        this.state.shownPicture === 0 ? this.setState({shownPicture: 4}) : this.setState({shownPicture: sp - 1})
    }
    render() {
        return (
            <div className='slider'>
                <div className='slider__left-arrow icon-down-arrow' onClick={this.lastSlide}>
                </div>
                <div className='slider__pictures'>
                    {this.slides.map((slide) =>{
                        return(
                        <div className='slider__picture' key={slide.id} style={{
                            backgroundImage: `url(${slide.img}`,
                            transform: this.state.shownPicture === slide.id ? 'scale(1)' : 'scale(0)'                        
                        }}></div>
                        )
                    })}
                </div>
                <div className='slider__nav' style={{
                    left: `calc(50% - ${(this.slides.length * 8)}px)`
                }}>
                {this.slides.map((slide) =>{
                        return(
                        <div className='slider__nav-point' key={slide.id} style={{
                            backgroundColor: this.state.shownPicture === slide.id ? 'rgb(0, 75, 214)': '#6d6d6d'                   
                        }}></div>
                        )
                    })}
                </div>
                <div className='slider__right-arrow icon-down-arrow' onClick={this.nextSlide}></div>
            </div>
        )
    }
}
