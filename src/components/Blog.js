
import React from 'react';
import ReactMarkdown from 'react-markdown'
import './Blog.css'

import md from '../data/blogs/resideo.md'

class Blog extends React.Component {
  constructor(props){
    super(props);

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(md).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div>
        <ReactMarkdown>{this.state.terms}</ReactMarkdown>
      </div>
    )
    
  }
}

export default Blog;
