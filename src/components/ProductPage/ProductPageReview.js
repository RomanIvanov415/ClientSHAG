import React, { Component } from 'react'

export default class ProductPageReview extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='product-page__a-review a-review'>
                <div className='a-review__title'>Анна</div>
                <div className='a-review__data'>
                    <div className='a-review__date'>03.03.2021</div>
                    <div className='a-review__appraisal'><div className='icon-star'></div><div className='a-review__appraisal-score'>4 / 5</div></div>
                </div>
                <div className='a-review__value'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className='a-review__images'>
                    <div className='a-review__image'><img src='https://static-sl.insales.ru/images/reviews/1/6066/14258/Apple-AirPods-2-Best-Headphone-2.jpg' alt=''></img></div>
                    <div className='a-review__image'><img src='https://static-sl.insales.ru/images/reviews/1/6066/14258/Apple-AirPods-2-Best-Headphone-2.jpg' alt=''></img></div>
                    <div className='a-review__image'><img src='https://static-sl.insales.ru/images/reviews/1/6066/14258/Apple-AirPods-2-Best-Headphone-2.jpg' alt=''></img></div>
                </div>
            </div>
        )
    }
}
