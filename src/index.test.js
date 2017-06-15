import React from 'react'
import PropTypes from 'prop-types'
import renderer from 'react-test-renderer'
import Context from '../src'

const RenderDataContext = (props, { data }) => <p>{data}</p>

RenderDataContext.contextTypes = {
  data: PropTypes.number.isRequired
}

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Context data={1}>
        <RenderDataContext />
      </Context>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
