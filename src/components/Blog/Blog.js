import React, { Component } from 'react'
import BlogArticle from './BlogArticle'

export default class Blog extends Component {
    render() {
        return (
            <div className='blog'>
                <div className='container'>
                    <div className='blog__breadcrumbs'>
                        <a className='blog__breadcrumb'>Главная</a> / <a className='blog__breadcrumb'>Блог</a>
                    </div>
                    <div className='blog__title'>Блог</div>
                    <div className='blog__content'>
                        <div className='blog__card'><BlogArticle/></div>
                        <div className='blog__card'><BlogArticle/></div>
                        <div className='blog__card'><BlogArticle/></div>
                    </div>
                </div>
            </div>
        )
    }
}
