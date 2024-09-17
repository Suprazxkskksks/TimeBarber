function toggleSettings() {
    const settingsSection = document.getElementById('settingsSection');
    settingsSection.style.display = settingsSection.style.display === 'none' ? 'block' : 'none';
}

function changeLanguage() {
    const language = document.getElementById('language').value;
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
}

function changeTheme() {
    const theme = document.getElementById('theme').value;
    document.body.className = theme;
}

function saveSettings() {
    const reminderTime = document.getElementById('reminderTime').value;
    alert(`تم حفظ الإعدادات. مدة التذكير: ${reminderTime} دقيقة`);
}
