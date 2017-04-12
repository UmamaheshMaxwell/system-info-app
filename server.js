const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow(){
	win = new BrowserWindow({
		width: 600,
		height: 600,
		icon : __dirname + '/img/sysInfo.png'
	})

	win.loadURL(url.format({
		pathname : path.join(__dirname , 'index.html'),
		protocol : 'file',
		slashes : true
	}))

	win.on('closed', () => {
		win = null;
		console.log('Window closed')
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if(process.platform != 'darwin'){
		app.quit();
	}
})