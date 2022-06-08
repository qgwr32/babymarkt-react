interface ButtonProps {
  children: React.ReactNode,
  className: string
  variant?: 'dark'|'light'|'default',
  size?: 'large'|'small'
  onClick: () => void;
}

function Button(props: ButtonProps) {
  const {
    children,
    className,
    onClick,
    size,
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
