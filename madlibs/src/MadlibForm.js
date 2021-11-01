import React, { useState } from "react";

const MadlibForm = ({ renderMadlib }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    renderMadlib(formData)
    // do something with the data submitted
  };

  const [formData, setFormData] = useState({
    noun1: "",
    noun2: "",
    adjective: "",
    color: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };
  // end handleChange

  return (
    <form id="MadlibForm" onSubmit={handleSubmit}>
      <input
        id="noun1"
        name="noun1"
        value={formData.noun1}
        onChange={handleChange}
        placeholder="noun"
      />
      <br/>

      <input
        id="noun2"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
        placeholder="noun 2"
      />
      <br/>

      <input
        id="adjective"
        name="adjective"
        value={formData.adjective}
        onChange={handleChange}
        placeholder="adjective"
        />
        <br/>

        <input
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          placeholder="color"
      />
      <br/>
      <button>Get Story</button>
    </form>
  );
};
// end

export default MadlibForm;
