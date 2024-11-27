const dropBox = document.querySelector('.drop-box');
  const fileInput = document.getElementById('fileInput');
  dropBox.addEventListener('click', () => {
    fileInput.click(); 
  });

  fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    console.log('Selected files:', files);
  });

  const tBody = document.querySelector("tbody");
  let array = [];
  function drawTable(arr){
    tBody.innerHTML = ""
    arr.forEach((item)=>{
      tBody.innerHTML+= `
      <tr>
      <th><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;"></th>
          <th>${item.name}</th>
          <th>${item.size}</th>
          <th><i class="fa-solid fa-ban"></i></th>
        </tr>
      `
    })
  }


  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];  
    if (file && file.type.startsWith("image")) {
      const reader = new FileReader();  
      reader.onload = function (e) {
        const fileData = {
          image: e.target.result,
          name: file.name,
          size: (file.size/1024).toFixed(2) + "KB",
        }  
        array.push(fileData);
        drawTable(array)
      };
      reader.readAsDataURL(file);
    } 
  });

  const remove = document.querySelector('.remove');

  remove.addEventListener("click", function(){
    array = [];
    drawTable(array);
  })

