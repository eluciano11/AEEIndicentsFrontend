eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"incidents/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"incidents/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=incidents/app.js");

;eval("define(\"incidents/controllers/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Controller.extend({\n    });\n  });//# sourceURL=incidents/controllers/application.js");

;eval("define(\"incidents/controllers/breakdowns\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.ArrayController.extend({\n        actions:{\n            highlightMap: function(data) {\n                var town = data.toLowerCase().split(\' \');\n\n                if(town.length < 1){\n                    jQuer((\'#map-\' + town[0])).attr(\'class\', \'map-active\');\n                }else{\n                    var newTownId = \'\';\n\n                    for(var i = 0; i < town.length; i++)\n                        newTownId += town[i] + \'_\';\n\n                    if(newTownId.charAt((newTownId.length - 1)) === \'_\')\n                        newTownId = newTownId.substring(0, (newTownId.length - 1));\n\n                    jQuery((\'#map-\' + newTownId)).attr(\'class\', \'map-active\');\n                }\n\n                this.transitionToRoute(\'breakdowns.specific\', data.toLowerCase());\n            }\n        }\n    });\n  });//# sourceURL=incidents/controllers/breakdowns.js");

;eval("define(\"incidents/initializers/export-application-global\", \n  [\"ember\",\"incidents/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=incidents/initializers/export-application-global.js");

;eval("define(\"incidents/router\", \n  [\"ember\",\"incidents/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n    	this.resource(\'breakdowns\', function() {\n    		this.route(\'specific\', {path: \'specific/:town_name\'});\n    	});\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=incidents/router.js");

;eval("define(\"incidents/routes/breakdowns\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n        model: function() {\n            return Ember.$.getJSON(\'http://aeeapi.herokuapp.com/api/lista.json\');\n        }\n    });\n  });//# sourceURL=incidents/routes/breakdowns.js");

;eval("define(\"incidents/routes/breakdowns/current\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    	model: function() {\n    		return Ember.$.getJSON(\'http://aeeapi.herokuapp.com/api/lista.json\');\n    	}\n    });\n  });//# sourceURL=incidents/routes/breakdowns/current.js");

;eval("define(\"incidents/routes/breakdowns/specific\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    	model: function(params) {\n    		return Ember.$.getJSON(\n    			\'http://aeeapi.herokuapp.com/api/pueblo_especifico.json?pueblo=\' + params.town_name.toLowerCase());\n    	}\n    });\n  });//# sourceURL=incidents/routes/breakdowns/specific.js");

;eval("define(\"incidents/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=incidents/templates/application.js");

;eval("define(\"incidents/templates/breakdowns\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"\\n        <img src=\\\"aee-incidents.png\\\" alt=\\\"\\\" class=\\\"bottom-padding\\\">\\n    \");\n      }\n\n    function program3(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n                <li class=\\\"breakdown-list\\\">\\n                    <a \");\n      data.buffer.push(escapeExpression(helpers.action.call(depth0, \"highlightMap\", \"data.Pueblo\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],data:data})));\n      data.buffer.push(\" class=\\\"breakdown-list\\\">\\n                        \");\n      stack1 = helpers._triageMustache.call(depth0, \"data.Pueblo\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n                            <span class=\\\"aee-yellow label right\\\">\\n                                \");\n      stack1 = helpers._triageMustache.call(depth0, \"data.Cantidad de averias\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n                            </span>\\n                    </a>\\n                </li>\\n            \");\n      return buffer;\n      }\n\n      data.buffer.push(\"<div class=\\\"medium-3 columns side-color\\\">\\n    \");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"breakdowns.index\", options) : helperMissing.call(depth0, \"link-to\", \"breakdowns.index\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n    <div class=\\\"medium-12 columns\\\">\\n        <ul class=\\\"side-nav side-color\\\">\\n            \");\n      stack1 = helpers.each.call(depth0, \"data\", \"in\", \"controller\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:[\"ID\",\"ID\",\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n        </ul>\\n    </div>\\n</div>\\n<div class=\\\"medium-9 columns\\\" id=\\\"map-show\\\">\\n    <script charset=\\\"utf-8\\\" type=\\\"text/javascript\\\">\\n        generateMap();\\n    </script>\\n    <h1 id=\\\"region-name\\\"></h1>\\n    \");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=incidents/templates/breakdowns.js");

