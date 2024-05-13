function validation(form) {
    let result = true;
    return result
}
document.getElementById('exampleModal').addEventListener('submit', function(event) {
event.preventDefault()
if (validation(this) == true) {
    alert('Форма проверена успешно!')
}
})

closed.onmouseover = function() {
    closed.style.background= "#3f5896";
};
    
closed.onmouseleave = function() {
    closed.style.background= "grey";
};

done.onmouseover = function() {
    done.style.background= "#3f5896";
};
    
done.onmouseleave = function() {
    done.style.background= "grey";
};

// кнопки добавления и удаления изабражения 
function addNewImageContent(imageSrc) { 
    const newImageContent = document.createElement('img'); 
    newImageContent.src = imageSrc; 
    newImageContent.classList.add('new-image-content');
    
    const container = document.querySelector('.container');
    container.appendChild(newImageContent);
    
    addedImage = newImageContent;
}  

function removeImageContent() {
    if (addedImage) {
        addedImage.remove();
        addedImage = null;
    } else {
        alert('Нет добавленного изображения для удаления.');
    }
}

function handleAddImageContentButtonClick() {
    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];
    
    if (file) {
        const reader = new FileReader();
    
        reader.onload = function(event) {  
            const imageSrc = event.target.result;
            addNewImageContent(imageSrc);
        };
    
        reader.readAsDataURL(file);
    } else {
        alert('Пожалуйста, выберите изображение для загрузки.');
    }
}

function handleRemoveImageContentButtonClick() { 
    removeImageContent();
}

const addImageContentButton = document.getElementById('addImageContentButton'); 
const removeImageContentButton = document.getElementById('removeImageContentButton');
    
addImageContentButton.addEventListener('click', handleAddImageContentButtonClick); 
removeImageContentButton.addEventListener('click', handleRemoveImageContentButtonClick);
