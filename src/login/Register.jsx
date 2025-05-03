import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onRegistration(data) {
    await new Promise((res) => setTimeout(res, 2000)); // Simulate API delay

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add user to local storage
    const newUser = {
      ...data
    };

    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    toast.success("Registration Successful");
    navigate("/login");
  }

  return (
    <>
      <section className="login_01">
        <div className="container">
          <div className="row justify-content-center text-center">
            <h1>Welcome to E-Commerce Registration Application</h1>
            <div className="col-lg-6 border mt-3 py-3">
              <form onSubmit={handleSubmit(onRegistration)}>
                {/* Full Name */}
                <input
                  type="text"
                  className={`mb-3 form-control ${errors.fullName ? "input-errors" : ""}`}
                  placeholder="Enter Full Name"
                  {...register("fullName", { required: "Full Name is required" })}
                />
                {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}

                 {/* Phone Number */}
                 <input
                  type="number"
                  className={`mb-3 form-control ${errors.phone ? "input-errors" : ""}`}
                  placeholder="Enter Phone No"
                  {...register("phone", { required: "Phone number is required",
                    minLength: { value: 10, message: "Please enter a 10-digit Mobile Number" },
                    maxLength: { value: 10, message: "Please enter a 10-digit Mobile Number" }
                   })}
                />
                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                

                {/* Email */}
                <input
                  type="email"
                  className={`mb-3 form-control ${errors.email ? "input-errors" : ""}`}
                  placeholder="Enter Email Id"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}

                {/* Password */}
                <input
                  type="password"
                  className={`mb-3 form-control ${errors.password ? "input-errors" : ""}`}
                  placeholder="Enter Password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
     
                {/* Submit Button */}
                <div className="">
                  <button className="btn btn-success" type="submit">{isSubmitting ? "Please Wait..." : "Submit"}</button>
                  <p className="mb-0 py-2 text-white">Already Have Account?</p>
                  <button className="btn btn-primary" onClick={() => navigate("/")}>login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
