import React from 'react';

const Blog = () => {
  return (
    <div className=" flex justify-center items-center h-screen container mx-auto">
      <div>
        <h1 className="text-center font-bold text-3xl underline mb-7">
          Questions and Answers :
        </h1>
        <h3 className="text-3xl font-semibold mb-2">
          a. When should you use context API?
        </h3>
        <p className="mb-5 text-xl">
          And : Context API in React should be used when you have data or state
          that needs to be accessed by multiple components at different levels
          of your component tree.
        </p>
        <h3 className="text-3xl font-semibold mb-2">
          b. What is a custom hook?
        </h3>
        <p className="mb-5 text-xl">
          And : A custom hook is a JavaScript function that uses React hooks and
          returns stateful logic to be reused across multiple components.
        </p>
        <h3 className="text-3xl font-semibold mb-2">c. What is useRef?</h3>
        <p className="mb-5 text-xl">
          And : useRef is a React hook that returns a mutable ref object whose
          .current property is initialized to a specified value and can be
          updated during the component's lifecycle.
        </p>
        <h3 className="text-3xl font-semibold mb-2">d. What is useMemo?</h3>
        <p className="mb-5 text-xl">
          And : useMemo is a hook in React that memoizes the result of a
          function and returns the cached value until the dependencies change.
        </p>
      </div>
    </div>
  );
};

export default Blog;
