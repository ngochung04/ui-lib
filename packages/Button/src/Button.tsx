interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button style={{ background: "red" }}>{children}</button>;
};
