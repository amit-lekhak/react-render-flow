import React, { useEffect, useLayoutEffect } from "react";

const Component1 = () => {
  console.log("Component 1 render");

  useLayoutEffect(() => {
    console.log("Component 1 use layout effect");

    return () => {
      console.log("Component 1 use layout effect cleanup");
    };
  });

  useLayoutEffect(() => {
    console.log("Component 1 use layout effect with empty dep");

    return () => {
      console.log("Component 1 use layout effect with empty dep cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("Component 1 use effect");

    return () => {
      console.log("Component 1 use effect cleanup");
    };
  });

  useEffect(() => {
    console.log("Component 1 use effect with empty dep");

    return () => {
      console.log("Component 1 use effect with empty dep cleanup");
    };
  }, []);

  return (
    <>
      <div>Component1</div>
      {console.log("Component 1 render end")}
    </>
  );
};

export default Component1;
