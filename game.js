// Kiểm tra Login
function checkLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "Admin" && pass === "12345") {
        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("eduCenter").classList.remove("hidden");
    } else {
        document.getElementById("loginError").classList.remove("hidden");
    }
}

// Chuyển từ Menu vào Game Khăn Đỏ
function chooseGame(gameName) {
    if(gameName === 'red-hood') {
        document.getElementById("eduCenter").classList.add("hidden");
        document.getElementById("playScreen").classList.remove("hidden");
        level = 0; score = 0;
        loadLevel();
    }
}

// Quay lại Menu từ Game
function backToMenu() {
    document.getElementById("playScreen").classList.add("hidden");
    document.getElementById("eduCenter").classList.remove("hidden");
}

// ... Các hàm loadLevel, correct, lose giữ nguyên như bản chọn A B C ...