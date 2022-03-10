chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0

    chrome.storage.local.set({
      timer: time + 1,
    })
    //Badge Text
    chrome.action.setBadgeText({
      text: `${time + 1}`,
    })

    chrome.storage.sync.get(["interval"], (res) => {
      const interval = res.interval ?? 1000
      if (time % interval == 0) {
        this.registration.showNotification("Chrome Timer Extensions", {
          body: `${interval} seconds has passed`,
          icon: "icons.png",
        })
      }
    })
  })
})
