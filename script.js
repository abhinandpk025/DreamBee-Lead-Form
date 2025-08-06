document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = {
    studentName: form.studentName.value.trim(),
    parentName: form.parentName.value.trim(),
    mobNumber: form.mobNumber.value.trim(),
    department: form.department.value,
    remarks: form.remarks.value.trim(),
    collectedBy: form.collectedBy.value
  };

  fetch("https://script.google.com/macros/s/AKfycbyTIyNvJQt-d3FJ7zsuOUdDpVIaPv0lsPwNQuRitMbfYd8pdsJl6fReBIVswh_j3wwN9A/exec", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(response => {
    document.getElementById("response").innerText = response;
    form.reset();
  })
  .catch(err => {
    console.error(err);
    document.getElementById("response").innerText = "Something went wrong!";
  });
});
