async function setOnline() {
    const user = (await client.auth.getUser()).data.user;

    await client.from('profiles').update({
        status: 'online',
        last_seen: new Date()
    }).eq('id', user.id);
}

async function setOffline() {
    const user = (await client.auth.getUser()).data.user;

    await client.from('profiles').update({
        status: 'offline',
        last_seen: new Date()
    }).eq('id', user.id);
}

window.addEventListener("load", setOnline);
window.addEventListener("beforeunload", setOffline);
