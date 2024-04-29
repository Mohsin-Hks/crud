document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const users = {
        'admin': { password: 'adminpassword', role: 'admin' },
        'user': { password: 'userpassword', role: 'user' }
    };
    if (users[username] && users[username].password === password) {
        localStorage.setItem('user', JSON.stringify({ username: username, role: users[username].role }));
        if (users[username].role === 'admin') {
            window.location.href = './admin.html';
        } else {
            window.location.href = './user.html';
        }
    } else {
        alert('Invalid Credentials!');
    }
});