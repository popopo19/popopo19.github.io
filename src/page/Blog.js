
import React from 'react';
import ReactMarkdown from 'react-markdown'
import './Blog.css'

import resideomd from '../data/blogs/resideo.md'

class Blog extends React.Component {
  constructor(props){
    super(props);

    console.log(props.markdown)
    this.state = { 
      path: props.markdown,
      markdown: null
    }

  }
  
  componentDidMount() {

    fetch(resideomd)
      .then((text) => text.text())
      .then((text) => this.setState({markdown: text}))
  }

  render() {
    return (
      <div id="content">
        <ReactMarkdown className='markdown' escapeHtml={false}gi>{this.state.markdown}</ReactMarkdown>
      </div>
    )
    
  }
}

export default Blog;
