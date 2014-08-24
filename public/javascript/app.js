this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p>\n  Welcome to yet another internet experiment.\n</p>\n\n<br>\n\n<p class=big>\n  For any comments, suggestions, or data errors please email <a href=\"mailto:admin@relisten.net\">admin@relisten.net</a>.\n</p>\n\n<br>\n\n<p class=big>\n  Peruse the various bands and enjoy their extensive live catalogues.\n</p>\n\n<br>\n\n<p>\n  This site is powered by Archive.org and Alec Gorge's <a href=\"https://github.com/alecgorge/iguana\">Iguana</a>.\n</p>\n\n<br>\n\n<p>\n  If you'd like to donate, all of the proceeds will go towards the running of this site and others like it. Any extra funds will be donated to Archive.org and The Mockingbird Foundation.\n</p>\n\n<br>\n\n<p>\n<center>\n<form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_blank\">\n<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n<input type=\"hidden\" name=\"encrypted\" value=\"-----BEGIN PKCS7-----MIIHFgYJKoZIhvcNAQcEoIIHBzCCBwMCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYAh11KAHoBFTbiDh9MoFT1ZNklv3yVRAL/xI1WXNO58Prr3sP48LaQYUJIxnO6IumOfvZ4qzAqQe9uwof1Wj6u6F4t2bIX2j2nUTl8oSRFKQBXEp6T+ttXZBX8tF9+mZjhjYp1C6b+LbiBWbnR+aK0S2pQzOqN/6CQSy3neg8pwGTELMAkGBSsOAwIaBQAwgZMGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIU6sIpVoDyTSAcIOU0s5Gg4xrtR3i2/Ax0+7UTc/7+aWmJ5TYVvhwjRaqwmmL9grTmRpbtC1Lco+OTBzpIXXTpI3599m0nzlVwwf/AQ+pFGeqiyy3k5CU4jH01Hp3ahhlOilbNOzM063eIT5fTdPomG8nD5kR9SSwBjegggOHMIIDgzCCAuygAwIBAgIBADANBgkqhkiG9w0BAQUFADCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wHhcNMDQwMjEzMTAxMzE1WhcNMzUwMjEzMTAxMzE1WjCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20wgZ8wDQYJKoZIhvcNAQEBBQADgY0AMIGJAoGBAMFHTt38RMxLXJyO2SmS+Ndl72T7oKJ4u4uw+6awntALWh03PewmIJuzbALScsTS4sZoS1fKciBGoh11gIfHzylvkdNe/hJl66/RGqrj5rFb08sAABNTzDTiqqNpJeBsYs/c2aiGozptX2RlnBktH+SUNpAajW724Nv2Wvhif6sFAgMBAAGjge4wgeswHQYDVR0OBBYEFJaffLvGbxe9WT9S1wob7BDWZJRrMIG7BgNVHSMEgbMwgbCAFJaffLvGbxe9WT9S1wob7BDWZJRroYGUpIGRMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbYIBADAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAIFfOlaagFrl71+jq6OKidbWFSE+Q4FqROvdgIONth+8kSK//Y/4ihuE4Ymvzn5ceE3S/iBSQQMjyvb+s2TWbQYDwcp129OPIbD9epdr4tJOUNiSojw7BHwYRiPh58S1xGlFgHFXwrEBb3dgNbMUa+u4qectsMAXpVHnD9wIyfmHMYIBmjCCAZYCAQEwgZQwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tAgEAMAkGBSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEPFw0xMzA0MDQwNzQwMTVaMCMGCSqGSIb3DQEJBDEWBBTyqz+PT/+DcoUfNIN7gCq1nPjwgDANBgkqhkiG9w0BAQEFAASBgEkz4EmW0MS+MfKFaWfUN2+tspQovr6tlWNmYEj/wBNAhbErRLcVURKVGooF+JI1JtVZkklT2NtPSva2hinpGH1NRGWvlbRYF3vZlhktJhbkwpnOUUlS/IkmmW8Bp8Zsq+duCzC74aC5AM+Qsn6DGxzDELp4qxCWLlaVQlW9KXBp-----END PKCS7-----\n\">\n<input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n<img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n</form>\n</center>\n</p>\n\n<p><center>Bitcoin: 1FQRjYy5hqzeDD5DWThGNzfyy1E2PoNdMC</center></p>\n\n<br>\n<br>\n\n<p>\n  This site complies with Archive.org's <a href=\"https://archive.org/post/261115/hotlinking-allowed\">policy</a>.\n</p>\n\n<p>\n  <i>\n    The Grateful Dead and our managing organizations have long encouraged the purely non-commercial exchange of music taped at our concerts and those of our individual members. That a new medium of distribution has arisen - digital audio files being traded over the Internet - does not change our policy in this regard. Our stipulations regarding digital distribution are merely extensions of those long-standing principles and they are as follow:\n</i>\n</p>\n\n<p>\n  <i>\n    No commercial gain may be sought by websites offering digital files of our music, whether through advertising, exploiting databases compiled from their traffic, or any other means.\n    All participants in such digital exchange acknowledge and respect the copyrights of the performers, writers and publishers of the music.\n  </i>\n</p>\n<p>\n  <i>\n    This notice should be clearly posted on all sites engaged in this activity.\n    We reserve the ability to withdraw our sanction of non-commercial digital music should circumstances arise that compromise our ability to protect and steward the integrity of our work.\n</i>\n</p>\n";
  });

this["JST"]["footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=progress-bar></div>\n<div class=position-bar></div>\n";
  });

this["JST"]["header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " ";
  }

function program3(depth0,data) {
  
  
  return "...";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <a class=\"band\" href=\"/";
  if (stack1 = helpers.slug) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.slug; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  stack1 = helpers['if'].call(depth0, depth0.the, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (stack1 = helpers.bandName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bandName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n      </a>\n      <span class=\"tip\">&nbsp;&nbsp;&lt;- click here for a random show!</span>\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "the ";
  }

  buffer += "<ul class=\"left\">\n  <li class=\"home-container\">\n    <a class=\"home\" href=\"/\">Relisten</a>\n    <span> to";
  stack1 = helpers['if'].call(depth0, depth0.bandName, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n    ";
  stack1 = helpers['if'].call(depth0, depth0.bandName, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"clear\"></div>\n  </li>\n</ul>\n\n<ul class=\"right\">\n    <li><a class=\"about header-link\" href=\"/about\">ABOUT</a></li>\n</ul>\n";
  return buffer;
  });

this["JST"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=row-fluid>\n  <div class=\"span4 years-container\">\n  </div>\n\n  <div class=\"span4 shows-container\">\n  </div>\n\n  <div class=\"span4 songs-container\">\n  </div>\n</div>";
  });

this["JST"]["index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n   <tbody>\n      <tr>\n        <th>\n          <a href=\"/"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n        </th>\n        <td>";
  if (stack2 = helpers.shows) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.shows; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n      </tr>\n   </tbody>\n  ";
  return buffer;
  }

  buffer += "<table>\n   <thead>\n      <tr>\n         <th class=\"heading\">Band</th>\n         <th class=\"heading\">Tapes</th>\n      </tr>\n   </thead>\n   <thead>\n    <tr>\n      <th><a href=\"/grateful-dead\">Grateful Dead</a></th>\n      <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.bands),stack1 == null || stack1 === false ? stack1 : stack1['grateful-dead'])),stack1 == null || stack1 === false ? stack1 : stack1.shows)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    </tr>\n   </thead>\n   <thead>\n    <tr>\n      <th>&nbsp;</th>\n      <td>&nbsp;</td>\n    </tr>\n   </thead>\n   ";
  stack2 = helpers.each.call(depth0, depth0.bands, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</table>\n";
  return buffer;
  });

this["JST"]["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form action=\"/login\" method=\"post\">\n  <input type=hidden value=";
  if (stack1 = helpers.csrf) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.csrf; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " name=_csrf />\n  <div>\n    <label for=email>Email:</label>\n    <input class=email type=\"text\" placeholder=\"Email\" name=\"email\"/>\n  </div>\n  <div>\n    <label for=password>Password:</label>\n    <input class=password type=\"password\" placeholder=\"Password\" name=\"password\"/>\n  </div>\n  <div class=forbutton>\n    <input type=\"submit\" value=\"Login\"/>\n  </div>\n</form>\n";
  return buffer;
  });

this["JST"]["notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<img src=";
  if (stack1 = helpers.img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.img; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " alt='' />";
  return buffer;
  }

  buffer += "<div>\n  <a>×</a>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.img, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n  <p>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>";
  return buffer;
  });

this["JST"]["player"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=player>\n  <div class=info>\n    <h3 class=title></h3>\n    <h4 class=album></h4>\n    <div class=time>\n      <div class=seconds>00:00</div>/<div class=total>00:00</div>\n    </div>\n  </div>\n  <div class=volume-container>\n    <div class=volume></div>\n  </div>\n</div>\n";
  });

