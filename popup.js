const timeElement = document.getElementById("time")
const nameElement = document.getElementById("name")
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `The time is ${currentTime}`
//Badge Text
chrome.action.setBadgeText(
  {
    text: "Time",
  },
  () => {
    console.log("done with the badge text")
  }
)
chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???"
  nameElement.textContent = `Your name is ${name}`
})
