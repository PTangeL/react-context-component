import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'
import { Context } from '../src'
import { withContext } from '../src'

const RenderDataContext = (props, { data }) => (
  <p>data from context: {data}, data from props {props.data}</p>
)

RenderDataContext.contextTypes = {
  data: PropTypes.number.isRequired
}

it('renders Context correctly', () => {
  const tree = renderer
    .create(
      <Context data={1}>
        <RenderDataContext />
      </Context>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders a component withContext correctly', () => {
  const RenderWithDataContext = withContext({
    data: PropTypes.number.isRequired
  })(RenderDataContext)

  const tree = renderer
    .create(
      <Context data={1}>
        <RenderWithDataContext />
      </Context>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
