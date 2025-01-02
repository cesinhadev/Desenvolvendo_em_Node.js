const upload = document.getElementById('form-upload');
const arquivo = document.getElementById('arquivo').files[0];

try
{ upload.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('arquivo', arquivo);
    fetch('http://localhost:3000/upload', {
        method:'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('resultado').textContent = data;
    });
})
} catch(e){
    console.log('Error:', e );
    document.getElementById('resultado').textContent = 'Ocorreu um erro ao enviar o arquivo';
}