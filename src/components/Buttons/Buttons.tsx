import React from "react";
import Link from "next/link";
import styles from "./Buttons.module.scss";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  styleType?: "primary" | "outline";
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  href,
  type = "button",
  styleType = "primary",
  text,
  onClick,
}) => {
  const className = `${styles.button} ${styles[`button--${styleType}`]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;