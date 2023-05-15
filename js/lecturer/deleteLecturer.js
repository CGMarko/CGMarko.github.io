function deleteUser(event) {
  event.preventDefault();

  let userId = event.currentTarget.dataset.userId;

  fetch(`https://pra-api.onrender.com/lecturer/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("User deleted successfully.");
        location.reload();
      } else {
        alert("Failed to delete user. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
}
