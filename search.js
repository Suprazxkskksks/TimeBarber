function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: 34.033333, lng: -5.000000 }
    });

    // إضافة مواقع الحلاقين (يمكنك إضافة المزيد من المواقع هنا)
    const barbers = [
        { lat: 34.033333, lng: -5.000000, name: 'حلاق 1' },
        { lat: 34.043333, lng: -5.010000, name: 'حلاق 2' }
    ];

    barbers.forEach(barber => {
        new google.maps.Marker({
            position: { lat: barber.lat, lng: barber.lng },
            map: map,
            title: barber.name
        });
    });
}

function findNearbyBarbers() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: userLocation
            });
            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'موقعك الحالي'
            });

            // البحث عن حلاقين قريبين
            const service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location: userLocation,
                radius: 5000,
                type: ['barber']
            }, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    results.forEach(place => {
                        new google.maps.Marker({
                            position: place.geometry.location,
                            map: map,
                            title: place.name
                        });
                    });
                }
            });
        });
    } else {
        alert('الموقع الجغرافي غير مدعوم في هذا المتصفح.');
    }
}

function searchBarber() {
    const searchQuery = document.getElementById('searchBarber').value.toLowerCase();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const barber = users.find(user => user.accountType === 'barber' && user.username.toLowerCase() === searchQuery);
    
    if (barber) {
        alert(`تم العثور على الحلاق: ${barber.username}`);
    } else {
        alert('لم يتم العثور على الحلاق');
    }
}
