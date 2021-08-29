import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

export default class BlogArticle extends Component {
    render() {
        return (
            <div className='block-article'>
                <div className='block-article__title'>Заголовок</div>
                <div className='block-article__content'>Содержание статьи блога</div>
                <Link to='/blog/article:1' className='block-article__more-details'>Подробнее</Link>
            </div>
        )
    }
}
