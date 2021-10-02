import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Topics = () => {
    const { slug } = useParams()
    const url = `https://api.unsplash.com/topics/wallpapers/?client_id=0OoqqYn5_RvvT6fPY_NQjmQQiMyt_JbGOPP_SCU-MsY`
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
            <div>
                <h1>{topics.title}</h1>
            </div>
        )
    };


    return (
        <div>
        <h3>List Images in a topic</h3>
        {content}
    </div>
    )
}
Í
export default Topics
