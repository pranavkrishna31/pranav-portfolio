import { useState } from "react";

function BuildPage() {

  const [buildForm, setBuildForm] = useState({

    name: "",
    startup_name: "",
    email: "",
    project_type: "",
    message: "",

  });

  const handleBuildChange = (e) => {

    setBuildForm({
      ...buildForm,
      [e.target.name]: e.target.value,
    });

  };

  const submitBuildForm = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/build",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(buildForm),
        }
      );

      const data = await response.json();

      alert(data.message);

    } catch (error) {

      console.log(error);

      alert("Submission failed");

    }

  };

  return (

    <div className="hire-page">

      <div className="hire-container">

        <h1>Let's Build</h1>

        <p>
          Open to startup collaborations,
          backend systems,
          recommendation platforms,
          analytics products,
          and engineering experiments.
        </p>

        <form
          className="hire-form"
          onSubmit={submitBuildForm}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={buildForm.name}
            onChange={handleBuildChange}
          />

          <input
            type="text"
            name="startup_name"
            placeholder="Startup / Company"
            value={buildForm.startup_name}
            onChange={handleBuildChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={buildForm.email}
            onChange={handleBuildChange}
          />

          <input
            type="text"
            name="project_type"
            placeholder="Project Type"
            value={buildForm.project_type}
            onChange={handleBuildChange}
          />

          <textarea
            name="message"
            placeholder="Tell me about the idea..."
            value={buildForm.message}
            onChange={handleBuildChange}
          ></textarea>

<button
  type="submit"
  className="build-btn"
>
  Let's Build
</button>

        </form>

      </div>

    </div>

  );

}

export default BuildPage;