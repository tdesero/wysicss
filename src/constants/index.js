export const DEFAULT_ELEMENTS = [
  {
    tag: "div",
    id: 1,
    classNames: ["navbar"],
    children: [
      {
        tag: "div",
        id: 5,
        classNames: ["navbar__brand"],
        children: [
          {
            tag: false,
            text: "Brand",
            id: 4,
          },
        ],
      },
      {
        tag: "div",
        id: "_p57ix438m",
        classNames: ["menu-icon"],
        children: [
          {
            tag: "div",
            id: "_04btqcxj5",
            classNames: ["menu-icon__bar"],
            children: [],
          },
          {
            tag: "div",
            id: "_a1xw92k7b",
            classNames: ["menu-icon__bar"],
            children: [],
          },
          {
            tag: "div",
            id: "_8qok9wfs1",
            classNames: ["menu-icon__bar"],
            children: [],
          },
        ],
      },
    ],
  },
  {
    tag: "div",
    id: "_ks2wq0oj1",
    classNames: ["main"],
    children: [
      {
        tag: "div",
        id: "_rvoodmaa6",
        classNames: ["card"],
        children: [
          {
            tag: false,
            id: "_pee8z2jje",
            classNames: [],
            children: [],
            text: "Hello World",
          },
        ],
      },
    ],
  },
];

export const DEFAULT_CLASSNAMES = [
  {
    name: "navbar",
    txt: "",
    properties: {
      "padding-left": {
        value: 40,
        unit: "px",
      },
      "padding-right": {
        value: 40,
        unit: "px",
      },
      "padding-top": {
        value: 30,
        unit: "px",
      },
      "padding-bottom": {
        value: 30,
        unit: "px",
      },
      "background-color": {
        value: "#db6666",
        unit: "",
      },
      display: {
        value: "flex",
        unit: "",
      },
      "justify-content": {
        value: "space-between",
        unit: "",
      },
      "align-items": {
        value: "center",
        unit: "",
      },
    },
  },
  {
    name: "navbar__brand",
    txt: "",
  },
  {
    name: "main",
    txt: "",
    properties: {
      "padding-right": {
        value: "10",
        unit: "%",
      },
      "padding-left": {
        value: "10",
        unit: "%",
      },
      "padding-top": {
        value: 40,
        unit: "px",
      },
      "padding-bottom": {
        value: 40,
        unit: "px",
      },
    },
  },
  {
    name: "card",
    txt: "",
    properties: {
      height: {
        value: 481,
        unit: "px",
      },
      "background-color": {
        value: "#ebebeb",
        unit: "",
      },
      "border-top-left-radius": {
        value: "10",
        unit: "px",
      },
      "border-top-right-radius": {
        value: "10",
        unit: "px",
      },
      "border-bottom-right-radius": {
        value: "10",
        unit: "px",
      },
      "border-bottom-left-radius": {
        value: "10",
        unit: "px",
      },
      "font-size": {
        value: 56,
        unit: "px",
      },
      "padding-top": {
        value: 25,
        unit: "px",
      },
      "padding-right": {
        value: "25",
        unit: "px",
      },
      "padding-bottom": {
        value: "25",
        unit: "px",
      },
      "padding-left": {
        value: "25",
        unit: "px",
      },
    },
  },
  {
    name: "menu-icon",
    txt: "",
  },
  {
    name: "menu-icon__bar",
    txt: "",
    properties: {
      height: {
        value: "2",
        unit: "px",
      },
      "background-color": {
        value: "#000000",
        unit: "",
      },
      width: {
        value: "30",
        unit: "px",
      },
      "margin-top": {
        value: "5",
        unit: "px",
      },
      "margin-bottom": {
        value: "5",
        unit: "px",
      },
    },
  },
];

export const MOVE_ELEMENT_POSITION = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  INSIDE: "INSIDE",
};
