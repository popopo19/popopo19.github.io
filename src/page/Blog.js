
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import './Blog.css'

function Blog (props) {

  const {id} = useParams()

  const [markdown, setMarkdown] = useState(0);

  import('../data/blogs/' + id + '.md')
    .then(res => {
      fetch(res.default)
        .then(text => text.text())
        .then(text => setMarkdown(text))
    })

  return (
    <div id="content">
      <ReactMarkdown className='markdown'>{markdown}</ReactMarkdown>
    </div>
  )
}

export default Blog;
