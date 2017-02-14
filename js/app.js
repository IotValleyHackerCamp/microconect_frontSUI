(function(){
	"use strict";
	var app = {
		apiAdress: "http://	192.168.43.25:3333",
		stateMicro1: $("#stateMicro1"),
		stateMicro2: $("#stateMicro2"),
		stateMicro3: $("#stateMicro3"),

		init:function(){
			console.log("test");
			this.loopRequest();
		},
		loopRequest:function(){
			setInterval(
				()=>$.get("http://127.0.0.1:3333" + "/status")
				.done((data)=>this.displayData(data)),
				1000);
		},

		displayData:function(data){
			/*
			l'on devrais implementer une fonction de templating qui genere autant "d'élement"
			micro-ondes que le table en envoi!
			 -"Amine 3 bieres plus tard et un peu joyeux"*/
			console.log(data.microwaves[2]);
			this.stateMicro1.html(data.microwaves[1]?"en cours d'utilisation":"éteint");
			this.stateMicro2.html(data.microwaves[2]?"en cours d'utilisation":"éteint");
			this.stateMicro3.html(data.microwaves[3]?"en cours d'utilisation":"éteint");
		}
	};
	$(document).ready(function(){
		app.init();
	});
})();