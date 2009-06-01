/**
 * LogoControl
 *
 * @author Bo Zhao (jakobzhao[at]gmail.com)
 * @organization Center for Geographic Analysis, Harvard University
 * @contact http://code.google.com/p/cga-gmaps-tools/
 * @license Apache License 2.0, and free for academic use.
 * @version 0.5.1
 * @since May 31, 2009
 * @dependencies Google Maps API v2+
 *
 * Usage Notes: To add your customized logo onto Google Map, and point a link to the logo.
 * The logo of CGA is provided by Wendy Guan (wguan[at]cga.harvard.edu).
 *
 **/
/*
   Copyright 2009 Bo Zhao, jakobzhao [at] gmail.com, 
   Collaborated with Center for Geographic Analysis, Harvard.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

function LogoControl(logoOptions) {
	LogoControl.prototype.initialize = function(map) {
		var logo = document.createElement("span");
		if(logoOptions == undefined)logoOptions = new Object();
		if(logoOptions.url == null) logoOptions.url = "http://www.gis.harvard.edu";
		if(logoOptions.img == null) logoOptions.img = "http://cga-gmaps-tools.googlecode.com/svn/trunk/logo/CGA_logo.png";
		
		map.termsDiv_ = map.getContainer().childNodes[1];
		map.termsDiv_.insertBefore(logo,map.termsDiv_.firstChild);
		logo.innerHTML = '<img style="cursor:pointer" onclick="window.location.href = \''+logoOptions.url+'\'" src=' + logoOptions.img +' />&nbsp;&nbsp;&nbsp;';
    return logo;
  }
}

LogoControl.prototype = new GControl();