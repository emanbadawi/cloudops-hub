
// CloudOps Hub - Application Logic

// Select the EC2 metadata elements
const instanceId = document.getElementById("instance-id");
const availabilityZone = document.getElementById("availability-zone");
const privateIp = document.getElementById("private-ip");

// Display a temporary message until AWS metadata is connected
function showMetadataStatus() {
    instanceId.textContent = "Not connected yet";
    availabilityZone.textContent = "Not connected yet";
    privateIp.textContent = "Not connected yet";
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showMetadataStatus();

    console.log("CloudOps Hub loaded successfully!");
});
