// ---- 1. EYE TOGGLE (show/hide password) ----
const toggle = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

toggle.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggle.classList.remove("fa-eye");
    toggle.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggle.classList.remove("fa-eye-slash");
    toggle.classList.add("fa-eye");
  }
});

//----login fetch ---
const signinBtn = document.getElementById("signin-btn");
const message = document.getElementById("message");

signinBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = passwordInput.value;

  // show loading state and animation spin and spinner icon
  signinBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Signing in...';
  signinBtn.disabled = true;

  try {
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token); // save the token
      message.textContent = "Login successful!";
      message.style.color = "green";
    } else {
      message.textContent = data.error; // "Invalid email or password"
      message.style.color = "red";
    }
  } catch (err) {
    console.log(err);
    message.textContent = "Something went wrong.";
    message.style.color = "red";
  } finally {
    // reset the button whether it worked or not
    signinBtn.innerHTML =
      '<i class="fa-solid fa-right-to-bracket"></i> Sign In';
    signinBtn.disabled = false;
  }
});
