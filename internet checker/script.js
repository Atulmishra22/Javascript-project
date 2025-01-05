window.addEventListener("load", checkinternetconnection);

function checkinternetconnection() {
  const status = document.getElementById("status");
  const ip = document.getElementById("ip");
  const net = document.getElementById("net");

  status.textContent = "Checking....";
  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        ip.textContent = data.ip;
        status.textContent = "Connected";
        const connection = navigator.connection;
        const network = connection ? connection.downlink + "Mbps" : "Unknown";
        net.textContent = network;
      })
      .catch(() => {
        status.textContent = "Disconnected";
        ip.textContent = "-";
        net.textContent = "-";
      });
  } else {
    status.textContent = "Disconnected";
    ip.textContent = "-";
    net.textContent = "-";
  }
}
