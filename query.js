(function(){
	"use strict";
	var app = {
		// getJsonData: function(){
		// 	$.getJson("JSON/carousel.json", function(data){
		// 		console.log(data);
		// 	});
		// },
		// var jsonData;

		bind: function(){
			$("#btnSubmit").click(function(event){
				event.preventDefault();
				var name = $("#txtName").val();
				var pswd = $("#txtPwd").val();
				var cfPwd = $("#txtCnfPwd").val();
				var email = $("#txtEmail").val();
				var website = $("#txtWebsite").val();
				var bUnit = "";
				bUnit += $(".sCheckBox:checked").val();

				var validation = false;

				if(name.length == 0){
					$("#lblName").removeClass("hideDisplay").addClass("errorLabel");
				}
				if(pswd.length == 0){
					$("#lblPwd").removeClass("hideDisplay").addClass("errorLabel");
				}
				if(cfPwd.length == 0 || (pswd != cfPwd)){
					$("#lblCnfPwd").removeClass("hideDisplay").addClass("errorLabel");
				}
				if(email.length == 0 || !(app.validateEmail(email))){
					$("#lblEmail").removeClass("hideDisplay").addClass("errorLabel");
					validation = false;
				}else{
					validation = true;
				}
				// if(website.length == 0 || !(app.validateWebUrl(website))){
				// 	$("#lblWebSite").removeClass("hideDisplay").addClass("errorLabel");
				// 	validation = false;
				// }else{
				// 	validation = true;
				// }
				if(validation){
					var motu = {"name": name, "pwd":pswd, "cfPwd":cfPwd, "email":email, "website":website, "bunit" : bUnit};
					$("#formConfirm").addClass("formSubmitConfirm").removeClass("hideDisplay");
					console.log(motu);
				}



			});

			$(".sCheckBox").click(function(event){
				var flag = false;
				var isChecked = $(this).prop("checked");
				if(isChecked){
					$("#sSapient").prop("checked", "true");
				}else{
					$(".sCheckBox").each(function (i) {
                		if($(this).prop("checked")){
                			flag = true;
                			return false;
                		}
           			});

					if(flag){
						$("#sSapient").prop("checked", true);
					}else{
						$("#sSapient").prop("checked", false);
					}
				}
			});

			$.getJSON("carousel-data.json", function(data){
				
			});

		},

		validateEmail: function(email) {
  			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  			return re.test(email);
		},

		validateWebUrl: function(webUrl){
			var re = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
			return re.test(webUrl);
		}

	};
// Document.ready shorthand
	$(function(){
		app.bind();
	});	
})();