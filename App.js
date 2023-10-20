// if we want to create nested type of structure

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { className: "header" },
      "Hello this is nested checking"
    ),
    React.createElement(
      "h2",
      { className: "header" },
      "Hello this is h2 sibling checking"
    ),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { className: "header" },
      "Hello this is nested checking"
    ),
    React.createElement(
      "h2",
      { className: "header" },
      "Hello this is h2 sibling checking"
    ),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Manoj Awesome!"
);
console.log("object", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
