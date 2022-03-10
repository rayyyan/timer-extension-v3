const nameInput = document.getElementById("name-input")
const saveBtn = document.getElementById("save-btn")
const intervalInput = document.getElementById("interval-input")
saveBtn.addEventListener("click", () => {
  const name = nameInput.value
  const interval = intervalInput.value
  chrome.storage.sync.set(
    {
      name,
      interval,
    },
    () => {
      console.log("name and interval is set")
    }
  )
})
chrome.storage.sync.get(["name", "interval"], (res) => {
  nameInput.value = res.name ?? 0
  intervalInput.value = res.interval ?? 1000
})
