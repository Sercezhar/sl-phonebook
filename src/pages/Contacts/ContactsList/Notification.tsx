interface NotificationProps {
  message: string;
  image?: null | string;
}

function Notification({ message, image }: NotificationProps) {
  return (
    <div>
      <h3 className="mb-4 p-4 text-center text-lg font-medium text-gray-400">
        {message}
      </h3>

      {image && (
        <div
          className={`mx-auto h-[140px] w-[200px] bg-contain bg-center bg-no-repeat ${image}`}
        ></div>
      )}
    </div>
  );
}

export default Notification;
