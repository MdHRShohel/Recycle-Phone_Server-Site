import React from 'react';

const Blogs = () => {
    return (
      <div className="mx-12">
        <h2 className="text-center my-12 font-bold text-5xl ">BLOGS</h2>
        <div className="container mx-auto  mb-12 p-3 border">
          <h3 className="text-2xl font-bold mb-2">
            What are the different ways to manage a state in a React
            application?
          </h3>
          <p className="text-dark">
            <b>Ans:</b> 1. Local state: At component level, we can use it and
            change it as and when needed by calling the this.setState() method
            in the component class, also pass it child components (only readable
            in child components) .<br></br>
            <br></br>
            2. Redux : If you need to maintain a common state for the entire
            application, we can use 3rd party libraries out of which Redux is
            the most popular one. It maintains a common/ global application
            state and can be used anywhere across the application and follows a
            single source of truth principle. To change a state we need to fire
            Actions and a single app state is maintained throughout the
            application.{" "}
          </p>
        </div>
        <div className="container mx-auto  mb-12 p-3 border">
          <h3 className="text-2xl font-bold mb-2">
            How does prototypical inheritance work?
          </h3>
          <p className="mb-2">
            <b>Ans:</b> The Prototypal Inheritance is a feature in javascript
            used to add methods and properties in objects. It is a method by
            which an object can inherit the properties and methods of another
            object. Traditionally, in order to get and set the [[Prototype]] of
            an object, we use Object. getPrototypeOf and Object.{" "}
          </p>
        </div>

        <div className="container mx-auto  mb-5 p-3 border">
          <h3 className="text-2xl font-bold mb-2">
            What is the difference between javascript and NodeJS?
          </h3>
          <p className="text-dark">
            <b>Ans:</b> Unit testing is a testing technique in which smallest
            parts of a program called units are tested individually to check if
            there is any issue by the developer. It is done by developers by
            themselves. Importance of unit testing are: It is use to detect the
            issues early at the time of production of code.{" "}
          </p>

          <p>
            the difficulties associated with unit testing are in selling the
            concept to an organization. Quite often, organizations push back on
            unit testing because development with unit testing takes longer and
            it therefore delays delivery. <br /> <br /> 10 Reasons Why Unit
            Testing Matters: <br /> <br />
            1. Discipline and Rigor <br />
            2. Does It Work? <br />
            3. Reduce Cyclomatic Complexity <br />
            4. Your Software Is Used Before Delivery <br />
            5. Documentation <br />
            6. Measure the Effort Needed to Modify an Existing Feature <br />
            7. Enforces Inversion of Control/Dependency Injection Patterns{" "}
            <br />
            8. Code Coverage <br />
            9. Performance <br />
            10. Enables Continuous Integration (CI) <br />{" "}
          </p>
        </div>
        <div className="container mx-auto  mb-12 p-3 border">
          <h3 className="text-2xl font-bold mb-2">
            React vs. Angular vs. Vue?
          </h3>
          <p className="">
            <b>Ans:</b> React: If you need to develop a javascript-based web
            application or mobile application, then you need the help of a
            front-end library for your user interfaces. React is the type of
            tool that can help you in this case. It offers some amazing features
            like virtual DOM, component-based architecture, JSX, and many more.
            Its user interface is super high quality and efficient.
          </p>{" "}
          <br />
          <p className="">
            <b>Ans:</b> Angular: It’s a javascript-based framework and a dynamic
            web application. It will help you to use HTML as the template
            language! If you use it, you can feel the real-time testing
            experience in it!
          </p>{" "}
          <br />
          <p className="">
            <b>Ans:</b> Vue: It’s another Javascript-based open-source
            framework. You need this framework when you try to build user
            interfaces and any sort of single-page application.
          </p>
          <br />
        </div>
      </div>
    );
};

export default Blogs;