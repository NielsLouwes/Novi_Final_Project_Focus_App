import { useState } from "react";

const Example = () => {
  const { data, error, isLoaded } = useApiRequest(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data.map(item => (
        <div>{item.id}</div>
      ))}
    </div>
  );
};