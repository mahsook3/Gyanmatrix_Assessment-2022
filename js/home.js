fetch('user.json')
  .then(response => response.json())
  .then(data => {
    const staffDetails = document.getElementById('staff-details');
    let output = '';
    data.forEach(staff => {
      output += (`
          <div class="card">
            <a href="./staffDetails.html?id=${staff.id}">
              
              <div class="card-body">
                <img src="${staff.image}" class="card-img-top"  alt="${staff.name}">
                <div class="card-title">${staff.name}</div>
              </div>
            </a>
          </div>
      `);
    });
    staffDetails.innerHTML = output;
  })
  .catch(error => console.error(error));