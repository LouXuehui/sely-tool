import styles from './index.less';
import React, {Component} from 'react'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {title} = this.props
    return (
      <div className={styles.circle}>
        <span style={{color: '#670'}}>{title}</span>
      </div>
    )
  }
}
