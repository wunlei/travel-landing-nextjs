import cn from "classnames";

function Link({ href, classnames = [], children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(classnames)}
    >
      {children}
    </a>
  );
}

export default Link;
