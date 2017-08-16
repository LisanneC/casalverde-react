import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import PagesContainer from './PagesContainer'

chai.use(chaiEnzyme())

describe('<PagesContainer />', () => {
  const container = shallow(<PagesContainer pages={[]} />)

  it('is wrapped in a div with class name "pages"', () => {
    expect(container).to.have.className('wrapper')
    expect(container).to.have.className('pages')
  })

  it('contains a Title', () => {
   expect(container).to.have.descendants(Title)
 })
})
