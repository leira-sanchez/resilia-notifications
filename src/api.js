const createNotification = (newNotification) => {
  const existingNotifications = getNotifications();
  const allNotifications = {
    notifications: [existingNotifications, ...newNotification],
  };
  localStorage.setItem("resilia-notifications", allNotifications);
  return allNotifications;
};

const getNotifications = () => {
  const { notifications } = JSON.parse(
    localStorage.getItem("resilia-notifications")
  );
  return notifications;
};

const toggleRead = (notificationId) => {
  const notifications = getNotifications();
  const newNotifications = notifications.map((notification) => {
    if (notification.id === notificationId) {
      notification.isRead = !notification.isRead;
    }
    return notification;
  });
  localStorage.setItem(
    "resilia-notifications",
    JSON.stringify({
      notifications: newNotifications,
    })
  );
};

export { createNotification, getNotifications, toggleRead };
