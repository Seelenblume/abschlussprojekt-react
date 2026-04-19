import { type ReactNode, useState, useEffect } from "react";
import { ToastContext, type ToastNotification } from "./ToastContext";

interface ProviderProps {
    children: ReactNode;
}

export const ToastProvider = ({ children }: ProviderProps) => {

    const [list, setList] = useState<ToastNotification[]>([]);

    function addToast(notification: ToastNotification) {
        setList((prev) => [
            ...prev,
            notification,
        ])
    }

    function removeNotification(id: string) {
        setList((prev) => prev.filter((notification) => notification.id !== id))
    }

    useEffect(() => {
        const timeouts = list.map(notification =>
            setTimeout(() => {
                removeNotification(notification.id);
            }, 3000)
        );

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [list]);

    return (
        <ToastContext.Provider value={{
            list,
            addToast,
            removeToast: removeNotification,
        }}>
            {children}
        </ToastContext.Provider>
    )
}