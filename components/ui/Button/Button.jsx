function Button(props) {
  const {
    children,
    className,
    onClick,
    size = "default",
    variant = "default",
  } = props;
  return (
    <div
      className={`cursor-pointer rounded-md text-center p-2 px-3 text-white font-bold select-none, ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
