import React from 'react'

export function renderRating(nStars){
    // better way to do this
    let stars=[];

    for(let i = 1 ; i<=nStars ;i++){
        stars.push(i)
    }
 
    return stars.map(star => {
        return (<i key={star}className="fa fa-star"/>)
    })
}