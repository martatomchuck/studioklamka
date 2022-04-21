function sendMessage(event) {
    event.preventDefault();

    // zapis danych przesłanych przez użytkownika w bazie danych localStorage
    var name = document.getElementById('name').value;
    localStorage.setItem('name', name);

    var phoneNumber = document.getElementById('phone-number').value;
    localStorage.setItem('phone-number', phoneNumber);

    var meetingDate = document.getElementById('meeting-date').value;
    localStorage.setItem('meeting-date', meetingDate);

    var area = document.getElementById('area').value;
    localStorage.setItem('area', area);

    // czyszczenie formularza
    document.getElementById('form').reset();

    // wiadomość dla użytkownika potwierdzająca wysłanie danych z formularza
    alert(`Dziękujemy ${name}, Twoja wiadomość została wysłana! Wkrótce do Ciebie zadzwonimy. Dziękujemy za Twoją cierpliwość. Pozdrawiamy, Studio Klamka.`);
}