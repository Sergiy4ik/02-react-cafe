import css from "./Notification.module.css";

interface NotificationProps {
    canNotify: boolean;
}

export default function Notification({ canNotify }: NotificationProps) {
    return (
        <>
            {canNotify ? <p className={css.message}>No feedback yet</p> : null}
        </>
    );

}