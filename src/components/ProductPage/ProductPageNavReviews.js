import React, { Component } from 'react'
import ProductPageReview from './ProductPageReview'

export default class ProductPageNavReviews extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='product-page__reviews-nav-point'>
                <div className='product-page__reviews-container'>
                    <ProductPageReview/>
                    <ProductPageReview/>
                    <ProductPageReview/>
                    <div className='product-page__show-more-reviews'><div className='product-page__show-more-reviews-button icon-down-arrow'>Показать больше</div></div>
                </div>
                <div className='product-page__review-form'>
                    <div className='product-page__review-form-title'>Оставьте отзыв</div>
                    <div className='product-page__contact-forms'>
                        <div className='product-page__name-form'><label className='product-page__name-form-label'>Имя</label><input className='product-page__name-form-input' type='text' placeholder='Иванов Иван'/></div>
                        <div className='product-page__email-form'><label className='product-page__email-form-label'>Email</label><input className='product-page__name-form-input' type='text' placeholder='ex@mail.ru'/></div>
                    </div>
                    <div className='product-page__main-form'><label className='product-page__main-form-label'>Текст отзыва</label><textarea className='product-page__main-form-input'></textarea></div>
                    <div className='product-page__additional-options'>
                        <div className='product-page__select-an-image'>
                            <div className='product-page__select-an-image-label'>Прикрепить изображение</div>
                            <label className='product-page__select-an-image-input' for='product-page__select-an-image-input-core'>
                                <input type='file' id='product-page__select-an-image-input-core'/>
                                <div className='product-page__choose-message'>Выберете файл</div>
                            </label>
                        </div>
                        <div className='product-page__review-form-appraisal'>
                            <input id='product-page__fifth-star' type='radio' name='product-page__start' value='5'/><label className='product-page__review-form-appraisal-star icon-star' for='product-page__fifth-star'></label>
                            <input id='product-page__fourth-star' type='radio' name='product-page__start' value='4'/><label className='product-page__review-form-appraisal-star icon-star' for='product-page__fourth-star'></label>
                            <input id='product-page__third-star' type='radio' name='product-page__start' value='3'/><label className='product-page__review-form-appraisal-star icon-star' for='product-page__third-star'></label>
                            <input id='product-page__second-star' type='radio' name='product-page__start' value='2'/><label className='product-page__review-form-appraisal-star icon-star' for='product-page__second-star'></label>
                            <input id='product-page__first-star' type='radio' name='product-page__start' value='1'/><label className='product-page__review-form-appraisal-star icon-star' for='product-page__first-star'></label>
                        </div>
                    </div>
                    <button type='submit' className='product-page__submit-review'>Отправить отзыв</button>
                </div>
            </div>
        )
    }
}
