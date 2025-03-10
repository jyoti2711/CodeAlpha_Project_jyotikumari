function openModal(imageUrl) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
  
    modal.style.display = 'flex'; // Use flex for centering
    modalImage.src = imageUrl;
  }
  
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  function deleteImage(button) {
    const imageContainer = button.parentElement; // Gets the parent <div> of the button
    imageContainer.remove(); // Removes the <div> containing the image and button
}
  