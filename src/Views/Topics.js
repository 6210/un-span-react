import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router"

export const Topics = () => {

    const { slug } = useParams()
    // const url = 'https://api.unsplash.com/topics/wallpapers/photos?client_id=0OoqqYn5_RvvT6fPY_NQjmQQiMyt_JbGOPP_SCU-MsY'
    const url = `https://api.unsplash.com/topics/${slug}/photos?client_id=0OoqqYn5_RvvT6fPY_NQjmQQiMyt_JbGOPP_SCU-MsY`
    const [topic, setTopic] = useState(null)

    console.log(slug);
    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setTopic(response.data)
            })
    }, [url])

    if(topic){
        content =
        topic.map((topic, key) =>
            <div key={topic.id}>
                <div>{topic.id}</div>
                <img src={topic.urls.thumb} alt={topic.urls.description} />
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

export default Topics
