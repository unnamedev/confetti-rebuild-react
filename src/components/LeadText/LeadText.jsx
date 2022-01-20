import React from 'react'
import './LeadText.scss'

const LeadText = ({children, modClass = ""}) => <p className={`s-lead ${modClass}`}>{children}</p>

export default LeadText
