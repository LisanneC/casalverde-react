import React, { PureComponent } from 'react'
import Title from '../components/Title'

class AdminContainer extends PureComponent {
  renderPage(page, index) {
    return null
  }

  render() {
    return(
      <div className="Pages wrapper">
        <header>
          <Title content="Admin" />
        </header>

        <main>
          { this.props.pages.map(this.renderPage) }
        </main>
      </div>
    )
  }
}

export default AdminContainer
