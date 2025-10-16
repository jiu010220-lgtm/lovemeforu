function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    
    // Format time
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
    
    // Format date
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];
    const date = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${dayOfWeek}요일`;
    dateElement.textContent = date;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime();
