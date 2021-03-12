document.addEventListener('DOMContentLoaded', (e) => {
    const editButton = document.getElementById('edit');
    const deleteButton = document.getElementById('delete');
    const id = editButton.value;

    editButton.addEventListener('click', (e) => {
        const data = {
            id: id,
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            city: document.getElementById('city').value
        }
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(() => {
                window.location.href = '/';
            });
    });

    deleteButton.addEventListener('click', (e) => {
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                window.location.href = '/';
            });
    });



});