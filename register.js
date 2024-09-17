document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const email = document.getElementById('email').value;
    const accountType = document.getElementById('accountType').value;
    
    // تسجيل المستخدم الجديد
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: newUsername, password: newPassword, email: email, accountType: accountType });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert(`تم إنشاء حساب ${accountType} بنجاح!`);
    window.location.href = 'login.html';
});
