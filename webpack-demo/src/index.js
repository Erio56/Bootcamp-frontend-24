function getComponent() {
  return import("lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");
      element.innerHTML = _.join(["Hello", "webpack"], " ");

      import(/* webpackChunkName: "testModule" */ "./example.js")
        .then((testModule) => {
          const moduleElement = testModule.default();
          document.body.appendChild(moduleElement);
        })
        .catch((error) => {
          console.error("Failed to load module", error);
        });

      return element;
    })
    .catch((error) => {
      console.error("An error occurred while loading the component", error);
    });
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
