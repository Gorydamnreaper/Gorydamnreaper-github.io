// Save character description to local storage
function saveDescription(id) {
    const description = document.getElementById(id).value;
    localStorage.setItem(id, description);
}

// Load character descriptions from local storage on page load
function loadDescriptions() {
    const descriptions = ['orone-description', 'lillith-description', 'gojukong-description', 'bodhi-description', 'genzo-description'];
    descriptions.forEach(id => {
        const description = localStorage.getItem(id);
        if (description) {
            document.getElementById(id).value = description;
        }
    });
}

// Ensure descriptions are loaded when the document is ready
document.addEventListener('DOMContentLoaded', loadDescriptions);

// Function to add a new session log
function addSessionLog() {
    const content = document.getElementById('new-log-content').value;
    if (content.trim()) {
        const sessionLogList = document.getElementById('session-log-list');
        const newLog = document.createElement('div');
        newLog.className = 'session-log';
        const logTitle = document.createElement('h3');
        logTitle.textContent = `Session ${sessionLogList.children.length + 1}: New Entry`;
        const logContent = document.createElement('p');
        logContent.textContent = content;

        newLog.appendChild(logTitle);
        newLog.appendChild(logContent);
        sessionLogList.appendChild(newLog);

        document.getElementById('new-log-content').value = ''; // Clear the textarea
    }
}
