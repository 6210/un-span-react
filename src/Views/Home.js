import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

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
            <Link to={`/topics/${topics.slug}`}>
              <h3>{topics.title}</h3>
              <div>{topics.slug}</div>
            </Link>
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


export default Home
