export default function Notification({ message }) {
  return (
    <>
      <h3>{message}</h3>
    </>
  );
}

Notification.defaultProps = {
  message: "",
};
