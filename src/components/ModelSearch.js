import { Select } from "antd";

import { useState } from "react";
import addressData from "../info.json";

const modulesData = addressData.map((module, index) => ({
    label: module.name, // Displayed name in the dropdown
    value: module.name, // Value of the selected option
    latitude: module.latitude,
    longitude: module.longitude
}));

export default function ModelSearch({setModelData}) {
    const [value, setValue] = useState("");
  
  const handleChange = (e) => {
    // setValue(value);
  };

  const handleBlur = () => {
    setValue(value.trim());
  };

  const filterSort = (optionA, optionB) => {
    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
  }

  const onSearch = (searchValue) => {
     const searchTerm = searchValue.toLowerCase();
    
     const similarModules = modulesData.filter(module => module.label.toLowerCase().includes(searchTerm));
     
     console.log("Similar Modules:", similarModules);
     setModelData(similarModules)
  }


    return (
        <div style={{marginRight: '1400px'}}>
            <Select showSearch
                style={{
                    width: 500,
                    height: 60,
                    fontSize: "25px",
                }}
                onSearch={(e) => onSearch(e)}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={filterSort}
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                options={modulesData} />
        </div>
    )
}