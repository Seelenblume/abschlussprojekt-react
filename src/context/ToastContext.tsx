import { createContext, useContext } from 'react'

// https://medium.com/@ksathyareddy7/creating-a-toast-notification-system-in-react-a-step-by-step-guide-9b76b182d336
export type NotificationType = "SUCCESS" | "ERROR"

export interface ToastNotification {
  id: string;
  message: string;
  type: NotificationType;
}

interface Props {
    list: ToastNotification[];
    addNotification: (notification: ToastNotification) => void;
    removeNotification: (id: string) => void;
}


export const ToastContext = createContext<Props | undefined>(undefined);

export const useToast = (): Props => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      "useToast must be used within a ToastProvider"
    );
  }
  return context;
};

