document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('MyForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const radius = parseFloat(document.getElementById('radius').value);

        if (!isNaN(radius)) {
            const volume = (4/3) * Math.PI * Math.pow(radius, 3);
            document.getElementById('volume').value = volume.toFixed(2);
        } else {
            alert('Please enter a valid number for the radius.');
        }
    });
});
