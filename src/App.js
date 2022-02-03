import "./App.css";
import RenderTree from "./RenderTree";

const tree = [
  {
    id: "fb2f8510-62cd-47d5-80f8-c3a09c3aa247",
    name: "Mobile Phone",
    type: "productCategory",
    children: [
      {
        id: "016f8ad9-e278-4ad4-925a-5689e93b0efc",
        name: "Apple",
        type: "brand",
        children: [
          {
            id: "eafc8fbf-88a6-4a1d-b278-ad2b6ec1565a",
            name: "iPhone6",
            type: "model",
            children: [
              {
                id: "eafc8fbf-88a6-4a1d-b278-ad2b6ec1515a",
                name: "128 GB",
                type: "variant",
                children: [],
                productSize: 39,
              },
              {
                id: "ea1c8fbf-88a6-4a1d-b278-ad2b6ec1565a",
                name: "256 GB",
                type: "variant",
                children: [],
                productSize: 13,
              },
              {
                id: "eafc8fbf-81a6-4a1d-b278-ad2b6ec1565a",
                name: "512 GB",
                type: "variant",
                children: [],
                productSize: 56,
              },
            ],
          },
          {
            id: "fafc8fbf-88a6-4a1d-b278-ad2b6ec1565a",
            name: "iPhone 13 Pro",
            type: "model",
            children: [
              {
                id: "egfc8fbf-88a6-4a1d-b278-ad2b6ec1565a",
                name: "128 GB",
                type: "variant",
                children: [],
                productSize: 31,
              },
              {
                id: "21a5bfdc-eadb-4a8a-9b08-6d4d45fb3718",
                name: "256 GB",
                type: "variant",
                children: [],
                productSize: 123,
              },
              {
                id: "21a5bfdc-ea2b-4a8a-9b08-6d4d45fb3718",
                name: "512 GB",
                type: "variant",
                children: [],
                productSize: 86,
              },
            ],
          },
        ],
      },
      {
        id: "29a5bfdc-eadb-4a8a-9b08-6d4d45fb3718",
        name: "Nokia",
        type: "model",
        children: [],
      },
      {
        id: "21a5bfdc-eadb-4a8a-9b08-6d4r45fb3718",
        name: "Samsung",
        type: "model",
        children: [],
      },
    ],
  },
  {
    id: "21a5bfdc-eadb-4a8a-9b08-6dbd45fb3718",
    name: "Computers",
    type: "productCategory",
    children: [
      {
        id: "21a5bfdc-eadb-4a8a-9b08-6d4d451b3718",
        name: "Dell",
        type: "brand",
        children: [],
      },
      {
        id: "09355e32-7143-4844-8a07-19a52c3f1bb1",
        name: "Apple",
        type: "brand",
        children: [
          {
            id: "09155e32-7143-4844-8a07-19a52c3f1bb1",
            name: "Apple Chip",
            type: "model",
            children: [
              {
                id: "09155ss32-7143-4844-8a07-19a52c3f1bb1",
                name: "M1 2020",
                type: "variant",
                children: [],
                productSize: 56,
              },
              {
                id: "09155ss32-7113-4844-8a07-19a52c3f1bb1",
                name: "M1 Pro 2121",
                type: "variant",
                children: [],
                productSize: 26,
              },
            ],
          },
          {
            id: "09355e32-7143-4844-8a07-19152c3f1bb1",
            name: "Intel Chip",
            type: "model",
            children: [
              {
                id: "09155ss32-7113-4844-8a07-19a52c121bb1",
                name: "M1 Book Pro Air 2019",
                type: "variant",
                children: [],
                productSize: 86,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "7913f1b6-0845-418c-bafa-4f7760026573",
    name: "TVs",
    children: [],
  },
];

function App() {
  return <RenderTree data={tree} />;
}

export default App;
