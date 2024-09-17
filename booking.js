document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const reminderTime = 60; // مدة التذكير بالافتراضي 60 دقيقة
    
    const appointment = `${name} - ${date} - ${time}`;
    
    const li = document.createElement('li');
    li.textContent = appointment;
    
    document.getElementById('appointmentsList').appendChild(li);
    
    document.getElementById('appointmentForm').reset();
    
    // إقفال الموعد بعد تحديده
    document.getElementById('date').disabled = true;
    document.getElementById('time').disabled = true;
    
    // إرسال تذكير بالبريد الإلكتروني (محاكاة)
    setTimeout(() => {
        alert(`تذكير: لديك موعد حلاقة بعد ${reminderTime} دقيقة. الاسم: ${name}, التاريخ: ${date}, الوقت: ${time}`);
    }, reminderTime * 60000); // تحويل الدقائق إلى مللي ثانية
});
