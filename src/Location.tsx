type LocationProps = {
  user: {
    name: string;
    age: number;
  };
  location: {
    name: string;
  };
  gender: string;
};

const Location = ({ user, location }: LocationProps) => {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{location.name}</div>
    </>
  );
};

export default Location;
