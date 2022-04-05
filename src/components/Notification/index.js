import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div>
      <div>{children}</div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
