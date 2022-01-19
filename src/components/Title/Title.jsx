import React from 'react'
import './Title.scss'

const Title = ({tagName: Tag, children, modClass}) =>
    <Tag className={`s-title ${modClass}`}>{children}</Tag>

export default Title
