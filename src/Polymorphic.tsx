type PolymorphicOwnProps<E extends React.ElementType = "button"> = {
  children?: React.ReactNode;
  as?: E;
};

type TagProps<E extends React.ElementType = "button"> = PolymorphicOwnProps<E> &
  React.ComponentProps<E>;

function Polymorphic<E extends React.ElementType = "button">({
  children,
  as,
  ...props
}: TagProps<E>) {
  const TagName = as || "button";
  return <TagName {...props}>{children}</TagName>;
}

export default Polymorphic;
