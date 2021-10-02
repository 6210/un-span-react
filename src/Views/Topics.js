import React, { useState, useEffect } from "react"
import { createApi } from "unsplash-js"

const api = createApi({
  accessKey: "0OoqqYn5_RvvT6fPY_NQjmQQiMyt_JbGOPP_SCU-MsY"
});

const Topics = ({ id }) => {

    const [data, setTopicResponse] = useState(null);

    useEffect(() => {
        api.topics.getPhotos({ 
            topicIdOrSlug: 'wallpapers', 
            orientation: "landscape", 
            perPage: "5"
        })
        .then((topic) => {
            console.log(topic);
            setTopicResponse(topic);
        })
        .catch(() => {
            console.log("something topic related went wrong!");
        });
    }, []);
    
    if (data === null) {
        return <div>Loading...</div>;
    } 

    else {
        return (
        <div>
            <h4>/ Home</h4>
            {data.response.results.map((topic) => (
                <div key={topic.id}>
                    <div>{topic.Title}</div>
                    <div>{topic.id}</div>
                    <div key={topic.id}>
                        <img src={topic.urls.thumb} />
                    </div>
                </div>
            ))}
        </div>
        );
    }
}

export default Topics
