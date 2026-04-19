import { createContext, useContext } from 'react'

// https://medium.com/@ksathyareddy7/creating-a-toast-notification-system-in-react-a-step-by-step-guide-9b76b182d336
// https://peterkellner.net/2023-05-11-creating-a-custom-react-context-provider/  
export type NotificationType = "SUCCESS" | "ERROR"

export interface ToastNotification {
  id: string;
  message: string;
  type: NotificationType;
}

interface ToastContextType {
    list: ToastNotification[];
    addToast: (notification: ToastNotification) => void;
    removeToast: (id: string) => void;
}

// export const ToastContext = createContext<Props>({} as Props);

// export const useToast = (): Props => useContext(ToastContext);


export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      "useToast must be used within a ToastProvider"
    );
  }
  return context;
};

