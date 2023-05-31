interface NotificationProps {
  message: string;
}

function Notification({ message }: NotificationProps) {
  return (
    <div className="font-medium p-4 text-lg text-center text-gray-400">
      {message}
    </div>
  );
}

export default Notification;
