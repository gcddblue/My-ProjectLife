var t = n = 0, count;
$(function(){
	lunbo();
	leftShow();
	menuConrol();
	controlLoad();
	shopValid();
})
//实现图片轮播效果
 function lunbo(){
 	count = $(".source_list a").length;
	$(".source_list a:not(:first-child)").hide();
	$(".img_numb li").click(function(){
		var i = $(this).text() - 1;  //获取li的值
		if(i>=count) return;
		n = i;
		$(".source_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
		$(this).toggleClass("on");
		$(this).siblings().removeClass("on");
	});
	t = setInterval("showImg()", 3000);
	$(".img_animation").hover(function(){
		clearInterval(t);
	}, function(){
		t = setInterval("showImg()", 3000);
	});
 }
 //显示图片
function showImg(){
		n = n >= (count - 1) ? 0 : ++n;  //n的值 0 ，1 ，2 ，3
		$(".img_numb li").eq(n).trigger("click");
	}
//登录注册控制函数
function controlLoad(){
	var Height = $(document).height();
			var Width = $(document).width();
			$("#login_Bg").css({"height":Height,"width":Width});		
			$("#loading").click(function(){
				$("#login_Bg").css("display","block");
				$("#load_form").css("display", "block");
				$(".loading_1").addClass("text_red");
				$(".setting_1").removeClass("text_red");
			});
			$("#setting").click(function(){
				$("#login_Bg").css("display","block");
				$("#load_form1").css("display", "block");
				$(".setting_1").addClass("text_red");
				$(".loading_1").removeClass("text_red");
			});
				$(".close").click(function(){
				$("#login_Bg").css("display","none");
				$("#load_form").css("display", "none");
				$("label.error").empty();
				$(".username").val("");
				$(".password").val("");
				$("#password_again").val("");
				$("#load_form1").css("display", "none");
			});
			$(".loading_1").click(function(){
				$("#load_form1").css("display", "none");
				$("#load_form").css("display", "block");
				$(".loading_1").addClass("text_red");
				$(".setting_1").removeClass("text_red");
				$(".username").val("");
				$(".password").val("");
				$("#password_again").val("");
				$("label.error").empty();
			});
			$(".setting_1").click(function(){
				$("#load_form").css("display", "none");
				$("#load_form1").css("display", "block");	
				$(".loading_1").removeClass("text_red");
				$(".setting_1").addClass("text_red");
				$(".username").val("");
				$(".password").val("");
				$("#password_again").val("");
				$("label.error").empty();
			});

			$(".username").focus(function(){
				$(this).css("border", "1px solid #333333");
			}).blur(function(){
				$(this).css("border", "1px solid #A9A9A9");
			})

			$(".password").focus(function(){
				$(this).css("border", "1px solid #333333");
			}).blur(function(){
				$(this).css("border", "1px solid #A9A9A9");
			})

			$("#password_again").focus(function(){
				$(this).css("border", "1px solid #333333");
			}).blur(function(){
				$(this).css("border", "1px solid #A9A9A9");
			})
}
//注册登录前台验证
function shopValid(){
	$("#form").validate({
				rules:{
					username:{
						required:true,
						rangelength:[2, 10]
					},
					password:{
						required:true,
						rangelength:[6, 16]
					}
				},
				messages:{
					username:{
						required:"请输入用户名！",
						rangelength:"用户名长度为2-10位！"
					},
					password:{
						required:"请输入密码！",
						rangelength:"密码长度为6-16位！"
					}
				}
			});

			$("#form1").validate({
				rules:{
					username_new:{
						required:true,
						rangelength:[2,10]
					},
					password_new:{
						required:true,
						rangelength:[6, 16]
					},
					psd_again:{
						equalTo:"#set_psd"
					}
				},
				messages:{
					username_new:{
						required:"请输入注册账号！",
						rangelength:"注意注册账号长度为2-10位！"
					},
					password_new:{
						required:"请输入注册密码",
						rangelength:"注意注册密码长度为6-16位！"
					},
					psd_again:{
						equalTo:"两次输入密码不一致！"
					}
				}
			})
}
//左边菜单显示
function leftShow(){
	$(".menu_list1 li").hover(function(){
				var index = $(this).index(".menu_list1 li");
				$(this).addClass("menu_hover").siblings().removeClass("menu_hover");	
				$(".menu_content .menu_text ul li").first().text("热门手机 >");
				$(".menu_content .menu_text ul li").first().prepend((parseInt(index)+1));
				$(".menu_content").css("display", "block");

		},function(){});
			$(".content_all").mouseleave(function(){
			
				$(".menu_list1 li").removeClass("menu_hover");
				$(".menu_content").fadeOut();
			});
}
//滚动菜单栏设计
function menuConrol(){
	$(window).scroll(function(){
				var top = $(document).scrollTop();
				var firstTop = $("#floor1").offset().top;
				if(top>firstTop-200)
				{
					$("#scoll").fadeIn();
				}
				else{$("#scoll").fadeOut();}
				var items = $(".sortfood").find(".floor");
				var currentId = "";
				items.each(function(){
					var top1 = $(this).offset().top;
					if(top>top1-150)
					{
						currentId = "#" + $(this).attr("id");
					}
					else {return false;}
					var linkclass = $("#scoll").find(".red");
					if(currentId && linkclass.attr("href")!=currentId)
					{
						linkclass.removeClass("red");
						$("#scoll").find("[href="+currentId+"]").addClass("red");
					}
				});
			});
			$(".menu_Scoll .top1").click(function(){
					$("html,body").animate({scrollTop:0}, 500);
				});
}
