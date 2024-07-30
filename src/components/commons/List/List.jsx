import cn from "classnames";

function List({ classnames = [], children }) {
  return <ul className={cn("list", "text_normal", classnames)}>{children}</ul>;
}

export default List;
