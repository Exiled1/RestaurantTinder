(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['buttons'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"button-container\">\r\n	<button type=\"button\" id=\"left-button\">&lt-</button>\r\n	<button type=\"button\" id=\"right-button\">-&gt</i></button>\r\n</div>\r\n";
},"useData":true});
templates['leftCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"left-card-container\" class=\"card-container\">\r\n	<ul>\r\n		<li>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":6},"end":{"line":3,"column":14}}}) : helper)))
    + "</li>\r\n		<li>rating: "
    + alias4(((helper = (helper = lookupProperty(helpers,"rating") || (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":24}}}) : helper)))
    + "</li>\r\n		<li>Total Reviews: "
    + alias4(((helper = (helper = lookupProperty(helpers,"user_ratings_total") || (depth0 != null ? lookupProperty(depth0,"user_ratings_total") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_ratings_total","hash":{},"data":data,"loc":{"start":{"line":5,"column":21},"end":{"line":5,"column":43}}}) : helper)))
    + "</li>\r\n		<!-- TODO add photo	-->\r\n	</ul>\r\n</div>\r\n";
},"useData":true});
templates['restrauntprofile'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- I'm not sure what the plan for this file is. The user clicks on a restaurant\r\nand then the two cards are replaced with this page? What information will we have\r\non this page that won't be on the cards? -->\r\n";
},"useData":true});
templates['rightCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"right-card-container\" class=\"card-container\">\r\n	<ul>\r\n		<li>Open: "
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"opening_hours") : depth0)) != null ? lookupProperty(stack1,"open_now") : stack1), depth0))
    + "</li>\r\n		<li>Pricing: "
    + alias1(((helper = (helper = lookupProperty(helpers,"price_level") || (depth0 != null ? lookupProperty(depth0,"price_level") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"price_level","hash":{},"data":data,"loc":{"start":{"line":4,"column":15},"end":{"line":4,"column":30}}}) : helper)))
    + "</li>\r\n		<li>Dine in: "
    + alias1(((helper = (helper = lookupProperty(helpers,"has_dine_in") || (depth0 != null ? lookupProperty(depth0,"has_dine_in") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"has_dine_in","hash":{},"data":data,"loc":{"start":{"line":5,"column":15},"end":{"line":5,"column":30}}}) : helper)))
    + "</li>\r\n		<li>Take out: "
    + alias1(((helper = (helper = lookupProperty(helpers,"has_take_out") || (depth0 != null ? lookupProperty(depth0,"has_take_out") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"has_take_out","hash":{},"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":32}}}) : helper)))
    + "</li>\r\n	</ul>\r\n</div>\r\n";
},"useData":true});
templates['settingsmenu'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
})();
