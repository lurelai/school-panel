// set database connection
require('./src/database/db').connection().then(e=>{
	console.log(e)
}).catch(err=>{
	console.log(err)
});

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());


// External routes
require('./src/routes/student-route')(app);
require('./src/routes/admin-route')(app);
require('./src/routes/table-route')(app);



app.get('/', (req, res)=>{
	return res.send('okay');
});

app.listen(8000, ()=>{ console.log("Server on") });

