import React, { PureComponent } from 'react'
import Title from '../components/Title'

class PagesContainer extends PureComponent {
  renderPage(page, index) {
    return null
  }

  render() {
    return(
      <div className="Pages wrapper">
        <header>
          <Title content="Pages" />
        </header>

        <main>
          { this.props.pages.map(this.renderPage) }
        </main>
      </div>
    )
  }
}

export default PagesContainer
