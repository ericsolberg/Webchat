import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'

import Webchat from './containers/App'

// https://github.com/babel/babel-loader/issues/401
if (!global._babelPolyfill) {
  require('babel-polyfill')
}

console.log('HERE')

export default class CaiWebchat extends Component {
  render() {
    console.log('CAIWebchat', this.props)
    alert('hello')
    return (
      <Provider store={store}>
        <Webchat preferences={{ openingType: 'always' }} {...this.props} />
      </Provider>
    )
  }
}
