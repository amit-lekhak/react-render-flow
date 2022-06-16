import React, { useEffect, useLayoutEffect } from "react";

const Component2 = () => {
  console.log("Component 2 render");

  useLayoutEffect(() => {
    console.log("Component 2 use layout effect");

    return () => {
      console.log("Component 2 use layout effect cleanup");
    };
  });

  useLayoutEffect(() => {
    console.log("Component 2 use layout effect with empty dep");

    return () => {
      console.log("Component 2 use layout effect with empty dep cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("Component 2 use effect");

    return () => {
      console.log("Component 2 use effect cleanup");
    };
  });

  useEffect(() => {
    console.log("Component 2 use effect with empty dep");

    return () => {
      console.log("Component 2 use effect with empty dep cleanup");
    };
  }, []);

  return (
    <>
      <div>Component2</div>
      {console.log("Component 2 render end")}
    </>
  );
};

export default Component2;
