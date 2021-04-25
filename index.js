// App starts by adding a Manager
const Questions = require ('./src/questions');
// Welcome user with some ASCI art from https://dev.to/deadlybyte/easter-egg-hunt-anyone-add-ascii-art-to-the-console-log-4emg
console.log('██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗\n\██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝\n\██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗\n\██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝\n\╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗\n\ ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝\n\ ');
Questions.addManager();