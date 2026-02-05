// Hàm mở bảng đăng nhập/đăng ký
function openModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Hàm đóng bảng
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Khi người dùng click ra ngoài vùng bảng thì tự đóng
window.onclick = function(event) {
    let modal = document.getElementById('loginModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Hàm xử lý khi ấn nút "Xác nhận" trong bảng đăng nhập
function handleSubmit() {
    const name = document.querySelector('.modal input[type="text"]').value;
    if (name) {
        alert("Chào mừng " + name + " đã đến với lớp học của cô Quỳnh! ✨");
        closeModal();
    } else {
        alert("Cô Quỳnh dặn là phải nhập tên mới vào được lớp nhé! 😊");
    }
}