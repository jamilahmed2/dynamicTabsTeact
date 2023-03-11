import React from "react";
import 'react-dyn-tabs/style/react-dyn-tabs.min.css';
import 'react-dyn-tabs/themes/react-dyn-tabs-card.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import useDynTabs from 'react-dyn-tabs';
import DataTable from './components/DataTable/DataTable';
import Details from "./components/Details/Details";
import './App.css'

const App = () => {

  // Title of app
  document.title = `MultiTabs`

  // person data array
  const Data = [
    {
      "id": 1,
      "name": "Joonah",
      "Age": 15,
      "country": "Pakistan"
    },
    {
      "id": 2,
      "name": "shah",
      "Age": 25,
      "country": "Pakistan"
    },
    {
      "id": 3,
      "name": "nas",
      "Age": 35,
      "country": "Pakistan"
    },
  ]

  // default tab is (Data Table) when user clicks on a table row render a new tab with details of a row
  const options = {
    tabs: [
      { id: '1', title: 'Data Table', panelComponent: () => <DataTable Data={Data} actions={actions} />, closable: false },
    ],
    selectedTabID: "1",
  }

  const [Tablist, Panellist, ready] = useDynTabs(options);

  // 
  let _instance, isVertical;

  ready((instance) => {
    _instance = instance;
    isVertical = _instance.getOption('isVertical');
  });

  // change tab with name of row
  const actions = {
    openNewTab: (data) => {
      _instance
        .open({
          id: (data?.id + 1).toString(),
          title: data?.name,
          lazy: true,
          panelComponent: <Details data={data} />
        })
        .then(() => {
          console.log('open');
        });
      _instance.select((data?.id + 1).toString()).then(() => {
        console.log(`tab ${(data?.id + 1)} is selected`,);
      });
    },
  }


  return (
    <div className='m-1 bg-white p-1 rounded-2'  >
      <div className={`w-100 ${isVertical ? "d-inline-block" : "d-block"}`}>
        <Tablist></Tablist>
        <Panellist></Panellist>
      </div>
      <div className="text-center">
        <a style={{ textDecoration: "none", opacity: "50%", color: "grey" }} rel="noreferrer" href="https://github.com/jamilahmed2" target="_blank">Github Repo</a>
      </div>
    </div>
  );
}

export default App
