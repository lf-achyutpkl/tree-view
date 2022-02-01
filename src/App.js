import "./App.css";
import RenderTree from "./RenderTree";

const tree = [
  {
    id: 'fb2f8510-62cd-47d5-80f8-c3a09c3aa247',
    name: "Mobile Phone",
    children: [
      {
        id: '016f8ad9-e278-4ad4-925a-5689e93b0efc',
        name: "Apple",
        children: [
          {
            id: 'eafc8fbf-88a6-4a1d-b278-ad2b6ec1565a',
            name: "iPhone6",
            children: [
              {
                id: 'eafc8fbf-88a6-4a1d-b278-ad2b6ec1515a',
                name: "128 GB",
                children: [],
              },
              {
                id: 'ea1c8fbf-88a6-4a1d-b278-ad2b6ec1565a',
                name: "256 GB",
                children: [],
              },
              {
                id: 'eafc8fbf-81a6-4a1d-b278-ad2b6ec1565a',
                name: "512 GB",
                children: [],
              },
            ],
          },
          {
            id: 'fafc8fbf-88a6-4a1d-b278-ad2b6ec1565a',
            name: "iPhone 13 Pro",
            children: [
              {
                id: 'egfc8fbf-88a6-4a1d-b278-ad2b6ec1565a',
                name: "128 GB",
                children: [],
              },
              {
                id: '21a5bfdc-eadb-4a8a-9b08-6d4d45fb3718',
                name: "256 GB",
                children: [],
              },
              {
                id: '21a5bfdc-ea2b-4a8a-9b08-6d4d45fb3718',
                name: "512 GB",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: '29a5bfdc-eadb-4a8a-9b08-6d4d45fb3718',
        name: "Nokia",
        children: [],
      },
      {
        id: '21a5bfdc-eadb-4a8a-9b08-6d4r45fb3718',
        name: "Samsung",
        children: [],
      },
    ],
  },
  {
    id: '21a5bsdc-eadb-4a8a-9b08-6d4d45fb3718',
    name: "Watches",
    children: [],
  },
  {
    id: '21a5bfdc-eadb-4a8a-9b08-6dbd45fb3718',
    name: "Computers",
    children: [
      {
        id: '21a5bfdc-eadb-4a8a-9b08-6d4d451b3718',
        name: "Gummies",
        children: [],
      },
      {
        id: '09355e32-7143-4844-8a07-19a52c3f1bb1',
        name: "Chocolate",
        children: [
          {
            id: '09155e32-7143-4844-8a07-19a52c3f1bb1',
            name: "M & M's",
            children: [],
          },
          {
            id: '09355e32-7143-4844-8a07-19152c3f1bb1',
            name: "Hershey Bar",
            children: [],
          },
          {
            id: '09355e32-7143-5844-8a07-19a52c3f1bb1',
            name: "Toublorine Bar bebe",

            children: [],          },
        ],
      },
    ],
  },
  {
    id: '7913f1b6-0845-418c-bafa-4f7760026573',
    name: "TVs",
    children: [],
  },
];



function App() {
  return (
    <div>
      <RenderTree  data={tree}/>
    </div>
  );
}



export default App;
