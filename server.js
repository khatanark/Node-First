const express= require('express');
const hbs= require('hbs');
const port = process.env.PORT || 3000;
var app= express();

app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
	res.render('maintainace.hbs');
});

 app.get('/', (req,res)=>{
 	// res.send('<h1>Hello Express!<h1>');
 	//  Sending Json data 
 	
 	res.send({
 		name:'Rohit Khatana'
 		// friends:['Roopal','Chahar','Saadgi','Saahil','Sakshi']
 	});
 });


app.get('/about',(req,res)=>{
	res.render('about.hbs',
		{
			pageTitle: 'About Page',
			currentYear:  new Date().getFullYear()  
		}); 
})

 app.listen(port);
 console.log("Server is starting");
