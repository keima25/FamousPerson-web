import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import FormModal from "./components/FormModal";
import ViewModal from "./components/ViewModal";
import { Button, message } from "antd";
import "antd/dist/antd.css";

const axios = require("axios").default;

function App() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [visible, setVisible] = useState(false);
  const [update, setUpdate] = useState(false);
  const [view, setView] = useState(false);

  const fetchData = () => {
    axios
      .get("/api/fetch")
      .then(function(response) {
        setData(response.data);
      })
      .catch(function(error) {
        console.log("error:", error);
      });
  };

  useEffect(() => {
    if (!visible) {
      setSelectedData(null);
      setUpdate(false);
    }
  }, [visible]);

  useEffect(() => {
    if (!view) {
      setSelectedData(null);
    }
  }, [view]);

  useEffect(() => {
    fetchData();
  }, []);

  const addFamousPerson = values => {
    let date = values.date.format("YYYY-MM-DD");
    values.date = date;

    axios
      .post("/api/add", {
        values
      })
      .then(function(response) {
        message.success("Added Successful");
        fetchData();
        setVisible(false);
      })
      .catch(function(error) {
        console.log("error:", error);
      });
  };

  const editData = values => {
    setSelectedData(values);
    setVisible(true);
    setUpdate(true);
  };

  const updateFamousPerson = values => {
    let date = values.date.format("YYYY-MM-DD");
    values.date = date;
    values.id = selectedData._id;

    axios
      .put("/api/update", {
        values
      })
      .then(function(response) {
        message.success("Edit Successful");
        fetchData();
        setVisible(false);
      })
      .catch(function(error) {
        console.log("error:", error);
      });
  };

  const View = values => {
    setView(true);
    setSelectedData(values);
  };

  return (
    <div className="App">
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={{ marginTop: 10, marginLeft: 20 }}
      >
        Add Famous Person
      </Button>
      <FormModal
        visible={visible}
        onCancel={() => setVisible(false)}
        addFamousPerson={addFamousPerson}
        data={selectedData}
        update={update}
        updateFamousPerson={updateFamousPerson}
      />
      <Table data={data} editData={editData} View={View} />
      <ViewModal
        view={view}
        onCancel={() => setView(false)}
        data={selectedData}
      />
    </div>
  );
}

export default App;
