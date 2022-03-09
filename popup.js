const timeElement = document.getElementById("time")
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
