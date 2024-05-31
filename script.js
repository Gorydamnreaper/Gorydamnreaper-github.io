function saveDescription(id) {
    const description = document.getElementById(id).value;
    localStorage.setItem(id, description);
}

function loadDescriptions() {
    const descriptions = ['orone-description', 'lillith-description', 'gojukong-description', 'bodhi-description', 'genzo-description'];
    descriptions.forEach(id => {
        const description = localStorage.getItem(id);
        if (description) {
            document.getElementById(id).value = description;
        }
    });
}

document.addEventListener('DOMContentLoaded', loadDescriptions);
