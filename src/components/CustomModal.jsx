export default function CustomModal({
  children,
  visible,
  onClose,
}) {
  if (!visible) return null;

  const handleOnBackDropClick = (e) => {
    if (e.target.id === "backdrop") onClose && onClose();
  };

  return (
    <div
      id='backdrop'
      onClick={handleOnBackDropClick}
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
      {children}
    </div>
  );
}
