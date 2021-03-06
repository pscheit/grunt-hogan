//This exports the "bootstrap" binder template so we can use it to generate the other binder templates
//The template is based off the nodejs binder template and manually created
//using the "hulk" tool of hogan.js
var Hogan = require('hogan.js');
var templates = {};

templates['bootstrap'] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("var Hogan = require(\"hogan.js\"),\r");_.b("\n" + i);_.b("    templates = {};\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);_.b("exports.templates = templates;\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);if(_.s(_.f("templates",c,p,1),c,p,0,105,168,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("templates[\"");_.b(_.v(_.f("name",c,p,0)));_.b("\"] = new Hogan.Template(");_.b(_.t(_.f("template",c,p,0)));_.b(");\r");_.b("\n");});c.pop();}_.b("\r");_.b("\n" + i);_.b("exports.render = function(context, templateName) {\r");_.b("\n" + i);_.b("    if (templateName) {\r");_.b("\n" + i);_.b("        return templates[templateName].render(context);\r");_.b("\n" + i);_.b("    }\r");_.b("\n" + i);_.b("    else {\r");_.b("\n" + i);_.b("        for (name in templates) {\r");_.b("\n" + i);_.b("            if (templates.hasOwnProperty(name) && typeof(name) !== 'function') {\r");_.b("\n" + i);_.b("                return templates[name].render(context);\r");_.b("\n" + i);_.b("            }\r");_.b("\n" + i);_.b("        }\r");_.b("\n" + i);_.b("        throw \"could not resolve default template\";\r");_.b("\n" + i);_.b("    }\r");_.b("\n" + i);_.b("}");return _.fl();;});
exports.templates = templates;
exports.render = function(context, templateName) {
  if (templateName) {
    return templates[templateName].render(context);
  }
  else {
    for (name in templates) {
      if (templates.hasOwnProperty(name) && typeof(name) !== 'function') {
        return templates[name].render(context);
      }
    }
    throw new Error('could not resolve default template');
  }
};