;eval("define(\"incidents/templates/breakdowns/current\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1, helper, options;\n      data.buffer.push(\"\\n		<li class=\\\"breakdown-list\\\">\\n			\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{\n        \'class\': (\"breakdown-list\")\n      },hashTypes:{\'class\': \"STRING\"},hashContexts:{\'class\': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:[\"STRING\",\"ID\"],data:data},helper ? helper.call(depth0, \"breakdowns.specific\", \"data.Pueblo\", options) : helperMissing.call(depth0, \"link-to\", \"breakdowns.specific\", \"data.Pueblo\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n		</li>\\n	\");\n      return buffer;\n      }\n    function program2(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n				\");\n      stack1 = helpers._triageMustache.call(depth0, \"data.Pueblo\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n				<span class=\\\"breakdown-count label right\\\">\\n					\");\n      stack1 = helpers._triageMustache.call(depth0, \"data.Cantidad de averias\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n				</span>\\n			\");\n      return buffer;\n      }\n\n      data.buffer.push(\"<ul class=\\\"side-nav side-color\\\">\\n	\");\n      stack1 = helpers.each.call(depth0, \"data\", \"in\", \"controller\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:[\"ID\",\"ID\",\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</ul>\");\n      return buffer;\n      \n    });\n  });//# sourceURL=incidents/templates/breakdowns/current.js");

;eval("define(\"incidents/templates/breakdowns/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\';\n\n\n      return buffer;\n      \n    });\n  });//# sourceURL=incidents/templates/breakdowns/index.js");

;eval("define(\"incidents/templates/breakdowns/specific\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n		<h1>\");\n      stack1 = helpers._triageMustache.call(depth0, \"data.Pueblo\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"</h1>\\n		\");\n      stack1 = helpers.each.call(depth0, \"information\", \"in\", \"data.Averias\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0,depth0],types:[\"ID\",\"ID\",\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n	\");\n      return buffer;\n      }\n    function program2(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n			<div class=\\\"medium-4 columns\\\">\\n				<p>\\n					hello\\n				</p>\\n				<p>\\n					Area:\\n					<span>\\n						\");\n      stack1 = helpers._triageMustache.call(depth0, \"information.Area\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n					</span>\\n				</p>\\n				<p>\\n					Status:\\n					<span>\\n						\");\n      stack1 = helpers._triageMustache.call(depth0, \"information.Status\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n					</span>\\n				</p>\\n				<p>\\n					Last Update:\\n					<span>\\n						\");\n      stack1 = helpers._triageMustache.call(depth0, \"information.Last Update\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n					</span>\\n				</p>\\n			</div>\\n		\");\n      return buffer;\n      }\n\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n<div class=\\\"medium-12 columns breakdown\\\">\\n	\");\n      stack1 = helpers.each.call(depth0, \"data\", \"in\", \"controller\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:[\"ID\",\"ID\",\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=incidents/templates/breakdowns/specific.js");

;eval("define(\"incidents/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/app.jshint.js");

;eval("define(\"incidents/tests/controllers/application.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - controllers\');\n    test(\'controllers/application.js should pass jshint\', function() { \n      ok(true, \'controllers/application.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/controllers/application.jshint.js");

;eval("define(\"incidents/tests/controllers/breakdowns.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - controllers\');\n    test(\'controllers/breakdowns.js should pass jshint\', function() { \n      ok(false, \'controllers/breakdowns.js should pass jshint.\\ncontrollers/breakdowns.js: line 14, col 21, Expected \\\'{\\\' and instead saw \\\'newTownId\\\'.\\ncontrollers/breakdowns.js: line 17, col 21, Expected \\\'{\\\' and instead saw \\\'newTownId\\\'.\\ncontrollers/breakdowns.js: line 9, col 17, \\\'jQuer\\\' is not defined.\\ncontrollers/breakdowns.js: line 19, col 17, \\\'jQuery\\\' is not defined.\\n\\n4 errors\'); \n    });\n  });//# sourceURL=incidents/tests/controllers/breakdowns.jshint.js");

;eval("define(\"incidents/tests/helpers/resolver\", \n  [\"ember/resolver\",\"incidents/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=incidents/tests/helpers/resolver.js");

;eval("define(\"incidents/tests/helpers/start-app\", \n  [\"ember\",\"incidents/app\",\"incidents/router\",\"incidents/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=incidents/tests/helpers/start-app.js");

