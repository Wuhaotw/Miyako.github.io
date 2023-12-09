var images = ['image/F_EARhTWIAAH6vB.jpg', 'image/F8o43AAaYAAUuMl.jpg','image/F_IqFgzakAADO9O.jpg','image/F_NgpQZbIAAfUyM.jpg','image/F_S962BaMAAu18i.jpg','image/F_YKAimaoAAoWCo.jpg'
,'image/F0e7XmqaIAAzen3.jpg','image/F0glfJwaUAAg6bI.jpg','image/F0oHWGkaQAA1b_B.jpg','image/F1KIhn4aUAAdpFc.jpg','image/F1sLIpCaUAISal2.jpg','image/F2c7tjtagAAcDw0.jpg',
'image/F4h5o9kaQAA3Pq-.jpg','image/F5j-Tola0AAo6uO.jpg','image/F7wIVYebgAAoFrF.jpg','image/F8T0MfMa4AAserC.jpg','image/F8eVWywaUAAhxPg.jpg','image/F8TpRv5b0AAg_IF.jpg',
'image/F-IbvK4bAAAnmz5.jpg','image/Fxm-zVvaEAAN98v.jpg','image/Fy1HrOmagAANyY8.jpg','image/Fy085T8aAAMrSP1.jpg','image/Fy-CTzZaAAAXUMY.jpg','image/Fz3F7FraMAIa9dy.jpg'
,'image/FzcK2YAaQAEqgV9.jpg','image/FznDH3iWwAE0sxL.jpg','image/FzuA_bCakAInCFK.jpg','image/GAJk8GHboAAJti7.jpg','image/GAQSTEyasAAzQX8.jpg'];
var imgElement = document.getElementById('randomImage');
var button = document.getElementById('Button'); // Corrected variable name

function generateRandomImage() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var url = images[randomIndex];
    imgElement.style.display = 'block';
    imgElement.src = url;
    console.log(url);
}

button.addEventListener('click', generateRandomImage); // Corrected variable name


