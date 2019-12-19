function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object" ? child : createTextElement(child)
      )
    }
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

function render(element, container) {
    const dom = document.createElement(element.type);


    element.props.children.forEach(child =>
        render(child, dom)
    )

    container.appendChild(dom)
}
  ​

const Andreact = { createElement, render };

const element = Andreact.createElement("div", null, "Teste");

const container = document.getElementById("root");
Andreact.render(element, container);
