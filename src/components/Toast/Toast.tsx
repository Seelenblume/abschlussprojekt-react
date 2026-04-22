import { LucideX } from 'lucide-react';
import styles from "./Toast.module.css"
import clsx from 'clsx';
import type { NotificationType } from '../../context/Toast/ToastContext';

interface ToastProps {
  id: string;
  message: string;
  type: NotificationType;
  removeNotification: () => void
}

export default function Toast(props: ToastProps) {
    const type = props.type
  return (
    <div key={props.id} className={clsx(styles.toast, 
        (type === "SUCCESS") ? styles.success : styles.error
     )}>
        <p>{props.message}</p>
        <button onClick={props.removeNotification}>
            <LucideX/>
        </button>
    </div>
  )
}