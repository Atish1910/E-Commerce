import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, setLoggedInUser }) {
    
    //navigation define here to redirect to other component 
    const navigate = useNavigate();
    
    // form validation, data storeing, binding will take care of below code (react hook forms)
    const { 
        register, 
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm();

    // here i write functaion for when user click on login
    function onLogin(data) {
        // debugger
        // store that data inside  local stoarge
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        // it will check in local storage phone no & pass will availabe or not
        const userExists = storedUsers.find(user => user.phone === data.phoneNo && user.password === data.password);
        
        // it will check only mobile no is exits in local storage or not
        const userPhone = storedUsers.find(user => user.phone === data.phoneNo);
    
        // if user is availabe then run if block
        if (userExists) {
            
            toast.success("Login Successful!"); // show popup 
            localStorage.setItem("isLoggedIn", "true"); 
            localStorage.setItem("loggedInUser", JSON.stringify(userExists));
            navigate("/my-account"); // after successful login we will redrect to my component
            // setIsLoggedIn(true);
            setLoggedInUser(userExists);
        }
        // if user enter incorrect credential run below else block
        else {
            if (!userPhone) {
                toast.error("Your Phone No is not registered. Please register your phone number.");
            } else {
                toast.error("You entered the wrong password.");
            }
        }
    }
    

    return (
        <section className="login_01">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-6 border rounded-3 py-4">
                        <form onSubmit={handleSubmit(onLogin)}>
                            <input 
                                type="number" 
                                className={`form-control mb-3 ${errors.phoneNo ? "input-errors" : ""}`} 
                                placeholder="Enter Phone Number"
                                {...register("phoneNo", {
                                    required: "Phone Number is required",
                                    minLength: { value: 10, message: "Please enter a 10-digit Mobile Number" },
                                    maxLength: { value: 10, message: "Please enter a 10-digit Mobile Number" }
                                    // added validation user can only enter 10 Digits
                                })}
                            />
                            {errors.phoneNo && <p className="text-danger">{errors.phoneNo.message}</p>}

                            <input 
                                type="password" 
                                className={`form-control mb-3 ${errors.password ? "input-errors" : ""}`} 
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}

                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">
                                    {isSubmitting ? "Please Wait..." : "Login"}
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-3">
                            <p>Don't have an account?</p>
                            <button className="btn btn-primary" onClick={() => navigate("/register")}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
