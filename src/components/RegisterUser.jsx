import { Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { LiaSpinnerSolid } from "react-icons/lia";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function RegisterUser({ isOpen, onClose, callback }) {
  const [openModal, setOpenModal] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    img: null,
  });
  const [loginForm, setLoginForm] = useState(false); // Toggle between register and login forms
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setOpenModal(isOpen);
  }, [isOpen]);

  // Handling form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Toggle password visibility
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  // Register form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";
      if (formData.img) {
        const formDataImage = new FormData();
        formDataImage.append("file", formData.img);

        const imageResponse = await axios.post(
          "https://monkfish-app-bxaz5.ondigitalocean.app/api/upload",
          formDataImage,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        imageUrl = `https://jellyfish-app-bcsqh.ondigitalocean.app${imageResponse.data.imagePath}`;
      }

      const finalFormData = { ...formData, img: imageUrl };

      const response = await axios.post(
        "https://monkfish-app-bxaz5.ondigitalocean.app/api/users/register",
        finalFormData
      );

      localStorage.setItem("spike-token", response.data.token);
      localStorage.setItem("spikeId", response.data._id);
      localStorage.setItem("spikeUsername", response.data.username);

      callback();
      window.location.reload();
    } catch (error) {
      console.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://monkfish-app-bxaz5.ondigitalocean.app/api/users/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("spike-token", response.data.token);
      localStorage.setItem("spikeId", response.data._id);
      localStorage.setItem("spikeUsername", response.data.username);

      callback();
      window.location.reload();
    } catch (error) {
      console.error(error?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={openModal}
      className="w-full bg-[#00000070] mx-auto h-[100vh] md:my-auto no-shadow"
      onClose={onClose}
    >
      <Modal.Body className="mx-0 flex items-center justify-center my-auto absolute md:mt-32 transition ease-in-out duration-700 w-full md:overflow-y-hidden">
        {/* Toggle between Register and Login forms */}
        {loginForm ? (
          <form
            onSubmit={handleLogin}
            className="space-y-6 w-full md:w-[50vw] mx-auto px-4 md:px-8 py-8 rounded-xl bg-white"
          >
            <h3 className="text-center text-primary text-xl md:text-2xl font-bold">
              Login
            </h3>

            {/* Email Field */}
            <div>
              <input
                id="email"
                name="email"
                placeholder="eg. spike@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="py-2 px-4 bg-white border-2 outline-none transition ease-in-out duration-300 border-gray-300 rounded-lg w-full focus:outline-none focus:border-purple-600"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="py-2 px-4 bg-white border-2 outline-none transition ease-in-out duration-300 border-gray-300 rounded-lg w-full focus:outline-none focus:border-purple-600"
              />
              <span
                className="absolute top-3 right-4 cursor-pointer"
                onClick={toggleVisibility}
              >
                {isVisible ? <MdVisibilityOff /> : <MdVisibility />}
              </span>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg flex items-center justify-center transition ease-in-out duration-700 hover:bg-purple-600"
                disabled={loading}
              >
                {loading ? <LiaSpinnerSolid className="animate-spin" /> : "Login"}
              </button>
            </div>
            <p className="text-gray-500 text-center text-sm">
              Don't have an account?{" "}
              <span
                onClick={() => setLoginForm(false)}
                className="text-purple-600 font-semibold cursor-pointer"
              >
                Register
              </span>
            </p>
          </form>
        ) : (
          <form
            onSubmit={handleRegister}
            className="space-y-6 w-full md:w-[50vw] mx-auto px-4 md:px-8 py-8 rounded-xl bg-white"
          >
            <h3 className="text-center text-primary text-xl md:text-2xl font-bold">
              Create Account
            </h3>

            {/* Username Field */}
            <div>
              <input
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="py-2 px-4 bg-white border-2 outline-none transition ease-in-out duration-300 border-gray-300 rounded-lg w-full focus:outline-none focus:border-purple-600"
                autoFocus
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                id="email"
                name="email"
                placeholder="eg. spike@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="py-2 px-4 bg-white border-2 outline-none transition ease-in-out duration-300 border-gray-300 rounded-lg w-full focus:outline-none focus:border-purple-600"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="py-2 px-4 bg-white border-2 outline-none transition ease-in-out duration-300 border-gray-300 rounded-lg w-full focus:outline-none focus:border-purple-600"
              />
              <span
                className="absolute top-3 right-4 cursor-pointer"
                onClick={toggleVisibility}
              >
                {isVisible ? <MdVisibilityOff /> : <MdVisibility />}
              </span>
            </div>

            {/* Image Upload Field */}
            <div>
              <input
                id="img"
                name="img"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, img: e.target.files[0] })
                }
                className="py-2 px-4 bg-white border-2 border-gray-300 rounded-lg w-full"
              />
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg flex items-center justify-center transition ease-in-out duration-700 hover:bg-purple-600"
                disabled={loading}
              >
                {loading ? (
                  <LiaSpinnerSolid className="animate-spin" />
                ) : (
                  "Register"
                )}
              </button>
            </div>
            <p className="text-gray-500 text-center text-sm">
              Already have an account?{" "}
              <span
                onClick={() => setLoginForm(true)}
                className="text-purple-600 font-semibold cursor-pointer"
              >
                Login
              </span>
            </p>
          </form>
        )}
      </Modal.Body>
    </Modal>
  );
}
