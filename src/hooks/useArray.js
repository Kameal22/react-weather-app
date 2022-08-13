import { useState } from "react";

const useArray = (defaultValue) => {
  const [array, setArray] = useState(defaultValue);

  const push = (element) => {
    setArray((prev) => [...prev, element]);
  };

  const filter = (callback) => {
    setArray((prev) => prev.filter(callback));
  };

  const update = (index, newElement) => {
    setArray((prev) => [
      ...prev.slice(0, index),
      newElement,
      ...prev.slice(index + 1, prev.length - 1),
    ]);
  };

  const remove = (item) => {
    const index = array.findIndex((element) => element === item);
    setArray((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length - 1),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  return [array, setArray, push, filter, update, remove, clear];
};

export default useArray;
