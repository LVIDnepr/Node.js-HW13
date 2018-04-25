var fs = require("fs");
var nodemailer = require('nodemailer');
let file = "text.txt";
/*Uncoment what u need to use*/
 /////////////////Task#1///////////////////////////////
/*fs.writeFile(file, "Default Text", function(error){
                if(error) throw error; 
                console.log("Задание №1. Содержимое файла:");
                var data = fs.readFileSync(file, "utf8");
                console.log(data); 
});*/
 /////////////////Task#2///////////////////////////////
/* fs.appendFile(file, "\n"+"New Text", function(error){
                if(error) throw error;                 
                console.log("Задание №2. Содержимое файла:");
                var data = fs.readFileSync(file, "utf8");
                console.log(data);  
});*/ 
 /////////////////Task#3///////////////////////////////
/*let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: '', //введите здесь свой email
		pass: 'ADEo1988' //введите здесь свой пароль
	}
});

let mailOptions = {
	from: '', //введите здесь свой email
	to: '',  //введите здесь email куда хотите отправить
	subject: 'Node.js HW13',
	text: 'Successfully'
}
transporter.sendMail(mailOptions, function (err) {
	if(err) return console.log(err);
	console.log('Письмо отправлено');
});*/