$(function(){"use strict";!function($,window,undefined){function fixMinContentHeight(){var a=$(window).height(),b=$(".top-nav").height(),c=$(".bottom-nav").height(),d=$(".page-title").height(),e=a;b&&(e-=b),c&&(e-=c),d&&(e-=d),e-=32,$(".main-container").css({"min-height":e+"px"})}var rocketDashboard=window.rocketDashboard=window.rocketDashboard||{},rocketDashboardConfig={scrollColor:"#2980b9"};Messenger.options={extraClasses:"messenger-fixed messenger-on-bottom messenger-on-right",theme:"flat"};var spinnerOptions={lines:7,length:4,width:5,radius:9,corners:.7,rotate:25,direction:1,color:"#000",speed:1.6,trail:91,shadow:!0,hwaccel:!1,className:"spinner",zIndex:2e9,top:"50%",left:"50%",backdropColor:"#000",backdropOpacity:.1};rocketDashboard.Utils={containerCollapse:function(a,b,c){$(a).each(function(a,d){$(d).find(b).on("click",function(a){a.preventDefault();var b=$(this),d=b.parents('[class$="-header"]'),e=d.next(),f=e.next(),g=d.parent();c&&b.find("i").toggleClass("fa-minus fa-plus"),e.slideToggle(function(){g.toggleClass("container-collapsed")}),f&&f.slideToggle()})})},containerRemove:function(a,b){$(a).each(function(a,c){$(c).find(b).on("click",function(a){a.preventDefault();var b=$(this),c=b.parents('[class$="-header"]'),d=c.parent();d.css("position","relative").animate({left:"15px",opacity:"0"},function(){d.remove()})})})},containerStick:function(a){if($(a).length>0)var b=$(a).offset().top;$(window).scroll(function(){var c=$(window).scrollTop();c>b?($(a).css({position:"fixed",top:0}).addClass("scrolling"),$(".sidebar-fixed")&&$(".top-nav-fixed")&&0===$(".bottom-nav-fixed").length&&$(".sidebar-fixed").css({marginTop:$(".top-nav-fixed").height()}),$(".sidebar-fixed")&&$(".bottom-nav-fixed")&&0===$(".top-nav-fixed").length&&$(".sidebar-fixed").css({marginTop:$(".bottom-nav-fixed").height()}),$(".sidebar-fixed")&&$(".top-nav-fixed")&&$(".bottom-nav-fixed")&&($(".bottom-nav-fixed").css({marginTop:$(".top-nav-fixed").height()}),$(".sidebar-fixed").css({marginTop:$(".top-nav-fixed").height()+$(".bottom-nav-fixed").height()}))):($(a).css("position","static").removeClass("scrolling"),$(".sidebar-fixed")&&$(".top-nav-fixed")&&0===$(".bottom-nav-fixed").length&&$(".sidebar-fixed").css({marginTop:0}),$(".sidebar-fixed")&&$(".bottom-nav-fixed")&&0===$(".top-nav-fixed").length&&$(".sidebar-fixed").css({marginTop:0}),$(".sidebar-fixed")&&$(".top-nav-fixed")&&$(".bottom-nav-fixed")&&$(".bottom-nav-fixed, .sidebar-fixed").css({marginTop:0}))})},addAjaxLoader:function(a){return a.find("."+spinnerOptions.className).length>0?!1:(a.prepend('<div class="'+spinnerOptions.className+'-backdrop">'),a.find("."+spinnerOptions.className+"-backdrop").css({width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:10,backgroundColor:spinnerOptions.backdropColor,opacity:spinnerOptions.backdropOpacity}),void a.css("position","relative").spin(spinnerOptions))},removeAjaxLoader:function(a){a.spin(!1),a.find("."+spinnerOptions.className+"-backdrop").remove()},tableCollapse:function(a,b,c,d,e){$(a).find(b).on("click",function(){$(this).find("i").toggleClass(d+" "+e),$(this).parents("tr").next(c).slideToggle()})}},rocketDashboard.Apps={},rocketDashboard.Pages={},rocketDashboard.Main=function(){return{init:function(){fixMinContentHeight(),$(".top-nav .dropdown-holder").slimScroll({height:"250px",distance:"6px",color:rocketDashboardConfig.scrollColor}),$(".navmenu .navmenu-holder").slimScroll({height:"100%",distance:"6px",color:rocketDashboardConfig.scrollColor}),rocketDashboard.Utils.containerStick(".top-nav-fixed, .bottom-nav-fixed, .sidebar-fixed"),$(".sidebar-fixed")&&$(".sidebar-fixed").slimScroll({height:"100%",distance:"12px",color:rocketDashboardConfig.scrollColor}),$('*[data-toggle="tooltip"]').tooltip(),rocketDashboard.Utils.containerCollapse(".box, .widget, .tile",".collapse-toggle",!0),rocketDashboard.Utils.containerRemove(".box, .widget, .tile",".remove-trigger"),$('*[data-toggle="tab"]').on("shown.bs.tab",function(){var tabContainerId=$(this).attr("href"),$container=$(tabContainerId),$chart=$container.find("svg"),$chartParent=$chart.parent();if($chart.length>0){var chart=$chartParent.data("chart");eval(chart+".redraw()")}}),$(".panel-group").on("show.bs.collapse",function(){var a=$(this),b=a.find("svg");b.length>0&&b.hide()}),$(".panel-group").on("shown.bs.collapse",function(){var $container=$(this),$chart=$container.find(".panel-collapse:visible").find("svg"),$chartParent=$chart.parent();if($chart.length>0){var chart=$chartParent.data("chart");$chart.fadeIn(),eval(chart+".redraw()")}}),rocketDashboard.Utils.tableCollapse(".table-collapse",".row-collapsed-trigger",".row-collapsed","fa-plus-square","fa-minus-square")}()}}()}(jQuery,window)});