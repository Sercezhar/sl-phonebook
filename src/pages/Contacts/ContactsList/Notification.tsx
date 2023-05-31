interface NotificationProps {
  message: string;
}

function Notification({ message }: NotificationProps) {
  return (
    <div className="p-4 text-center text-lg font-medium text-gray-400">
      {message}
    </div>
  );
}

export default Notification;
