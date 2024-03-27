// Function to fetch ISRO centers data
function fetchISROCenters() {
    return new Promise((resolve, reject) => {
      fetch('https://isro.vercel.app/api/centres')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch ISRO centers');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  // Function to display ISRO centers on the webpage
  function displayISROCenters(data) {
    const centersList = document.getElementById('centers-list');
  
    if (!Array.isArray(data.centres)) {
      console.error('Error: Data.centres is not an array');
      return;
    }
  
    data.centres.forEach(center => {
      const centerCard = document.createElement('div');
      centerCard.classList.add('center-card');
  
      const centerName = document.createElement('div');
      centerName.classList.add('center-name');
      centerName.textContent = center.name;
  
      const centerLocation = document.createElement('div');
      centerLocation.classList.add('center-location');
      centerLocation.textContent = center.location;
  
      centerCard.appendChild(centerName);
      centerCard.appendChild(centerLocation);
  
      centersList.appendChild(centerCard);
    });
  }
  
  // Fetch ISRO centers data and display on the webpage
  fetchISROCenters()
    .then(data => {
      console.log("Data fetched successfully:", data); // Logging to confirm data retrieval
      displayISROCenters(data);
    })
    .catch(error => {
      console.error('Error fetching ISRO centers:', error);
    });
  