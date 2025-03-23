// Set the launch date (8 months from now)
const launchDate = new Date();
launchDate.setMonth(launchDate.getMonth() + 8);

// Update the countdown every second
const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = launchDate - now;

  // Calculate days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);

// Email contact form functionality
function sendEmail(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // In a real implementation, you would send these values to your backend
  // For demo purposes, we'll just show a success message
  console.log("Form submitted:", { name, email, subject, message });

  // Show success message
  document.getElementById("successMessage").style.display = "block";

  // Reset the form
  document.getElementById("partnerForm").reset();

  // Hide success message after 5 seconds
  setTimeout(function () {
    document.getElementById("successMessage").style.display = "none";
  }, 5000);

  return false;
}

// Subscribe email functionality
function subscribeEmail(event) {
  event.preventDefault();

  // Get email
  const email = document.getElementById("subscribeEmail").value;

  // In a real implementation, you would send this to your backend
  console.log("Subscription:", { email });

  // Show alert
  alert("Thank you for subscribing! We'll keep you updated on our launch.");

  // Reset the form
  document.getElementById("subscribeForm").reset();

  return false;
}
