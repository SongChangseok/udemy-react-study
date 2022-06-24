import "./Card.css";

export default function Card({ children, className }) {
  const clesses = `card ${className}`;
  return <div className={clesses}>{children}</div>;
}
