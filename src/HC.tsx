type Test = {
  user: {
    name: string;
    age: number;
  };
};

function HC<T>(Component: React.ComponentType<T>) {
  const user = {
    name: "tom brady",
    age: 17
  };

  return (props: Omit<T, keyof Test>) => {
    return <Component {...(props as T)} user={user} />;
  };
}

export default HC;
