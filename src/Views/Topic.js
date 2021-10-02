import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { createApi } from "unsplash-js"

const api = createApi({
  accessKey: "0OoqqYn5_RvvT6fPY_NQjmQQiMyt_JbGOPP_SCU-MsY"
});

const UnsplashApi = ({ topicId }) => {

 const [data, setTopicsResponse] = useState(null);

  useEffect(() => {
    api.topics.list({ perPage: "5", orderBy: "featured" })
    .then((topics) => { console.log(topics); setTopicsResponse(topics) })
  }, []);
  
  if (data === null) {
    return <div>Loading...</div>;
  } 

  else {
    return (
      <div>
          <h4>/ TOPICS</h4>
          {data.response.results.map((topics) => (
            <div key={topics.id}>
                <h2 className="uk-h2 topic-title">{topics.title}</h2>
                <div key={topics.cover_photo.id}>
                  <img src={topics.cover_photo.urls.small} alt={topics.cover_photo.alt_description}/>
                </div>
                <div>{topics.description.substring(0, 90)}...</div>
                <div>{topics.total_photos}</div>
                <div>Slug: {topics.slug}</div>
                <div>ID: {topics.id}</div>
                <a className="photo-count" href={topics.links.html} target={'blank'}>
                  Link
                </a>
            </div>
          ))}
      </div>
    );
 }
}

export default UnsplashApi
