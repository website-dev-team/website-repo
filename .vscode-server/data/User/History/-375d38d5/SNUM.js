function logSubmit(event) {
    log.textContent = `Congratulations, you did it! Look out for more information on our services.....Timestamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById("form");
  const log = document.getElementById("log");
  form.addEventListener("submit", logSubmit);
  