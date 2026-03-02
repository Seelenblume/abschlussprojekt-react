import { type ReactNode, useState, useEffect } from "react";
import { ToastContext, type ToastNotification } from "./ToastContext";

interface ProviderProps {
    children: ReactNode;
}

export const ToastProvider = ({children}: ProviderProps) => {

    const [list, setList] = useState<ToastNotification[]>([]);

    function addNotification(notification: ToastNotification) {
        setList((prev) => [
            ...prev,
            notification,
        ])
    }

    function removeNotification(id: string) {
        setList((prev) => prev.filter((notification) => notification.id !== id))
    }

    useEffect(() => {
        function load() {
            list.forEach((notification) => {
                const timeoutId = setTimeout(() => {
                    removeNotification(notification.id);
                }, 3000)
                return () => clearTimeout(timeoutId)
            })
        }
        load();
    }, [list])

    return (
        <ToastContext.Provider value={{
            list, 
            addNotification,
            removeNotification,
        }}>
            {children}
        </ToastContext.Provider>
    )
}