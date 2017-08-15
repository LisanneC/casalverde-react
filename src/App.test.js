import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './components/Title'
import PagesContainer from './pages/PagesContainer'

chai.use(chaiEnzyme())

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).to.have.tagName('div')
  })

  it('sets the Title to "Hello Admin"', () => {
    expect(app).to.contain(<Title content="Hello Admin" />)

  it('contains the PagesContainer', () => {
    expect(app).to.have.descendants(PagesContainer)
  })
})
