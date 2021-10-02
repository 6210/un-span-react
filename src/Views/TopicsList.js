import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const TopicsList = () => {
    
    const url = 'https://api.unsplash.com/topics?client_id=0OoqqYn5_RvvT6fPY_NQjmQQiMyt_JbGOPP_SCU-MsY'
    const [topics, setTopics] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setTopics(response.data)
            })
    }, [url])

    if(topics){
        content =
        topics.map((topics, key) =>
            <div key={topics.id}>
                <h3>{topics.title}</h3>
                <div>{topics.slug}</div>
            </div>
        )
    };

    return (
        <div>
            <h1>HELLO ####</h1>
            <h3>List Images in a topic</h3>
            {content}
        </div>
    )
}

export default TopicsList
