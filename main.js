const { app, BrowserWindow } = require("electron")
const notifier = require("node-notifier")

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  win.loadFile("index.html")
}

const NOTIFICATION_TITLE = "Basic Notification"
const NOTIFICATION_BODY = "Notification from the Main process"

function showNotification() {
  new Notification({
    title: NOTIFICATION_TITLE,
    body: NOTIFICATION_BODY,
  }).show()
}

app.whenReady().then(createWindow).then(notifier.notify("message"))

app.setAppUserModelId(process.execPath)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// var onError = function (err, response) {
//   console.error(err, response)
// }

// notifier.notify(
//   {
//     message: "This is the body of the notification.",
//     title: "This will be the title of the notification",
//     // Special sound
//     // Case Sensitive string for location of sound file, or use one of OS X's native sounds
//     // Only Notification Center or Windows Toasters
//     // sound: true,//"Bottle",
//     // The absolute path to the icon of the message
//     // (doesn't work on balloons)
//     // If not found, a system icon will be shown
//     // icon : "C:/images/ocw-logo.png",
//     // Wait with callback (onClick event of the toast), until user action is taken against notification
//     wait: true,
//   },
//   onError
// )

// notifier.on("click", function (notifierObject, options) {
//   // Triggers if `wait: true` and user clicks notification
//   alert("Callback triggered")
// })