this["JST"]["playlist"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<a href=/playlist/"
    + escapeExpression(((stack1 = ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/edit>Edit playlist</a>";
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <tr>\n      <td><p>";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.blurb || depth1.blurb),stack1 ? stack1.call(depth0, ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._blurbs), depth0._id, options) : helperMissing.call(depth0, "blurb", ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._blurbs), depth0._id, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p></td>\n      <td class=second><a data-id=\"";
  if (stack2 = helpers._id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0._id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"/playlist/"
    + escapeExpression(((stack1 = ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.longDay) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.longDay; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.longSlug) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.longSlug; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a> - ";
  if (stack2 = helpers.album) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.album; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n    </tr>\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3> ";
  options = {hash:{
    'compare': (((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._user))
  },inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.if_eq || depth0.if_eq),stack1 ? stack1.call(depth0, depth0.userId, options) : helperMissing.call(depth0, "if_eq", depth0.userId, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<table>\n  ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._songs), {hash:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</table>\n";
  return buffer;
  });

this["JST"]["playlists-edit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <tr>\n        <td><textarea name=blurb[text]>";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.blurb || depth1.blurb),stack1 ? stack1.call(depth0, ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._blurbs), depth0._id, options) : helperMissing.call(depth0, "blurb", ((stack1 = depth1.playlist),stack1 == null || stack1 === false ? stack1 : stack1._blurbs), depth0._id, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</textarea><input type=hidden name=blurb[id] value=";
  if (stack2 = helpers._id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0._id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " /></td>\n        <td class=second><a href=\"/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.longDay) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.longDay; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.longSlug) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.longSlug; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a> - ";
  if (stack2 = helpers.album) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.album; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n      </tr>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  buffer += "<h3>Edit Playlist</h3>\n\n\n<form action=PUT action=/ name=playlist>\n  <div class=name-container>\n    <input name=name class=name value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" /> - <a href=\"/playlist/"
    + escapeExpression(((stack1 = ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">View Playlist</a>\n  </div>\n\n  <table>\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.playlist),stack1 == null || stack1 === false ? stack1 : stack1._songs), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  </table>\n\n  <button type=submit class=save>Save</button>\n  </form>";
  return buffer;
  });

this["JST"]["playlists"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <li><a href=\"/playlist/";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a><div class=count>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.length || depth0.length),stack1 ? stack1.call(depth0, depth0._songs, options) : helperMissing.call(depth0, "length", depth0._songs, options)))
    + "</div></li>\n  ";
  return buffer;
  }

  buffer += "<header>\n  <ul>\n    <li><a href=\"/playlist/new\">nothing atm</a></li>\n  </ul>\n</header>\n\n<ul class=playlists>\n  ";
  stack1 = helpers.each.call(depth0, depth0.playlists, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["JST"]["queue"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <li>\n      <span>[\n        <a href=\"javascript:\" class=delete>x</a>\n      ]</span>\n      <a class=\"song ";
  if (stack1 = helpers.active) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.active; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"/";
  if (stack1 = helpers.band) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.band; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.month) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.month; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.day; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, depth0.showVersion, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (stack1 = helpers.showVersion) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.showVersion; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.slug) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.slug; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n      </a>\n      <span class=\"right\">\n        <span>\n          [";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.len || depth0.len),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "len", depth0, options)))
    + "]\n        </span>\n        <span>\n          [<a href=\"/";
  if (stack2 = helpers.band) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.band; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.day) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.day; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  stack2 = helpers['if'].call(depth0, depth0.showVersion, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  if (stack2 = helpers.showVersion) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.showVersion; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.day) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.day; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>]\n        </span>\n      </span>\n    </li>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "-";
  }

