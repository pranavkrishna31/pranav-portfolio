import { useState } from "react";
import toast from "react-hot-toast";

function BuildPage() {

  const [loading, setLoading] = useState(false);

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

    const lastSubmission =
  localStorage.getItem(
    "buildCooldown"
  );

if (lastSubmission) {

  const currentTime = Date.now();

  const difference =
    currentTime - Number(lastSubmission);

  if (difference < 30000) {

    toast.error(
      "Please wait 30 seconds before submitting again."
    );

    return;

  }

}
    if (loading) return;

    if (
      !buildForm.name ||
      !buildForm.startup_name ||
      !buildForm.email ||
      !buildForm.project_type ||
      !buildForm.message
    ) {

      toast.error("Please fill all fields.");
      return;

    }

    setLoading(true);

    try {

      const response = await fetch(
        "https://pranav-portfolio-1vp5.onrender.com/build",
        //"http://localhost:5000/build",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(buildForm),
        }
      );

      const data = await response.json();

      toast.success(data.message);

      localStorage.setItem(
  "buildCooldown",
  Date.now()
);

      setBuildForm({

        name: "",
        startup_name: "",
        email: "",
        project_type: "",
        message: "",

      });

    } catch (error) {

      console.log(error);

      toast.error(
        "Something went wrong."
      );

    } finally {

      setTimeout(() => {

  setLoading(false);

}, 2200);

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
  className={
    loading
      ? "build-btn loading"
      : "build-btn"
  }
  disabled={loading}
>

  <span>
    {
      loading
        ? "Building..."
        : "Let's Build"
    }
  </span>

</button>

        </form>

      </div>

    </div>

  );

}

export default BuildPage;