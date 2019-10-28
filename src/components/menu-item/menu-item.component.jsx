import React from 'react'

import './menu-item.styles.scss'

class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovering: false
    }
  }

  handleMouse = () => {
    this.setState((prevState, props) => ({
      isHovering: !prevState.isHovering
    }))
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.imageUrl})`
        }}
        className={`${this.props.size} menu-item`}
      >
        <div
          className='content'
          onMouseEnter={this.handleMouse}
          onMouseLeave={this.handleMouse}
        >
          {this.state.isHovering && (
            <div>
              <h1 className='title'>{this.props.title}</h1>
              <span className='subtitle'>SHOP NOW</span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MenuItem
