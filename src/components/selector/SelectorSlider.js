import React, { useState/*, useEffect*/ } from 'react'
import Nouislider from "nouislider-react";

export default function SelectorSlider(props) {

    const onSlide = (render, handle, value, un, percent) => {
        console.log('render: ', render, 'handle: ',  handle, 'value: ',  value, 'un: ', un, 'percent: ', percent)
    }
    return(
        <div className='selectors__slider price-slider' >
            <Nouislider 
            range={{
                'min': [ 0 ],
                '25%': [ 25 ],
                '50%': [ 50 ],
                '75%': [ 75 ],
                'max': [ 100 ]
            }} 
            start={[20, 80]} 
            connect={true}
            onSlide={onSlide}
            tooltips={[true, true]}
            pips={{
                mode: 'range',
                density: 4,
            }}
            format={{
                from: Number,
                to: function(value) {
                    return (parseInt(value));
                }
            }}
            />
        </div>
    )
}






/*export default function SelectorSlider(props) {
    const pressFirstSlider = (e) => {
        let firstSlider =  document.querySelector('.price-slider__first-slider')
        let startPosition = document.querySelector('.price-slider').getBoundingClientRect().left
        let leight = Math.round(document.querySelector('.selectors__slider').getBoundingClientRect().right - startPosition)
        const pressurePoint = e.clientX - startPosition - Number(firstSlider.style.left.split('')[0])
        document.onmousemove = (e) => {
            setFirstSliderX(
                Math.round(e.clientX - startPosition - pressurePoint + firstSliderX) < 262 ? (   Math.round(e.clientX - startPosition - pressurePoint + firstSliderX) > 0 ? Math.round(e.clientX - startPosition - pressurePoint + firstSliderX) : 0   ): 262
                )
            console.log(firstSliderX)
        }
        document.onmouseup = () => document.onmousemove = document.onmouseup = null
        firstSlider.ondragstart = () => false
    }
    const [firstSliderX, setFirstSliderX] = useState(0)
    return (
        <div className='selectors__slider price-slider'style={{display: props.isOpened ? 'block' : 'none'}}>
                    <div className='price-slider__main-track'></div>
                    <div className='price-slider__painted-track'></div>
                    <div className='price-slider__first-slider' onMouseDown={pressFirstSlider} style={{left: firstSliderX}}><div className='price-slider__core'></div></div>
                    <div className='price-slider__last-slider' ><div className='price-slider__core'></div></div>
        </div>
    )
}*/