function program4(depth0,data) {
  
  
  return "\n  <button class=save>Save Queue</button>\n";
  }

  buffer += "<ul>\n  ";
  stack1 = helpers.each.call(depth0, depth0.queue, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n<button class=clear>Clear Queue</button>\n";
  stack1 = helpers['if'].call(depth0, depth0.loggedIn, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["register"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form action=\"/register\" method=\"post\">\n  <input type=hidden value=\"";
  if (stack1 = helpers.csrf) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.csrf; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" name=\"_csrf\" />\n  <div>\n    <label for=email>Email:</label>\n    <input class=email type=\"text\" placeholder=\"Email\" name=\"email\"/>\n    <div class=invalid>✘</div>\n  </div>\n  <div>\n    <label for=password>Password:</label>\n    <input class=password type=\"password\" placeholder=\"Password\" name=\"password\"/>\n    <div class=invalid>✘</div>\n  </div>\n  <div class=forbutton>\n    <sup>Password must be at least 6 characters</sup>\n    <br>\n    <input type=\"submit\" value=\"Register\"/>\n  </div>\n</form>\n";
  return buffer;
  });

this["JST"]["shows"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n  <li>\n    <a class=\"show-";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.month) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.month; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "-";
  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.day; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"/"
    + escapeExpression(((stack1 = depth1.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.day) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.day; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n      <span class=date>";
  if (stack2 = helpers.month) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.month; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.addZero || depth0.addZero),stack1 ? stack1.call(depth0, depth0.day, options) : helperMissing.call(depth0, "addZero", depth0.day, options)))
    + "</span>\n      <span class=venue>";
  if (stack2 = helpers.venue_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.venue_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n    </a>\n  </li>\n";
  return buffer;
  }

  buffer += "<div class=ul-header>"
    + escapeExpression(((stack1 = ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n<ul>\n";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.data),stack1 == null || stack1 === false ? stack1 : stack1.shows), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["JST"]["songs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"current-source select-source\">\n      ";
  stack1 = helpers['if'].call(depth0, depth0.taper, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.transferer, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.source, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.lineage, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.avg, {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </li>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<p><span class=\"field\">Taper:</span> ";
  if (stack1 = helpers.taper) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.taper; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<p><span class=\"field\">Transferer:</span> ";
  if (stack1 = helpers.transferer) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.transferer; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<p><span class=\"field\">Source:</span> ";
  if (stack1 = helpers.source) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.source; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<p><span class=\"field\">Lineage:</span> ";
  if (stack1 = helpers.lineage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lineage; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p>Rating: ";
  if (stack1 = helpers.avg) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avg; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.total_reviews) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total_reviews; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " reviews</p>\n      ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li class=\"select-source multiple-sources\">Select another source <span class=total-sources>(";
  if (stack1 = helpers.totalSources) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.totalSources; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ")</span></li>\n    ";
  stack1 = helpers.each.call(depth0, depth0.sources, {hash:{},inverse:self.noop,fn:self.programWithDepth(13, program13, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program13(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, depth0.hidden, {hash:{},inverse:self.programWithDepth(16, program16, data, depth1),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program14(depth0,data) {
  
  
  return "\n      ";
  }

function program16(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <li class=source>\n          <a href=/"
    + escapeExpression(((stack1 = depth2.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth2.year),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth2.month),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth2.day),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack2 = helpers['if'].call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n            ";
  stack2 = helpers['if'].call(depth0, depth0.taper, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  stack2 = helpers['if'].call(depth0, depth0.transferer, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  stack2 = helpers['if'].call(depth0, depth0.source, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  stack2 = helpers['if'].call(depth0, depth0.lineage, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            ";
  stack2 = helpers['if'].call(depth0, depth0.avg, {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </a>\n        </li>\n      ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <p>Rating: ";
  if (stack1 = helpers.avg) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.avg; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.total_reviews) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total_reviews; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " reviews</p>\n            ";
  return buffer;
  }

function program21(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n    <li data-idx="
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " data-song=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n      <a class=\"song "
    + escapeExpression(((stack1 = depth1.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = depth1.year),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = depth1.month),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = depth1.day),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack2 = helpers['if'].call(depth0, depth1.showVersion, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = depth1.showVersion),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-";
  if (stack2 = helpers.slug) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.slug; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\"/"
    + escapeExpression(((stack1 = depth1.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.year),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.month),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.day),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  stack2 = helpers['if'].call(depth0, depth1.showVersion, {hash:{},inverse:self.noop,fn:self.program(22, program22, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = depth1.showVersion),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.slug) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.slug; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " <span class=time>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.len || depth0.len),stack1 ? stack1.call(depth0, depth0, options) : helperMissing.call(depth0, "len", depth0, options)))
    + "</span></a>\n      <div class=play>ᐅ</div>\n      <div title=\"Add To Queue\" class=add>+</div>\n    </li>\n  ";
  return buffer;
  }
function program22(depth0,data) {
  
  
  return "-";
  }

  buffer += "<div class=ul-header>";
  if (stack1 = helpers.month) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.month; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.day; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<ul>\n  ";
  stack1 = helpers['with'].call(depth0, depth0.songs, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, depth0.multipleSources, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.songs),stack1 == null || stack1 === false ? stack1 : stack1.tracks), {hash:{},inverse:self.noop,fn:self.programWithDepth(21, program21, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n  <li><a class=archive href=\"https://archive.org/details/"
    + escapeExpression(((stack1 = ((stack1 = depth0.songs),stack1 == null || stack1 === false ? stack1 : stack1.archive_identifier)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=_blank>View on Archive.org</a></li>\n  <li><a class=add-all href=\"javascript:\">Add All To Queue</a></li>\n</ul>\n";
  return buffer;
  });

this["JST"]["years"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <li>\n    <a href=\"/"
    + escapeExpression(((stack1 = depth1.band),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"year-";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n  </li>\n";
  return buffer;
  }

  buffer += "<div class=ul-header>Choose a year</div>\n<ul>\n";
  stack1 = helpers.each.call(depth0, depth0.years, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });
var addZero, resize, timeToMS, toHHMMSS;

window.App = {
  "Models": {},
  "Collections": {},
  "Views": {},
  "Controllers": {},
  "Router": {},
  "utils": {},
  "bands": {
    "animal-collective": {
      "name": "Animal Collective",
      "shows": 23
    },
    "aqueous": {
      "name": "Aqueous",
      "shows": 58
    },
    "aru": {
      "name": "Aquarium Rescue Unit",
      "shows": 103
    },
    "bela-fleck": {
      "name": "Béla Fleck and the Flecktones",
      "shows": 321
    },
    "ben-kweller": {
      "name": "Ben Kweller",
      "shows": 18
    },
    "duo": {
      "name": "Benevento Russo Duo",
      "the": true,
      "shows": 288
    },
    "bernie-worrell": {
      "name": "Bernie Worrell Orchestra",
      "the": true,
      "shows": 27
    },
    "the-big-wu": {
      "name": "The Big Wu",
      "shows": 252
    },
    "blues-traveler": {
      "name": "Blues Traveler",
      "shows": "1,099"
    },
    "the-breakfast": {
      "name": "The Breakfast",
      "shows": 317
    },
    "weir": {
      "name": "Bob Weir",
      "shows": 80
    },
    "club-d-elf": {
      "name": "Club d'Elf",
      "shows": 523
    },
    "dark-star": {
      "name": "Dark Star Orchestra",
      "shows": 546
    },
    "the-decemberists": {
      "name": "The Decemberists",
      "shows": 74
    },
    "disco-biscuits": {
      "name": "Disco Biscuits",
      "the": true,
      "shows": "1,251"
    },
    "dispatch": {
      "name": "Dispatch",
      "shows": 32
    },
    "dopapod": {
      "name": "Dopapod",
      "shows": 357
    },
    "drive-by-truckers": {
      "name": "Drive-By Truckers",
      "the": true,
      "shows": 680
    },
    "elliott-smith": {
      "name": "Elliott Smith",
      "shows": 81
    },
    "everyone-orchestra": {
      "name": "Everyone Orchestra",
      "shows": 123
    },
    "fugazi": {
      "name": "Fugazi",
      "shows": 18
    },
    "furthur": {
      "name": "Furthur",
      "shows": 972
    },
    "g-love": {
      "name": "G. Love and Special Sauce",
      "shows": 124
    },
    "g-nome": {
      "name": "G-Nome Project",
      "the": true,
      "shows": 4
    },
    "garage-a-trois": {
      "name": "Garage A Trois",
      "shows": 74
    },
    "god-street-wine": {
      "name": "God Street Wine",
      "shows": 240
    },
    "grace-potter": {
      "name": "Grace Potter",
      "the": true,
      "shows": 488
    },
    "grateful-dead": {
      "name": "Grateful Dead",
      "the": true,
      "shows": "9,142"
    },
    "greensky-bluegrass": {
      "name": "Greensky Bluegrass",
      "shows": 462
    },
    "guster": {
      "name": "Guster",
      "shows": 484
    },
    "the-heavy-pets": {
      "name": "The Heavy Pets",
      "shows": 142
    },
    "jack-johnson": {
      "name": "Jack Johnson",
      "shows": 146
    },
    "jazz-mandolin-project": {
      "name": "Jazz Mandolin Project",
      "the": true,
      "shows": 163
    },
    "jerry-joseph": {
      "name": "Jerry Joseph and the Jackmormons",
      "shows": 604
    },
    "john-popper": {
      "name": "John Popper",
      "shows": 67
    },
    "keller-williams": {
      "name": "Keller Williams",
      "shows": 608
    },
    "kvhw": {
      "name": "KVHW",
      "shows": 109
    },
    "leftover-salmon": {
      "name": "Leftover Salmon",
      "shows": 542
    },
    "little-feat": {
      "name": "Little Feat",
      "shows": 567
    },
    "lotus": {
      "name": "Lotus",
      "shows": 368
    },
    "marco": {
      "name": "Marco Benevento",
      "shows": 136
    },
    "matisyahu": {
      "name": "Matisyahu",
      "shows": 296
    },
    "matt-pond-pa": {
      "name": "Matt Pond PA",
      "shows": 8
    },
    "max-creek": {
      "name": "Max Creek",
      "shows": "1,850"
    },
    "mmj": {
      "name": "My Morning Jacket",
      "shows": 253
    },
    "moe": {
      "name": "moe.",
      "shows": 959
    },
    "mogwai": {
      "name": "Mogwai",
      "shows": 164
    },
    "the-motet": {
      "name": "The Motet",
      "shows": 166
    },
    "the-new-deal": {
      "name": "The New Deal",
      "shows": 241
    },
    "new-mastersounds": {
      "name": "The New Mastersounds",
      "shows": 197
    },
    "percy-hill": {
      "name": "Percy Hill",
      "shows": 102
    },
    "phil-lesh": {
      "name": "Phil Lesh and Friends",
      "shows": "1,707"
    },
    "radiators": {
      "name": "The Radiators",
      "shows": "1,163"
    },
    "railroad-earth": {
      "name": "Railroad Earth",
      "shows": "1,180"
    },
    "raq": {
      "name": "Raq",
      "shows": 290
    },
    "ratdog": {
      "name": "Ratdog",
      "shows": 831
    },
    "ryan-adams": {
      "name": "Ryan Adams",
      "shows": 409
    },
    "sci": {
      "name": "String Cheese Incident",
      "the": true,
      "shows": 932
    },
    "smashing-pumpkins": {
      "name": "Smashing Pumpkins",
      "the": true,
      "shows": "1,005"
    },
    "spoon": {
      "name": "Spoon",
      "shows": 51
    },
    "steve-kimock": {
      "name": "Steve Kimock",
      "shows": 256
    },
    "steve-kimock-band": {
      "name": "Steve Kimock Band",
      "the": true,
      "shows": 441
    },
    "strangefolk": {
      "name": "Strangefolk",
      "shows": 727
    },
    "stringdusters": {
      "name": "Infamous Stringdusters",
      "the": true,
      "shows": 406
    },
    "tea-leaf-green": {
      "name": "Tea Leaf Green",
      "shows": 976
    },
    "ted-leo": {
      "name": "Ted Leo and the Pharmacists",
      "shows": 20
    },
    "tedeschi-trucks": {
      "name": "Tedeschi Trucks Band",
      "the": true,
      "shows": 239
    },
    "tenacious-d": {
      "name": "Tenacious D",
      "shows": 31
    },
    "umphreys": {
      "name": "Umphrey's McGee",
      "shows": 696
    },
    "the-walkmen": {
      "name": "The Walkmen",
      "shows": 18
    },
    "war-on-drugs": {
      "name": "The War on Drugs",
      "shows": 30
    },
    "warren-zevon": {
      "name": "Warren Zevon",
      "shows": 104
    },
    "ween": {
      "name": "Ween",
      "shows": 447
    },
    "yonder": {
      "name": "Yonder Mountain String Band",
      "shows": 792
    },
    "zero": {
      "name": "Zero",
      "shows": 416
    }
  },
  "root": "http://relisten.net"
};

$(function() {
  var Tweezer;
  Tweezer = new Application().initialize();
  $(window).resize(resize);
  return $(window).keydown(function(e) {
    var _ref, _ref1;
    if ($("input,textarea").is(":focus")) {
      return;
    }
    if (e.keyCode === 32) {
      if (App.player.get('playing')) {
        if ((_ref = App.footer) != null) {
          _ref.pause();
        }
      } else {
        if ((_ref1 = App.footer) != null) {
          _ref1.playButton();
        }
      }
    } else if (e.keyCode === 37) {
      App.footer.playLast();
    } else if (e.keyCode === 39) {
      App.footer.playNext();
    } else {
      return true;
    }
    return e.preventDefault();
  });
});

$(document).ajaxSend(function(e, xhr, options) {
  var token;
  token = csrf;
  if (token && !_.isEmpty(user)) {
    return xhr.setRequestHeader("X-CSRF-Token", token);
  }
});

resize = function() {
  return $('.page-container').height($(window).height() - $('footer').height()).css('overflow', 'auto');
};

toHHMMSS = function(seconds) {
  var hourStr, hours, minutes, sec_numb, time;
  sec_numb = parseInt(seconds);
  hours = Math.floor(sec_numb / 3600);
  minutes = Math.floor((sec_numb - (hours * 3600)) / 60);
  seconds = sec_numb - (hours * 3600) - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  hourStr = hours ? hours + ":" : "";
  time = hourStr + minutes + ":" + seconds;
  return time;
};

addZero = function(num) {
  if (String(num).length < 2) {
    return String("0" + num);
  }
  return String(num);
};

timeToMS = function(time) {
  var min, sec;
  if (!/m/.test(time)) {
    return 0;
  }
  time = time.split('m');
  min = +time[0];
  sec = +time[1];
  return ((min * 60) + sec) * 1000;
};

Handlebars.registerHelper("toHHMMSS", function() {
  return new Handlebars.SafeString(toHHMMSS(this.duration));
});

Handlebars.registerHelper("len", function() {
  return new Handlebars.SafeString(toHHMMSS(this.length));
});

Handlebars.registerHelper("length", function(arr) {
  if (!arr) {
    return 0;
  }
  return new Handlebars.SafeString(arr.length);
});

Handlebars.registerHelper("addZero", function(num) {
  return new Handlebars.SafeString(addZero(num));
});

Handlebars.registerHelper("addOne", function(num) {
  return new Handlebars.SafeString(num + 1);
});

Handlebars.registerHelper("ifEqual", function(val1, val2, fn) {
  if (val1 === val2) {
    return fn();
  }
});

Handlebars.registerHelper("blurb", function(arr, id) {
  var blurb;
  if (arr) {
    blurb = _.findWhere(arr, {
      _song: id
    });
  }
  return new Handlebars.SafeString((blurb != null ? blurb.text : void 0) ? blurb.text : '');
});

var Application;

Application = (function() {
  function Application() {}

  Application.prototype.title = 'Tweezer';

  Application.prototype.initialize = function() {
    App.user = new App.Models.User(user);
    if (window.csrf) {
      App.csrf = csrf;
    }
    App.initial = true;
    this.initViews();
    if (Notification.permission === "default") {
      document.querySelector('body').addEventListener('click', function() {
        if (Notification.permission === "default") {
          return Notification.requestPermission();
        }
      });
    }
    App.router = new App.Router();
    Backbone.history.start({
      pushState: true
    });
    return this.pushAnchors();
  };

  Application.prototype.initViews = function() {
    App.notify = new App.Views.Notifications();
    App.header = new App.Views.Header();
    App.queueView = new App.Views.Queue();
    App.footer = new App.Views.Footer();
    App.player = new App.Models.Player();
    return App.playerView = new App.Views.Player();
  };

  Application.prototype.pushAnchors = function() {
    return $(document).on("click", "a[href^='/']", function(event) {
      var href, passThrough, url;
      href = $(event.currentTarget).attr('href');
      passThrough = /logout|auth/.test(href);
      if (!passThrough && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        event.preventDefault();
        url = href.replace(/^\//, '').replace('\#\!\/', '');
        App.router.navigate(url, {
          trigger: true
        });
        return false;
      }
    });
  };

  return Application;

})();

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Router = (function(_super) {
  __extends(Router, _super);

  function Router() {
    this.changeView = __bind(this.changeView, this);
    this.finishSong = __bind(this.finishSong, this);
    _ref = Router.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Router.prototype.routes = {
    '': 'index'
  };

  Router.prototype.initialize = function() {
    this.route(/^([a-z]+(?:-[a-z]+)*)\/?$/, 'band');
    this.route(/^([a-z]+(?:-[a-z]+)*)\/([0-9]{4})\/?$/, 'year');
    this.route(/^([a-z]+(?:-[a-z]+)*)\/([0-9]{4})\/([0-9]{1,2})\/([0-9]{1,2})\/?$/, 'day');
    this.route(/^([a-z]+(?:-[a-z]+)*)\/([0-9]{4})\/([0-9]{1,2})\/([0-9]{1,2})-?([0-9]{1,2})?\/?$/, 'show');
    this.route(/^([a-z]+(?:-[a-z]+)*)\/([0-9]{4})\/([0-9]{1,2})\/([0-9]{1,2})-?([0-9]{1,2})?\/([a-zA-Z0-9\-]*)\/?([0-9]{1,2})?\:?\:?([0-9]{1,2}m[0-9]{1,2})?\/?$/, 'song');
    this.route(/^about\/?$/, 'about');
    this.$container = $('#page-container');
    return this.bind('all', this._trackPageview);
  };

  Router.prototype.index = function() {
    this.band = '';
    this.changeView(new App.Views.IndexPage());
    return document.title = 'Relisten';
  };

  Router.prototype.band = function(band, year, month, day) {
    var _this = this;
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    this.changeView(new App.Views.HomePage());
    this.randomShow = new App.Models.RandomShow({
      band: this.band
    });
    this.randomShow.fetch({
      success: function() {
        var _ref1;
        _ref1 = _this.randomShow.toJSON(), _this.year = _ref1.year, _this.month = _ref1.month, _this.day = _ref1.day;
        App.years = new App.Views.Years({
          band: _this.band
        });
        App.shows = new App.Views.Shows({
          band: _this.band,
          year: _this.year
        });
        return App.songs = new App.Views.Songs({
          band: _this.band,
          year: _this.year,
          month: _this.month,
          day: _this.day,
          showVersion: _this.showVersion
        });
      }
    });
    App.header.render();
    return document.title = "" + App.bands[this.band].name + " | Relisten";
  };

  Router.prototype.year = function(band, year, month, day) {
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    if (App.initial) {
      this.changeView(new App.Views.HomePage());
      App.years = new App.Views.Years({
        band: band
      });
    }
    App.shows = new App.Views.Shows({
      band: band,
      year: year
    });
    if (App.songs) {
      App.songs.$el.empty();
    }
    App.header.render();
    return document.title = "" + year + " | " + App.bands[this.band].name + " | Relisten";
  };

  Router.prototype.day = function(band, year, month, day) {
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    if (App.songs) {
      App.songs.undelegateEvents();
    }
    if (App.initial) {
      this.changeView(new App.Views.HomePage());
      App.years = new App.Views.Years({
        band: band
      });
    }
    if (!(App.shows && App.shows.shows && App.shows.shows.get('year') === +this.year)) {
      App.shows = new App.Views.Shows({
        band: this.band,
        year: this.year
      });
    }
    App.songs = new App.Views.Songs({
      band: this.band,
      year: this.year,
      month: this.month,
      day: this.day
    });
    App.header.render();
    return document.title = "" + this.year + "/" + this.month + "/" + this.day + " | " + App.bands[this.band].name + " | Relisten";
  };

  Router.prototype.show = function(band, year, month, day, showVersion) {
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    this.showVersion = showVersion;
    if (App.songs) {
      App.songs.undelegateEvents();
    }
    if (App.initial) {
      this.changeView(new App.Views.HomePage());
      App.years = new App.Views.Years({
        band: this.band
      });
    }
    if (!(App.shows && App.shows.shows && App.shows.shows.get('year') === +this.year)) {
      App.shows = new App.Views.Shows({
        band: this.band,
        year: this.year
      });
    }
    App.songs = new App.Views.Songs({
      band: this.band,
      year: this.year,
      month: this.month,
      day: this.day,
      showVersion: this.showVersion
    });
    App.header.render();
    return document.title = "" + this.year + "/" + this.month + "/" + this.day + " | " + App.bands[this.band].name + " | Relisten";
  };

  Router.prototype.song = function(band, year, month, day, showVersion, slug, version, time) {
    this.band = band;
    this.year = year;
    this.month = month;
    this.day = day;
    this.showVersion = showVersion;
    this.slug = slug;
    this.version = version;
    this.time = time;
    if (App.initial) {
      this.changeView(new App.Views.HomePage());
      App.years = new App.Views.Years({
        band: this.band
      });
      App.shows = new App.Views.Shows({
        band: this.band,
        year: this.year
      });
      App.songs = new App.Views.Songs({
        band: this.band,
        year: this.year,
        month: this.month,
        day: this.day,
        showVersion: this.showVersion
      });
      App.header.render();
      return App.songs.listenToOnce(App.songs.folder, 'change', this.finishSong);
    }
    if (!(App.shows && App.shows.shows && App.shows.shows.year === +this.year)) {
      App.shows = new App.Views.Shows({
        year: this.year
      });
    }
    return this.finishSong();
  };

  Router.prototype.finishSong = function() {
    var self;
    self = this;
    App.queue.on('reset', function() {
      var ms;
      ms = timeToMS(self.time);
      App.song = App.queue.findWhere({
        slug: self.slug
      });
      document.title = "" + (App.song.get('title')) + " | " + self.year + "/" + self.month + "/" + self.day + " | " + App.bands[self.band].name + " | Relisten";
      App.queue.play(App.song, ms);
      return App.queue.off('reset');
    });
    return App.queue.reset(App.songs.songs.tracks);
  };

  Router.prototype.about = function() {
    this.changeView(new App.Views.AboutPage());
    return document.title = 'About | Relisten';
  };

  Router.prototype.login = function() {
    this.changeView(new App.Views.LoginPage());
    return document.title = 'Login | Relisten';
  };

  Router.prototype.register = function() {
    this.changeView(new App.Views.RegisterPage());
    return document.title = 'Register | Relisten';
  };

  Router.prototype.playlist = function(id) {
    this.changeView(new App.Views.PlaylistPage({
      playlistId: id
    }));
    return document.title = 'Playlist | Relisten';
  };

  Router.prototype.playlists = function() {
    this.changeView(new App.Views.PlaylistsPage(), false);
    return document.title = 'Playlists | Relisten';
  };

  Router.prototype.playlistSong = function(id, year, month, day, showVersion, slug, version, time) {
    var _this = this;
    this.year = year;
    this.month = month;
    this.day = day;
    this.showVersion = showVersion;
    this.slug = slug;
    this.version = version;
    this.time = time;
    if (App.initial) {
      this.changeView(new App.Views.PlaylistPage({
        playlistId: id
      }));
      return App.playlist.on('change', function() {
        _this.finishPlaylistSong({
          year: +_this.year,
          month: +_this.month,
          day: +_this.day,
          showVersion: +_this.showVersion,
          slug: _this.slug,
          version: +_this.version
        }, _this.time);
        return App.playlist.off('change');
      });
    }
    return this.finishPlaylistSong({
      year: +this.year,
      month: +this.month,
      day: +this.day,
      showVersion: +this.showVersion,
      slug: this.slug,
      version: +this.version
    }, this.time);
  };

  Router.prototype.finishPlaylistSong = function(obj, time) {
    var _this = this;
    App.queue.on('reset', function() {
      var ms;
      ms = timeToMS(time);
      App.song = App.queue.findWhere(obj);
      App.queue.play(App.song, ms);
      return App.queue.off('reset');
    });
    return App.queue.reset(App.playlist.get('_songs'));
  };

  Router.prototype.editPlaylist = function(id) {
    return this.changeView(new App.Views.PlaylistsEdit({
      playlistId: id
    }), false);
  };

  Router.prototype.clearActive = function($current) {
    $('header ul.right a').removeClass('active');
    if ($current) {
      return $current.addClass('active');
    }
  };

  Router.prototype.changeView = function(view, render) {
    if (render == null) {
      render = true;
    }
    this.$container.hide();
    if (this.currentView) {
      this.currentView.close();
    }
    if (render) {
      view.render();
      resize();
    }
    this.currentView = view;
    return this.$container.html(view.el).fadeIn('fast');
  };

  Router.prototype.notFound = function() {
    return this.navigate('/', {
      trigger: true
    });
  };

  Router.prototype._trackPageview = function() {
    var url;
    if (App.initial) {
      App.initial = false;
    }
    url = Backbone.history.getFragment();
    if (this.lastUrl === url) {
      return;
    }
    this.lastUrl = url;
    return ga('send', 'pageview', "/" + url);
  };

  return Router;

})(Backbone.Router);

var cookie, createCookie, deleteCookie, readCookie;

cookie = function(name, value, days) {
  if (value) {
    return createCookie(name, value, days);
  } else {
    return readCookie(name);
  }
};

createCookie = function(name, value, days) {
  var date, expires;
  if (days == null) {
    days = 7;
  }
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  return document.cookie = name + "=" + value + expires + "; path=/";
};

readCookie = function(name) {
  var c, ca, nameEQ, result, _i, _len;
  nameEQ = name + "=";
  ca = document.cookie.split(';');
  for (_i = 0, _len = ca.length; _i < _len; _i++) {
    c = ca[_i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      result = c.substring(nameEQ.length, c.length);
    }
  }
  return result;
};

deleteCookie = function(name) {
  return createCookie(name, "", -1);
};

App.utils.cookie = {
  cookie: cookie,
  createCookie: createCookie,
  readCookie: readCookie,
  deleteCookie: deleteCookie
};

$.fn.getCursorPosition = function() {
  var input, sel, selLen;
  input = this.get(0);
  if (!input) {
    return;
  }
  if ("selectionStart" in input) {
    return input.selectionStart;
  } else if (document.selection) {
    input.focus();
    sel = document.selection.createRange();
    selLen = document.selection.createRange().text.length;
    sel.moveStart("character", -input.value.length);
    return sel.text.length - selLen;
  }
};

$.fn.setCursorPosition = function(pos) {
  var range;
  if ($(this).get(0).setSelectionRange) {
    return $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    return range.select();
  }
};

$.fn.setCursorRange = function(start, end) {
  return this.each(function() {
    var range;
    if (this.setSelectionRange) {
      this.focus();
      return this.setSelectionRange(start, end);
    } else if (this.createTextRange) {
      range = this.createTextRange();
      range.collapse(true);
      range.moveEnd("character", end);
      range.moveStart("character", start);
      return range.select();
    }
  });
};

App.utils.getURLParameters = function(url) {
  var obj;
  obj = {};
  _.each(url.split('?')[1].split('&'), function(param) {
    var split;
    split = param.split('=');
    return obj[split[0]] = split[1];
  });
  return obj;
};

var EMAIL_REGEX, validateEmail;

EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

validateEmail = function(email) {
  return EMAIL_REGEX.test(email);
};

App.utils.validate = {
  validateEmail: validateEmail
};

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Model = (function(_super) {
  __extends(Model, _super);

  function Model() {
    _ref = Model.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return Model;

})(Backbone.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Folder = (function(_super) {
  __extends(Folder, _super);

  function Folder() {
    _ref = Folder.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Folder.prototype.url = function() {
    return '/api/v1/folder/' + this.get('id');
  };

  return Folder;

})(App.Models.Model);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Player = (function(_super) {
  __extends(Player, _super);

  function Player() {
    this.play = __bind(this.play, this);
    _ref = Player.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Player.prototype.initialize = function() {
    this.times = 0;
    return this.on('change:playing', function(player, playing) {
      if (playing) {
        return $('footer .play').removeClass('play').addClass('pause');
      } else {
        return $('footer .pause').removeClass('pause').addClass('play');
      }
    });
  };

  Player.prototype.play = function(ms) {
    var canPlayOgg, id, self, url, volume,
      _this = this;
    if (ms == null) {
      ms = 0;
    }
    if (this.times > 4) {
      return this.times = 0;
    }
    if (this.sound) {
      volume = this.sound.volume;
      this.sound.destruct();
    }
    this.set('id', id = App.song.get('_id'));
    App.playerView.played.push(id);
    canPlayOgg = soundManager.canPlayMIME('audio/ogg');
    if (!(canPlayOgg && (url = App.song.get('oggUrl')))) {
      url = App.song.get('file');
    }
    self = this;
    return soundManager.onready(function() {
      _this.sound = soundManager.createSound({
        id: "phish" + id,
        url: url,
        position: ms
      });
      return _this.sound.play({
        ondataerror: function() {
          if (console) {
            return console.log('error mate');
          }
        },
        whileloading: function() {
          if (self.times > 0) {
            self.times = 0;
          }
          return App.footer.updateProgress(this.bytesLoaded, this.bytesTotal);
        },
        whileplaying: function() {
          return App.footer.updatePlaying(this.position, this.duration);
        },
        onplay: function() {
          _this.sound.setVolume(volume || 100);
          _this.updateText();
          return _this.slideDown();
        },
        onfinish: function() {
          this.stop();
          App.footer.playNext();
          if (App.queue.idx === App.queue.length) {
            return App.player.set('playing', false);
          }
        },
        onload: function() {
          if (this.readyState === 2 && self.times++ < 5) {
            return self.play();
          }
        }
      });
    });
  };

  Player.prototype.updateText = function() {
    var title, _ref1;
    if (title = (_ref1 = App.song) != null ? _ref1.get('title') : void 0) {
      return App.playerView.updateText({
        title: title,
        album: App.songs.songs.title,
        length: App.song.get('length')
      });
    }
  };

  Player.prototype.slideDown = function() {
    var $container, $footer;
    $footer = $('footer');
    if ($footer.height() !== 100) {
      $footer.animate({
        'height': 100
      }, 1000);
      return $container = $('.page-container').animate({
        'height': $(window).height() - 100
      }, 1000, function() {
        return $container.css('overflow', 'auto');
      });
    }
  };

  return Player;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Playlist = (function(_super) {
  __extends(Playlist, _super);

  function Playlist() {
    _ref = Playlist.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Playlist.prototype.idAttribute = '_id';

  Playlist.prototype.url = function() {
    var id;
    id = this.get('_id');
    return '/api/v1/playlist' + (id ? "/" + id : '');
  };

  Playlist.prototype.defaults = {
    _songs: [],
    name: 'Untitled Playlist'
  };

  return Playlist;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.RandomShow = (function(_super) {
  __extends(RandomShow, _super);

  function RandomShow() {
    _ref = RandomShow.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  RandomShow.prototype.url = function() {
    var band;
    band = this.get('band');
    return "" + App.root + "/api/artists/" + band + "/random_date";
  };

  RandomShow.prototype.parse = function(response) {
    var date, day, month, year, _ref1;
    if (!(response != null ? response.data : void 0)) {
      return {};
    }
    date = response.data;
    _ref1 = date.split('-'), year = _ref1[0], month = _ref1[1], day = _ref1[2];
    year = +year;
    month = +month;
    day = +day;
    return {
      year: year,
      month: month,
      day: day
    };
  };

  return RandomShow;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Shows = (function(_super) {
  __extends(Shows, _super);

  function Shows() {
    _ref = Shows.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Shows.prototype.url = function() {
    var band, year;
    year = this.get('year');
    band = this.get('band');
    return "" + App.root + "/api/artists/" + band + "/years/" + year;
  };

  Shows.prototype.parse = function(response) {
    response.data.shows.map(function(show) {
      var day, month, year, _ref1;
      _ref1 = show.display_date.split('-'), year = _ref1[0], month = _ref1[1], day = _ref1[2];
      show.year = +year;
      show.month = +month;
      show.day = +day;
      if (!show.day) {
        show.day = +day.split(' ')[0];
      }
      return show;
    });
    return response.data;
  };

  return Shows;

})(App.Models.Model);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Song = (function(_super) {
  __extends(Song, _super);

  function Song() {
    this.change = __bind(this.change, this);
    _ref = Song.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Song.prototype.url = function() {
    var day, id, month, showVersion, slug, year;
    id = this.get('_id');
    if (id) {
      return "/api/v1/song/" + id;
    }
    year = this.get('year');
    month = this.get('month');
    day = this.get('day');
    showVersion = this.get('showVersion') || 0;
    slug = this.get('longSlug');
    return "/api/v1/" + year + "/" + month + "/" + day + "-" + showVersion + "/" + slug;
  };

  Song.prototype.change = function() {
    return App.queue.push(this);
  };

  return Song;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Songs = (function(_super) {
  __extends(Songs, _super);

  function Songs() {
    _ref = Songs.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Songs.prototype.url = function() {
    var band, day, month, year;
    band = this.get('band');
    year = this.get('year');
    month = addZero(this.get('month'));
    day = addZero(this.get('day'));
    return "" + App.root + "/api/artists/" + band + "/years/" + year + "/shows/" + year + "-" + month + "-" + day;
  };

  Songs.prototype.parse = function(response) {
    return response;
  };

  return Songs;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.User = (function(_super) {
  __extends(User, _super);

  function User() {
    _ref = User.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  User.prototype.url = '/api/v1/me';

  User.prototype.loggedIn = function() {
    return !!this.get('email');
  };

  User.prototype.reset = function() {
    if (this.loggedIn()) {
      return App.router.navigate('/', {
        trigger: true
      });
    }
  };

  return User;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Models.Years = (function(_super) {
  __extends(Years, _super);

  function Years() {
    _ref = Years.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Years.prototype.url = function() {
    var band;
    band = this.get('band');
    return "" + App.root + "/api/artists/" + band + "/years";
  };

  return Years;

})(App.Models.Model);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Collections.Collection = (function(_super) {
  __extends(Collection, _super);

  function Collection() {
    _ref = Collection.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return Collection;

})(Backbone.Collection);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Collections.Playlists = (function(_super) {
  __extends(Playlists, _super);

  function Playlists() {
    _ref = Playlists.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Playlists.prototype.url = '/api/v1/playlists';

  Playlists.prototype.model = App.Models.Playlist;

  return Playlists;

})(App.Collections.Collection);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Collections.Queue = (function(_super) {
  __extends(Queue, _super);

  function Queue() {
    this.play = __bind(this.play, this);
    _ref = Queue.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Queue.prototype.model = App.Models.Song;

  Queue.prototype.idx = 0;

  Queue.prototype.initialize = function() {
    var _this = this;
    this.on('add', function() {
      if ((_this.length === 1) || (_this.idx === _this.length - 1 && !App.player.get('playing'))) {
        return _this.play();
      }
    });
    return this.on('reset', function() {
      return _this.idx = 0;
    });
  };

  Queue.prototype.play = function(song, ms) {
    var band, day, month, showVersion, showVersionStr, slug, title, url, year, _ref1;
    if (song) {
      if (App.song) {
        this.idx = this.indexOf(App.song);
      }
    } else {
      if (this.idx === this.length) {
        return App.footer.pause();
      }
      App.song = this.at(this.idx);
    }
    if (!App.song) {
      return false;
    }
    this.invoke('set', {
      active: ''
    });
    App.song.set('active', 'active');
    App.player.play(ms);
    App.player.set('playing', true);
    _ref1 = App.song.toJSON(), slug = _ref1.slug, title = _ref1.title, year = _ref1.year, month = _ref1.month, day = _ref1.day, showVersion = _ref1.showVersion, band = _ref1.band;
    this.notify(App.bands[band].name, "" + title + "\n" + year + "/" + month + "/" + day);
    showVersionStr = showVersion ? '-' + showVersion : '';
    if (!window.location.pathname.match("/" + band + "/" + year + "/" + month + "/" + day + showVersionStr + "/" + slug)) {
      url = "/" + band + "/" + year + "/" + month + "/" + day + showVersionStr + "/" + slug;
      document.title = "" + title + " | " + year + "/" + month + "/" + day + " | " + App.bands[band].name + "| Relisten";
      Backbone.history.navigate(url, {
        trigger: false
      });
      ga('send', 'pageview', "" + url);
    }
    App.queueView.render(App.queueView.$el.find('ul').scrollTop());
    $('.song').removeClass('active');
    $("." + band + "-" + year + "-" + month + "-" + day + showVersionStr + "-" + slug).addClass('active');
    return ++this.idx;
  };

  Queue.prototype.playLast = function() {
    if (App.player.sound.position > 10000) {
      return App.player.sound.setPosition(0);
    }
    this.idx -= 2;
    if (this.idx < 0) {
      this.idx = 0;
    }
    return this.play(null, 0);
  };

  Queue.prototype.notify = function(title, body) {
    var notification;
    if (!window.Notification) {
      return;
    }
    if (Notification.permission === "granted") {
      notification = new Notification(title, {
        body: body
      });
      return setTimeout(function() {
        return notification.close();
      }, 2500);
    }
  };

  return Queue;

})(App.Collections.Collection);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.View = (function(_super) {
  __extends(View, _super);

  function View() {
    _ref = View.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  View.prototype.initialize = function() {
    if (this.autoRender) {
      return this.render();
    }
  };

  View.prototype.render = function() {
    if (this.$el && this.template) {
      return this.$el.html(this.template());
    }
  };

  View.prototype.close = function() {
    this.remove();
    return this.undelegateEvents();
  };

  return View;

})(Backbone.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.AboutPage = (function(_super) {
  __extends(AboutPage, _super);

  function AboutPage() {
    _ref = AboutPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  AboutPage.prototype.className = 'about-page';

  AboutPage.prototype.template = JST['about'];

  AboutPage.prototype.initialize = function() {
    return App.router.clearActive($('header .about'));
  };

  AboutPage.prototype.render = function() {
    this.$el.html(this.template());
    return this;
  };

  return AboutPage;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Footer = (function(_super) {
  __extends(Footer, _super);

  function Footer() {
    this.mouseUp = __bind(this.mouseUp, this);
    _ref = Footer.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Footer.prototype.el = 'footer';

  Footer.prototype.template = JST['footer'];

  Footer.prototype.events = {
    'mouseenter .progress-container': 'hoverBar',
    'mousemove .progress-container': 'moveBar',
    'mouseleave .progress-container': 'leaveBar',
    'mousedown .progress-container': 'seekDown',
    'mouseup': 'mouseUp',
    'click .pause': 'pause',
    'click .play': 'playButton',
    'click .next': 'playNext',
    'click .last': 'playLast'
  };

  Footer.prototype.initialize = function() {
    this.$progress = this.$el.find('.progress-bar');
    this.$container = this.$el.find('.progress-container');
    this.$position = this.$el.find('.position-bar');
    return this.$window = $(window);
  };

  Footer.prototype.hoverBar = function(e) {
    this.$progress.stop().animate({
      height: '10px'
    }, 300);
    this.$container.stop().animate({
      height: '10px'
    }, 300);
    return this.$position.stop().animate({
      height: '10px'
    }, 300);
  };

  Footer.prototype.moveBar = function(e) {
    var time;
    time = toHHMMSS(this._clickToMs(e.pageX) / 1000);
    App.playerView.$seconds.html(time);
    if (this.dragging) {
      return this.seek(e.pageX);
    }
  };

  Footer.prototype.leaveBar = function() {
    this.$progress.stop().animate({
      height: '8px'
    }, 300);
    this.$position.stop().animate({
      height: '8px'
    }, 300);
    this.$container.stop().animate({
      height: '8px'
    }, 300);
    return this.$container.off('mousemove');
  };

  Footer.prototype.updateProgress = function(loaded, total) {
    return this.$progress.width("" + ((loaded / total) * 100) + "%");
  };

  Footer.prototype.updatePlaying = function(position, duration) {
    if (!this.$container.is(":hover")) {
      App.playerView.$seconds.html(toHHMMSS(position / 1000));
    }
    return this.$position.css('left', "" + ((position / duration) * 100) + "%");
  };

  Footer.prototype.seekDown = function(e) {
    this.seek(e.pageX);
    return this.dragging = true;
  };

  Footer.prototype.mouseUp = function(e) {
    var coord;
    if (!this.dragging) {
      return;
    }
    coord = e.pageX / this.$window.width();
    if (App.player.sound.bytesLoaded / App.player.sound.bytesTotal < coord) {
      App.player.sound.destruct();
      App.player.play(this._clickToMs(e.pageX));
    }
    return this.dragging = false;
  };

  Footer.prototype.seek = function(pageX) {
    var coord;
    coord = pageX / this.$window.width();
    if (App.player.sound.bytesLoaded / App.player.sound.bytesTotal < coord) {
      App.player.sound.destruct();
      return App.player.play(this._clickToMs(pageX));
    }
    return App.player.sound.setPosition(coord * App.song.get('length') * 1000);
  };

  Footer.prototype.pause = function() {
    soundManager.pause("phish" + App.player.get('id'));
    return App.player.set('playing', false);
  };

  Footer.prototype.playButton = function() {
    var id;
    id = App.player.get('id');
    App.player.set('playing', true);
    if (App.playerView.played.indexOf(id >= 0)) {
      return soundManager.resume("phish" + id);
    }
    return App.player.play();
  };

  Footer.prototype.playNext = function() {
    return App.queue.play(null, 0);
  };

  Footer.prototype.playLast = function() {
    return App.queue.playLast();
  };

  Footer.prototype._clickToMs = function(pageX) {
    var coord;
    coord = pageX / this.$window.width();
    return coord * App.song.get('length') * 1000;
  };

  return Footer;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Header = (function(_super) {
  __extends(Header, _super);

  function Header() {
    this.render = __bind(this.render, this);
    _ref = Header.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Header.prototype.autoRender = true;

  Header.prototype.el = 'header';

  Header.prototype.template = JST['header'];

  Header.prototype.events = {
    'click .band': 'refreshBand'
  };

  Header.prototype.initialize = function() {
    return Header.__super__.initialize.apply(this, arguments);
  };

  Header.prototype.render = function(playlist) {
    var _ref1, _ref2, _ref3, _ref4, _ref5;
    return this.$el.html(this.template({
      loggedIn: App.user.loggedIn(),
      slug: (_ref1 = App.router) != null ? _ref1.band : void 0,
      bandName: (_ref2 = App.bands[(_ref3 = App.router) != null ? _ref3.band : void 0]) != null ? _ref2.name : void 0,
      the: (_ref4 = App.bands[(_ref5 = App.router) != null ? _ref5.band : void 0]) != null ? _ref4.the : void 0
    }));
  };

  Header.prototype.refreshBand = function() {
    var _ref1, _ref2, _ref3;
    if (Backbone.history.fragment === ((_ref1 = App.router) != null ? _ref1.band : void 0)) {
      return Backbone.history.loadUrl('/' + ((_ref2 = App.router) != null ? _ref2.band : void 0));
    } else {
      return App.router.navigate('/' + ((_ref3 = App.router) != null ? _ref3.band : void 0), {
        trigger: true
      });
    }
  };

  return Header;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.HomePage = (function(_super) {
  __extends(HomePage, _super);

  function HomePage() {
    this.render = __bind(this.render, this);
    _ref = HomePage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  HomePage.prototype.className = 'home-page';

  HomePage.prototype.template = JST['home'];

  HomePage.prototype.render = function() {
    this.checkErr();
    App.router.clearActive();
    App.header.render();
    this.$el.html(this.template({
      loggedIn: App.user.loggedIn()
    }));
    resize();
    return this;
  };

  HomePage.prototype.checkErr = function() {
    var params;
    if (window.location.search) {
      params = App.utils.getURLParameters(window.location.search);
      switch (params.err) {
        case "maxProviders":
          return App.notify.send('Error', "This is how you send an error notification.", false, 4000);
      }
    }
  };

  return HomePage;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.IndexPage = (function(_super) {
  __extends(IndexPage, _super);

  function IndexPage() {
    this.render = __bind(this.render, this);
    _ref = IndexPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  IndexPage.prototype.className = 'index-page';

  IndexPage.prototype.template = JST['index'];

  IndexPage.prototype.render = function() {
    App.header.render();
    return this.$el.html(this.template({
      bands: App.bands
    }));
  };

  return IndexPage;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.LoginPage = (function(_super) {
  __extends(LoginPage, _super);

  function LoginPage() {
    _ref = LoginPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  LoginPage.prototype.className = 'login-page';

  LoginPage.prototype.template = JST['login'];

  LoginPage.prototype.render = function() {
    this.checkErr();
    this.$el.html(this.template({
      csrf: App.csrf
    }));
    return App.router.clearActive($('header .login'));
  };

  LoginPage.prototype.checkErr = function() {
    var params;
    if (window.location.search) {
      params = App.utils.getURLParameters(window.location.search);
      switch (params.err) {
        case "0":
          return App.notify.send('Error', "No User Found", false, 4000);
        case "1":
          return App.notify.send('Error', "Password Incorrect", false, 4000);
        case "2":
          return App.notify.send('Error', "Logged in too many times, try again later.", false, 4000);
      }
    }
  };

  return LoginPage;

})(App.Views.View);

var _ref, _ref1,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Notification = (function(_super) {
  __extends(Notification, _super);

  function Notification() {
    this.close = __bind(this.close, this);
    _ref = Notification.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Notification.prototype.autoRender = true;

  Notification.prototype.tagName = "li";

  Notification.prototype.events = {
    "click a": "close"
  };

  Notification.prototype.template = JST['notification'];

  Notification.prototype.initialize = function(_arg) {
    this.message = _arg.message, this.title = _arg.title, this.type = _arg.type, this.sticky = _arg.sticky, this.time = _arg.time, this.img = _arg.img;
    Notification.__super__.initialize.apply(this, arguments);
    return this;
  };

  Notification.prototype.render = function() {
    this.$el.hide().html(this.template({
      message: this.message,
      title: this.title,
      img: this.img
    })).addClass(this.type).show().attr("data-view", "App.Views.Notification");
    if (!this.sticky) {
      setTimeout(this.close, this.time);
    }
    return this;
  };

  Notification.prototype.close = function() {
    return $(this.el).slideUp("slow");
  };

  return Notification;

})(App.Views.View);

App.Views.Notifications = (function(_super) {
  __extends(Notifications, _super);

  function Notifications() {
    this.send = __bind(this.send, this);
    _ref1 = Notifications.__super__.constructor.apply(this, arguments);
    return _ref1;
  }

  Notifications.prototype.el = '#notifications';

  Notifications.prototype.send = function(title, message, sticky, time, img) {
    var notificationEl, type;
    if (sticky == null) {
      sticky = false;
    }
    if (time == null) {
      time = 3000;
    }
    type = "notify";
    notificationEl = new App.Views.Notification({
      title: title,
      message: message,
      type: type,
      sticky: sticky,
      time: time,
      img: img
    }).el;
    this.$el.append(notificationEl);
    return notificationEl;
  };

  Notifications.prototype.render = function() {
    this.$el.attr("data-view", "App.Views.Notifications");
    return this;
  };

  return Notifications;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Player = (function(_super) {
  __extends(Player, _super);

  function Player() {
    this.setVolume = __bind(this.setVolume, this);
    this.volumeMove = __bind(this.volumeMove, this);
    this.clickUp = __bind(this.clickUp, this);
    this.volume = __bind(this.volume, this);
    _ref = Player.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Player.prototype.el = '.player-container';

  Player.prototype.template = JST['player'];

  Player.prototype.played = [];

  Player.prototype.events = {
    'mousedown .volume-container': 'volume',
    'mouseup': 'clickUp',
    'mousemove .volume-container': 'volumeMove'
  };

  Player.prototype.initialize = function() {
    soundManager.setup({
      url: "/swf",
      useHTML5Audio: true,
      preferFlash: false,
      debugMode: false
    });
    return this.render();
  };

  Player.prototype.render = function() {
    this.$el.html(this.template());
    App.player.updateText();
    this.$seconds = this.$el.find('.seconds');
    this.$volumeContainer = this.$el.find('.volume-container');
    return this.$volume = this.$volumeContainer.find('.volume');
  };

  Player.prototype.updateText = function(obj) {
    var album, length, title;
    title = obj.title, album = obj.album, length = obj.length;
    this.$el.find('h3').html(title || '');
    this.$el.find('h4').html(album || '');
    return this.$el.find('.total').html(length ? toHHMMSS(length) : "0:00");
  };

  Player.prototype.volume = function(e) {
    this.setVolume(e.pageY);
    return this.dragging = true;
  };

  Player.prototype.clickUp = function(e) {
    return this.dragging = false;
  };

  Player.prototype.volumeMove = function(e) {
    if (this.dragging) {
      return this.setVolume(e.pageY);
    }
  };

  Player.prototype.setVolume = function(pageY) {
    var vol;
    vol = 100 - (pageY - this.$volumeContainer.offset().top) / this.$volumeContainer.height() * 100;
    App.player.sound.setVolume(vol);
    return this.$volume.height("" + vol + "%");
  };

  return Player;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.PlaylistPage = (function(_super) {
  __extends(PlaylistPage, _super);

  function PlaylistPage() {
    _ref = PlaylistPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PlaylistPage.prototype.className = 'playlist-page';

  PlaylistPage.prototype.template = JST['playlist'];

  PlaylistPage.prototype.events = {
    'click .song': 'play'
  };

  PlaylistPage.prototype.initialize = function() {
    App.playlist = new App.Models.Playlist({
      _id: this.options.playlistId
    });
    this.listenTo(App.playlist, 'change', this.render);
    return App.playlist.fetch();
  };

  PlaylistPage.prototype.render = function() {
    this.$el.html(this.template({
      playlist: App.playlist.toJSON(),
      userId: App.user.get('_id')
    }));
    return this;
  };

  return PlaylistPage;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.PlaylistsEdit = (function(_super) {
  __extends(PlaylistsEdit, _super);

  function PlaylistsEdit() {
    _ref = PlaylistsEdit.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PlaylistsEdit.prototype.className = 'playlists-edit-page';

  PlaylistsEdit.prototype.template = JST['playlists-edit'];

  PlaylistsEdit.prototype.events = {
    'submit form': 'saveBlurbs'
  };

  PlaylistsEdit.prototype.initialize = function() {
    App.playlist = new App.Models.Playlist({
      _id: this.options.playlistId
    });
    App.playlist.fetch();
    this.listenToOnce(App.playlist, 'change', this.render);
    return App.header.render(false);
  };

  PlaylistsEdit.prototype.render = function() {
    this.$el.html(this.template({
      playlist: App.playlist.toJSON()
    }));
    return this;
  };

  PlaylistsEdit.prototype.saveBlurbs = function(e) {
    var $textarea, PUT, data, playlistId, title;
    e.preventDefault();
    playlistId = App.playlist.get('_id');
    title = this.$el.find('input.name').val();
    data = {
      playlistId: playlistId,
      title: title,
      arr: []
    };
    PUT = this.PUT;
    $textarea = $('textarea');
    $textarea.each(function(idx) {
      var $text, val;
      $text = $(this);
      val = typeof $text.val() === 'string' ? $text.val() : '';
      data.arr.push({
        text: val,
        songId: $text.siblings('input').val()
      });
      if (idx === $textarea.length - 1) {
        return PUT(data);
      }
    });
    return false;
  };

  PlaylistsEdit.prototype.PUT = function(data) {
    return $.ajax({
      type: 'PUT',
      url: '/api/v1/blurbs',
      data: data,
      success: function(json) {
        if (json) {
          return App.notify.send('Saved', 'Your playlist has been saved');
        }
      }
    });
  };

  return PlaylistsEdit;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.PlaylistsPage = (function(_super) {
  __extends(PlaylistsPage, _super);

  function PlaylistsPage() {
    _ref = PlaylistsPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  PlaylistsPage.prototype.className = 'playlists-page';

  PlaylistsPage.prototype.template = JST['playlists'];

  PlaylistsPage.prototype.initialize = function() {
    App.router.clearActive($('header .playlists'));
    this.playlists || (this.playlists = new App.Collections.Playlists());
    this.listenTo(this.playlists, 'reset', this.render);
    return this.playlists.fetch({
      reset: true
    });
  };

  PlaylistsPage.prototype.render = function() {
    this.$el.html(this.template({
      playlists: this.playlists.toJSON()
    }));
    return this;
  };

  return PlaylistsPage;

})(App.Views.View);

var _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Queue = (function(_super) {
  __extends(Queue, _super);

  function Queue() {
    _ref = Queue.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Queue.prototype.el = '.queue-container';

  Queue.prototype.template = JST['queue'];

  Queue.prototype.events = {
    'click .save': 'savePlaylist',
    'click .song': 'play',
    'click .delete': 'removeFromQueue',
    'click .clear': 'clearQueue'
  };

  Queue.prototype.initialize = function() {
    App.queue = new App.Collections.Queue();
    this.listenTo(App.queue, 'add', this.render);
    this.listenTo(App.queue, 'reset', this.render);
    return this.render();
  };

  Queue.prototype.render = function(scrollTop, dontAnimateScroll) {
    var $active, song, top, _ref1, _ref2, _ref3, _ref4, _ref5;
    song = App.queue.at(App.queue.idx - 1);
    this.$el.html(this.template({
      queue: App.queue.toJSON(),
      loggedIn: App.user.loggedIn(),
      activeSlug: App.queue ? song != null ? song.get('slug') : void 0 : false,
      year: (_ref1 = App.router) != null ? _ref1.year : void 0,
      month: (_ref2 = App.router) != null ? _ref2.month : void 0,
      day: (_ref3 = App.router) != null ? _ref3.day : void 0,
      showVersion: (_ref4 = App.router) != null ? _ref4.showVersion : void 0,
      band: (_ref5 = App.router) != null ? _ref5.band : void 0
    }));
    this.$ul = this.$el.find('ul');
    if (scrollTop) {
      this.$ul.scrollTop(scrollTop);
    }
    if (dontAnimateScroll) {
      return;
    }
    $active = this.$ul.find('.active');
    if (!$active.length) {
      return;
    }
    top = $active.position().top;
    return this.$ul.animate({
      scrollTop: top + this.$ul.scrollTop() - 30
    }, 1250);
  };

  Queue.prototype.savePlaylist = function() {
    var playlist;
    playlist = new App.Models.Playlist({
      _songs: _.pluck(App.queue.toJSON(), '_id')
    });
    playlist.save();
    return this.listenToOnce(playlist, 'change', function() {
      return Backbone.history.navigate("/playlist/" + (playlist.get('_id')) + "/edit", {
        trigger: true
      });
    });
  };

  Queue.prototype.play = function(e) {
    e.preventDefault();
    App.queue.idx = this.$el.find('li').index($(e.target).parent());
    return App.queue.play();
  };

  Queue.prototype.removeFromQueue = function(e) {
    var idx;
    idx = this.$el.find('.delete').index($(e.target));
    App.queue.remove(App.queue.at(idx));
    if (idx < App.queue.idx) {
      App.queue.idx--;
    }
    return this.render(this.$ul.scrollTop(), true);
  };

  Queue.prototype.clearQueue = function() {
    App.queue.reset();
    return this.render();
  };

  return Queue;

})(App.Views.View);

var validateEmail, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

validateEmail = App.utils.validate.validateEmail;

App.Views.RegisterPage = (function(_super) {
  __extends(RegisterPage, _super);

  function RegisterPage() {
    _ref = RegisterPage.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  RegisterPage.prototype.className = 'register-page';

  RegisterPage.prototype.template = JST['register'];

  RegisterPage.prototype.events = {
    'keyup input.email': 'email',
    'keyup input.password': 'password'
  };

  RegisterPage.prototype.render = function() {
    var params;
    App.router.clearActive($('header .register'));
    if (window.location.search) {
      params = App.utils.getURLParameters(window.location.search);
      switch (params.err) {
        case 'emailexists':
          App.notify.send('Error', "This email is already in use. But you knew that already, didn't you?");
          break;
        case 'pleaseregister':
          App.notify.send('Please Register', "Or don't. I don't care.");
      }
    }
    this.$el.html(this.template({
      csrf: App.csrf
    }));
    this.$email = this.$el.find('.email');
    this.$password = this.$el.find('.password');
    return this.submitButton = this.$el.find('form input[type="submit"]');
  };

  RegisterPage.prototype.email = function(e) {
    if (!validateEmail(this.$email.val())) {
      this.button(true);
      return this.$email.siblings('.invalid').show();
    }
    this.button();
    return this.$email.siblings('.invalid').hide();
  };

  RegisterPage.prototype.password = function(e) {
    if (this.$password.val().length < 6) {
      this.button(true);
      return this.$password.siblings('.invalid').show();
    }
    this.button();
    return this.$password.siblings('.invalid').hide();
  };

  RegisterPage.prototype.button = function(hide) {
    var disabled;
    disabled = 'disabled';
    if (!hide) {
      disabled = false;
    }
    return this.submitButton.attr('disabled', disabled);
  };

  return RegisterPage;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Shows = (function(_super) {
  __extends(Shows, _super);

  function Shows() {
    this.activate = __bind(this.activate, this);
    _ref = Shows.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Shows.prototype.el = '.shows-container';

  Shows.prototype.template = JST['shows'];

  Shows.prototype.events = {
    'click a': 'activate'
  };

  Shows.prototype.initialize = function() {
    if (!this.options.band) {
      return;
    }
    if (!this.options.year) {
      this.shows = new App.Models.Shows(this.options.band, shows);
      return this.render();
    }
    this.shows = new App.Models.Shows({
      band: this.options.band,
      year: this.options.year
    });
    this.listenTo(this.shows, 'change', this.render);
    return this.shows.fetch();
  };

  Shows.prototype.render = function() {
    App.router.clearActive();
    this.$el.html(this.template({
      data: this.shows ? this.shows.toJSON() : shows,
      band: this.options.band
    }));
    this.$a = this.$el.find('a');
    this.$a.filter(".show-" + App.router.year + "-" + App.router.month + "-" + App.router.day).addClass('active');
    return this;
  };

  Shows.prototype.activate = function(e) {
    if (!this.$a) {
      this.$a = this.$el.find('a');
    }
    this.$a.removeClass('active');
    return $(e.target).addClass('active');
  };

  return Shows;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Songs = (function(_super) {
  __extends(Songs, _super);

  function Songs() {
    this.showSources = __bind(this.showSources, this);
    _ref = Songs.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Songs.prototype.el = '.songs-container';

  Songs.prototype.template = JST['songs'];

  Songs.prototype.events = {
    'click .add': 'addToPlaylist',
    'click .song': 'clickSong',
    'click .play': 'play',
    'click .add-all': 'addAll',
    'click .select-source': 'showSources'
  };

  Songs.prototype.initialize = function() {
    if (!(this.options.year || this.options.month || this.options.day)) {
      this.folder = new App.Models.Songs(songs);
      return this.render();
    }
    this.folder = new App.Models.Songs({
      band: this.options.band,
      year: this.options.year,
      month: this.options.month,
      day: this.options.day,
      version: this.options.showVersion
    });
    this.listenTo(this.folder, 'change', this.render);
    return this.folder.fetch();
  };

  Songs.prototype.render = function() {
    var band, day, month, showVersion, sources, year, _ref1,
      _this = this;
    App.router.clearActive();
    if (this.folder) {
      sources = this.folder.get('data');
    }
    if (!(sources != null ? sources.length : void 0)) {
      return;
    }
    this.songs = sources[this.options.showVersion || 0];
    sources[this.options.showVersion || 0].hidden = true;
    _ref1 = App.router, band = _ref1.band, year = _ref1.year, month = _ref1.month, day = _ref1.day, showVersion = _ref1.showVersion;
    this.songs.tracks.map(function(track) {
      return _.extend(track, {
        band: band,
        year: year,
        month: month,
        day: day,
        showVersion: showVersion
      });
    });
    this.$el.html(this.template({
      songs: this.songs,
      sources: sources || [],
      year: this.options.year,
      month: this.options.month,
      day: this.options.day,
      band: this.options.band,
      showVersion: this.options.showVersion || '',
      multipleSources: sources.length > 1,
      totalSources: sources.length
    }));
    this.$sources = this.$el.find('.source');
    return this;
  };

  Songs.prototype.play = function(e) {
    var id, song;
    id = $(e.target).parent().attr('data-id');
    song = new App.Models.Song({
      _id: id
    });
    return song.fetch({
      success: function() {
        return App.queue.reset(song);
      }
    });
  };

  Songs.prototype.addAll = function() {
    if (App.queue.length === 0) {
      App.queue.reset(this.songs.tracks);
    }
    return App.queue.add(this.songs.tracks);
  };

  Songs.prototype.addShowToPlaylist = function(e) {
    var $li, id;
    $li = $(e.target).parent();
    id = $li.attr('data-id');
    App.song = new App.Models.Song(_.findWhere(this.songs._songs, {
      _id: id
    }));
    App.queue.reset(songs);
    return this.playing = !!"in the band";
  };

  Songs.prototype.addToPlaylist = function(e) {
    var $li, idx, song;
    $li = $(e.target).parent();
    idx = $li.attr('data-idx');
    song = _.extend(this.songs.tracks[+idx], {
      band: this.options.band,
      year: this.options.year,
      month: this.options.month,
      day: this.options.day,
      showVersion: this.options.showVersion
    });
    App.queue.push(song);
    return false;
  };

  Songs.prototype.showSources = function() {
    if (this.$sources.is(':hidden')) {
      return this.$sources.slideDown();
    }
    return this.$sources.slideUp();
  };

  Songs.prototype.clickSong = function(e) {
    if (Notify.needsPermission) {
      return Notify.requestPermission(console.log, console.log);
    }
  };

  return Songs;

})(App.Views.View);

var _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

App.Views.Years = (function(_super) {
  __extends(Years, _super);

  function Years() {
    this.activate = __bind(this.activate, this);
    _ref = Years.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Years.prototype.el = '.years-container';

  Years.prototype.template = JST['years'];

  Years.prototype.events = {
    'click a': 'activate'
  };

  Years.prototype.initialize = function() {
    if (!this.options.band) {
      return;
    }
    this.years = new App.Models.Years({
      band: this.options.band
    });
    this.listenTo(this.years, 'change', this.render);
    return this.years.fetch();
  };

  Years.prototype.render = function() {
    App.router.clearActive();
    this.$el.html(this.template({
      years: this.years.get('data'),
      band: this.options.band
    }));
    this.$a = this.$el.find('a');
    this.$a.filter('.year-' + App.router.year).addClass('active');
    return this;
  };

  Years.prototype.activate = function(e) {
    this.$a.removeClass('active');
    return $(e.target).addClass('active');
  };

  return Years;

})(App.Views.View);
