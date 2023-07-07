type ButtonProps = {
  disabled: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ disabled, children, onClick }: ButtonProps) {
  return (
    <button style={{ backgroundColor: disabled ? "red" : "blue" }} onClick={onClick}>
      {children}
    </button>
  );
}
