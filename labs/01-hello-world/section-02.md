<link rel="stylesheet" href="../../.images/styles.css"></link>

<aside instruction>
<div map></div>
In this section, we'll add the react libraries to our project and render a "Hello World" message to the page.
</aside>

## Add React

Now we're ready to start writing some react code.

<aside instruction>
<div by-hand></div>
Type things out by-hand in this section.
</aside>

<br>

In `main.js` we're going to import the `react` and `react-dom` libraries. These have already been installed in this repository, so you don't need to do anything to install them. But typically this would be done with `npm install react react-dom`

```js
import React from "react";
import ReactDOM from "react-dom/client";
```

Next, we'll need to get a reference to the `div` with the id of `root` in our html. And we'll need to create a react root targeting that element.

```js
const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
```

Now we're ready to render our first react component to that root:

```js
reactRoot.render(<h1>Hello World</h1>, root);
```

<aside check>
Go ahead and save that file, and you should see your browser has reloaded with the new content. This is because vite is watching for changes to your code and automatically reloading the page.
<div look></div>
</aside>

<aside goal>
<div goal></div>
You've imported the react libraries, created a react root and rendered some content out!
</aside>
