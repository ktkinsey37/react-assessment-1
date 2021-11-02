### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a front end library for javascript. You would use it when you will be rendering reuseable components on a website

- What is Babel?

Babel is a transpiler that allows the browser/machine to interpret between JS and HTML

- What is JSX?

JSX is a way for HTML to interpret js files as being react files and having raw HTML in them

- How is a Component created in React?

A component in react is created by building a template for the component, then rendering it

- What are some difference between state and props?

State is used between multiple renders while props is re-rendered every time

- What does "downward data flow" refer to in React?

It means that data only flows one way in React. Data can be passed from parent components to children, not vice versa

- What is a controlled component?

A component that is operated from a higher-up component by passing it props. The component does not handle it's input info itself.

- What is an uncontrolled component?

A component that uses state to manage its own changing data through renders rather than having data passed to it

- What is the purpose of the `key` prop when rendering a list of components?

The key prop allows for each iterated component to have a specific key so that if anything needs to manipulate it, it's easily found

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

The index of an item could change based on some behind the scenes logic and then the id no longer works for that component

- Describe useEffect.  What use cases is it used for in React components?

useEffect basically provides you with a callback to run when a piece of data changes, but without actually re-rendering everything
You'd use it to run a side effect without changing the rest of the page

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

Useref creates a mutable object set to "current". It does not cause a re render

- When would you use a ref? When wouldn't you use one?

You would use a ref when you might need to change an html element manually

- What is a custom hook in React? When would you want to write one?

A custom hook is a hook that is written and used in react in conjunction with other hooks to provide a template.

You'd write one when you wanted to use similar hook logic in multiple different components (friends list select/messages list select, etc.)

