/**
 * LogoControl
 *
 * @author Bo Zhao (jakobzhao[at]gmail.com)
 * @organization Center for Geographic Analysis, Harvard University
 * @contact http://cga-3.hmdc.harvard.edu/timeslider/
 * @license Apache License 2.0, and free for academic use.
 * @version 0.5.1
 * @since May 31, 2009
 * @dependencies Google Maps API v2+
 *
 * Usage Notes: To add your customized logo onto Google Map, and point a link to the logo.
 * The logo of CGA is provided by Wendy Guan (wguan[at]cga.harvard.edu).
 *
 **/

function LogoControl(logoOptions) {
	LogoControl.prototype.initialize = function(map) {
		var logo = document.createElement("span");
		if(logoOptions == undefined)logoOptions = new Object();
		if(logoOptions.url == null) logoOptions.url = "http://www.gis.harvard.edu";
		if(logoOptions.img == null) logoOptions.img = "CGA_logo.png";
		
		map.termsDiv_ = map.getContainer().childNodes[1];
		map.termsDiv_.insertBefore(logo,map.termsDiv_.firstChild);
		logo.innerHTML = '<img style="cursor:pointer" onclick="window.location.href = \''+logoOptions.url+'\'" src=' + logoOptions.img +' />&nbsp;&nbsp;&nbsp;';
    return logo;
  }
}

LogoControl.prototype = new GControl();