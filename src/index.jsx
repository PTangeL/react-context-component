import React, { Component } from 'react'

class Cntxt extends Component {
  getChildContext () {
    const { children, ...rest } = this.props
    return rest
  }

  render () {
    return this.props.children
  }
}

class Context extends Component {
  constructor (props) {
    super(props)
    const { children, ...rest } = props
    const contextTypes = Object.keys(rest).reduce(
      (acc, current) => {
        acc[current] = () => {}
        return acc
      },
      {}
    )
    Cntxt.childContextTypes = contextTypes
  }

  render () {
    return <Cntxt {...this.props} />
  }
}

export default Context
