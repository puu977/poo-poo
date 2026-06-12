console.log("Server system ready");

// contoh render user dengan status
function renderUser(user) {
    return `
    <div class="user">
        <img src="avatar.png">
        <span class="status-dot ${user.status}"></span>
        <p>${user.username}</p>
    </div>
    `;
}
