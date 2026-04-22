import { useToast } from '../../context/Toast/ToastContext';
import Toast from './Toast';
import styles from "./ToastContainer.module.css"

export default function ToastContainer() {

  const {list, removeToast: removeNotification} = useToast();

  return (
    <div className={styles.container}>
        {list.map((notification) => {
          return (
            <Toast 
            id={notification.id} 
            message={notification.message} 
            type={notification.type} 
            removeNotification={() => removeNotification(notification.id)} 
            />
          )
        })}
    </div>
  )
}