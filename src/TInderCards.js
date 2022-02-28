import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCard.css'
function TInderCards() {

    const [people, setpeople] = useState(
  [      {
        name : 'Elon Musk',
        image : 'https://ichef.bbci.co.uk/news/976/cpsprodpb/5FEF/production/_123295542_hi073181766.jpg'
    },
    {
        name : 'Jeff Bezos',
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/220px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg'
    },
    {
        name : 'Bill Gates ',
        image : 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg'
    },
    ]
    )

    const cardSwiper = (data , name ) =>
    {
        console.log('hello -------',name);
        console.log(data)
    }

    const cardRemoved = () =>
    {

    }
    return (
    <div className='tinderCards' >
         <div className='tinderCard_container'>
             {people.map(( person) =>
             {
                 return (
                <TinderCard 
                 className='swipeCard'
                 key={person.name}
                 preventSwipe={['up' , 'down' ]}
                 onSwipe={(dir) => {cardSwiper(dir,person.name)} }
                 onCardLeftScreen = {() => {cardRemoved()}}
                 >
                 {console.log('--------------------In herer')}
                     <div style={{backgroundImage : `url(${person.image})`} }
                     className='card'>
                        <h3>
                            {person.name}
                        </h3>
                     </div>
                 </TinderCard>
                 )
             })}
         </div>
    </div>
  )
}

export default TInderCards