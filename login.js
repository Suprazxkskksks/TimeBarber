document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // تحقق من بيانات المستخدم
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        if (user.accountType === 'barber') {
            window.location.href = 'search.html';
        } else {
            window.location.href = 'booking.html';
        }
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
});
