const { app } = require('./app');

// Create a server listner for port 3000
const PORT = process.env.PORT || 3000;

// On start up, log the message "Server up and listening on port XXXX in XXXX mode"
app.listen(PORT, () => console.log(`Server up and listening on port ${PORT} in ${app.get('env')} mode`));
