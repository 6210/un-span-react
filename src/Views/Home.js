import React, { useState, useEffect } from "react"
import { createApi } from "unsplash-js"
import { Link } from 'react-router-dom'

const api = createApi({
  accessKey: "0OoqqYn5_RvvT6fPY_NQjmQQiMyt_JbGOPP_SCU-MsY"
});

const Home = () => {

 
 const [data, setTopicsResponse] = useState(null);

  useEffect(() => {
    api.topics.list({ perPage: "5", orderBy: "featured" })
    .then((topics) => { console.log(topics); setTopicsResponse(topics) })
  }, []);
  
  if (data === null) {
    return <div>Loading...</div>;
  } 

  MOre stuff

  else {
    return (
      <div>
          <h4>/ Home</h4>
          {data.response.results.map((topics) => (
            <div key={topics.id}>
                <Link to={`/topics/${topics.slug}`}>
                    <h2 className="uk-h2 topic-title">{topics.title}</h2>
                    <div key={topics.cover_photo.id}>
                        <img src={topics.cover_photo.urls.thumb} alt={topics.cover_photo.alt_description}/>
                    </div>
                    <div>{topics.description.substring(0, 40)}...</div>
                    <div>{topics.total_photos}</div>
                    <div>Slug: {topics.slug}</div>
                    <div>ID: {topics.id}</div>
                </Link>
            </div>
          ))}
      </div>
    );
 }
}

export default Home
