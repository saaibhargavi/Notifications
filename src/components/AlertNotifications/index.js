import {AiFillCiCircle} from 'react-icons/ai'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCiCircle className="success-icon" />
      <div className="app-container">
        <h1 className="success-heading">Success</h1>
        <p className="success-para">you can access all files in the folder</p>
      </div>
    </Notification>
  )

  return <div>{renderSuccessNotification()}</div>
}

export default AlertNotifications
