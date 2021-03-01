function notifyme(){
    var notif = document.getElementById('notif')
    notif.classList.add('show') 
    var inter =  setInterval(() => {
            notif.classList.add('hide')
            notif.classList.remove('show')
            clearInterval(inter)
        }, 5000)

}