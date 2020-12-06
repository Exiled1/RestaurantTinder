(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['homepage'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"../../sass/dist/sassStyle.css\">\r\n  <title>Document</title>\r\n</head>\r\n\r\n<body>\r\n\r\n\r\n  <div>\r\n    This is the homepage handlebars file.\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"cards"),depth0,{"name":"cards","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  </div>\r\n\r\n</body>\r\n";
},"usePartial":true,"useData":true});
})();