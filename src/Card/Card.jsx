import React, { Component } from 'react'
import './Card.css'

const Card = (props) => (
    <div className = "cardBox">
        <div className = "card">
            <div className = "front">
                <div className = "question">
                    {props.question}
                </div>
            </div>
            <div className = "back">
                <div className = "answer">
                    {props.answer}
                </div>
            </div>
        </div>
    </div>
)

export default Card