;eval("define(\"incidents/tests/incidents/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/helpers\');\n    test(\'incidents/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/helpers/resolver.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/helpers\');\n    test(\'incidents/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/helpers/start-app.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests\');\n    test(\'incidents/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/test-helper.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/unit/controllers/application-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/unit/controllers\');\n    test(\'incidents/tests/unit/controllers/application-test.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/unit/controllers/application-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/unit/controllers/application-test.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/unit/controllers/array-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/unit/controllers\');\n    test(\'incidents/tests/unit/controllers/array-test.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/unit/controllers/array-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/unit/controllers/array-test.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/unit/controllers/breakdowns-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/unit/controllers\');\n    test(\'incidents/tests/unit/controllers/breakdowns-test.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/unit/controllers/breakdowns-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/unit/controllers/breakdowns-test.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/unit/controllers/breakdowns/index-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/unit/controllers/breakdowns\');\n    test(\'incidents/tests/unit/controllers/breakdowns/index-test.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/unit/controllers/breakdowns/index-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/unit/controllers/breakdowns/index-test.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/unit/controllers/breakdowns/specific-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/unit/controllers/breakdowns\');\n    test(\'incidents/tests/unit/controllers/breakdowns/specific-test.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/unit/controllers/breakdowns/specific-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/unit/controllers/breakdowns/specific-test.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/unit/routes/breakdowns-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/unit/routes\');\n    test(\'incidents/tests/unit/routes/breakdowns-test.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/unit/routes/breakdowns-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/unit/routes/breakdowns-test.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/unit/routes/breakdowns/current-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/unit/routes/breakdowns\');\n    test(\'incidents/tests/unit/routes/breakdowns/current-test.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/unit/routes/breakdowns/current-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/unit/routes/breakdowns/current-test.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/unit/routes/breakdowns/index-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/unit/routes/breakdowns\');\n    test(\'incidents/tests/unit/routes/breakdowns/index-test.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/unit/routes/breakdowns/index-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/unit/routes/breakdowns/index-test.jshint.js");

;eval("define(\"incidents/tests/incidents/tests/unit/routes/breakdowns/specific-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - incidents/tests/unit/routes/breakdowns\');\n    test(\'incidents/tests/unit/routes/breakdowns/specific-test.js should pass jshint\', function() { \n      ok(true, \'incidents/tests/unit/routes/breakdowns/specific-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/incidents/tests/unit/routes/breakdowns/specific-test.jshint.js");

;eval("define(\"incidents/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/router.jshint.js");

;eval("define(\"incidents/tests/routes/breakdowns.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/breakdowns.js should pass jshint\', function() { \n      ok(true, \'routes/breakdowns.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/routes/breakdowns.jshint.js");

;eval("define(\"incidents/tests/routes/breakdowns/current.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes/breakdowns\');\n    test(\'routes/breakdowns/current.js should pass jshint\', function() { \n      ok(true, \'routes/breakdowns/current.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/routes/breakdowns/current.jshint.js");

;eval("define(\"incidents/tests/routes/breakdowns/specific.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes/breakdowns\');\n    test(\'routes/breakdowns/specific.js should pass jshint\', function() { \n      ok(true, \'routes/breakdowns/specific.js should pass jshint.\'); \n    });\n  });//# sourceURL=incidents/tests/routes/breakdowns/specific.jshint.js");

;eval("define(\"incidents/tests/test-helper\", \n  [\"incidents/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=incidents/tests/test-helper.js");

;eval("define(\"incidents/tests/unit/controllers/application-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'controller:application\', \'ApplicationController\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var controller = this.subject();\n      ok(controller);\n    });\n  });//# sourceURL=incidents/tests/unit/controllers/application-test.js");

;eval("define(\"incidents/tests/unit/controllers/array-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'controller:array\', \'ArrayController\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var controller = this.subject();\n      ok(controller);\n    });\n  });//# sourceURL=incidents/tests/unit/controllers/array-test.js");

;eval("define(\"incidents/tests/unit/controllers/breakdowns-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'controller:breakdowns\', \'BreakdownsController\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var controller = this.subject();\n      ok(controller);\n    });\n  });//# sourceURL=incidents/tests/unit/controllers/breakdowns-test.js");

;eval("define(\"incidents/tests/unit/controllers/breakdowns/index-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'controller:breakdowns/index\', \'BreakdownsIndexController\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var controller = this.subject();\n      ok(controller);\n    });\n  });//# sourceURL=incidents/tests/unit/controllers/breakdowns/index-test.js");

;eval("define(\"incidents/tests/unit/controllers/breakdowns/specific-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'controller:breakdowns/specific\', \'BreakdownsSpecificController\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var controller = this.subject();\n      ok(controller);\n    });\n  });//# sourceURL=incidents/tests/unit/controllers/breakdowns/specific-test.js");

;eval("define(\"incidents/tests/unit/routes/breakdowns-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:breakdowns\', \'BreakdownsRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=incidents/tests/unit/routes/breakdowns-test.js");

;eval("define(\"incidents/tests/unit/routes/breakdowns/current-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:breakdowns/current\', \'BreakdownsCurrentRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=incidents/tests/unit/routes/breakdowns/current-test.js");

;eval("define(\"incidents/tests/unit/routes/breakdowns/index-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:breakdowns/index\', \'BreakdownsIndexRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=incidents/tests/unit/routes/breakdowns/index-test.js");

;eval("define(\"incidents/tests/unit/routes/breakdowns/specific-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:breakdowns/specific\', \'BreakdownsSpecificRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=incidents/tests/unit/routes/breakdowns/specific-test.js");

/* jshint ignore:start */

define('incidents/config/environment', ['ember'], function(Ember) {
  var prefix = 'incidents';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */



});

if (runningTests) {
  require("incidents/tests/test-helper");
} else {
  require("incidents/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */
