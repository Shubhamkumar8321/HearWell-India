const popupForm = document.getElementById("popupForm");
const closeFormBtn = document.getElementById("closeFormBtn");
const popupFormContent = document.getElementById("popupFormContent");
const thankYouPopup = document.getElementById("thankYouPopup");
const userNameDisplay = document.getElementById("userName");
const closeThankYouPopup = document.getElementById("closeThankYouPopup");
const phoneInput = document.getElementById("phone");

// ✅ Select ALL links/buttons with class "open-form"
const openFormLinks = document.querySelectorAll(".open-form");

// ✅ Loop and attach click event to each
openFormLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    popupForm.style.display = "flex";
  });
});

// Close the popup form
closeFormBtn.onclick = function () {
  popupForm.style.display = "none";
};

// Handle form submission
popupFormContent.onsubmit = async function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = phoneInput.value.trim();

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  const response = await fetch("https://hkdk.events/98onfupn6vioe0", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone }),
  });

  if (response.ok) {
    userNameDisplay.textContent = name.toUpperCase();
    popupForm.style.display = "none";
    thankYouPopup.style.display = "flex";
    document.getElementById("name").value = "";
    phoneInput.value = "";
  } else {
    alert("Something went wrong. Please try again.");
  }
};

// Close thank you popup
closeThankYouPopup.onclick = function () {
  thankYouPopup.style.display = "none";
};

thankYouPopup.onclick = function (event) {
  if (event.target === thankYouPopup) {
    thankYouPopup.style.display = "none";
  }
};
