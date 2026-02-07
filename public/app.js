const fetchStatus = () => {
  fetch('/daemonStatus')
    .then(response => response.json())
    .then(data => {
      const output = document.getElementById('status');
      output.innerText = ">> DAEMON STATUS: ACTIVE\n" + JSON.stringify(data, null, 2);
      output.style.borderColor = '#0f0';
      output.style.color = '#0f0';
    })
    .catch(error => {
      console.error(error);
      const output = document.getElementById('status');
      output.innerText = '>> DAEMON SIGNAL LOST\n' + error + '\nRetrying uplink...';
      output.style.borderColor = '#f00';
      output.style.color = '#f00';
      setTimeout(fetchStatus, 5000);
    });
};
fetchStatus();
