/*
    replace _plugin_ 
      - the lowercase name of your plugin
 
    replace _Plugin_
      - the uppercase name of your plugin (Contructor)
*/
var namespace = jQuery || window;
 
(function (jq,namespace) {
    var options = {
         option: 'blah'
        ,evented: true
        ,debug: false
    };
        
    /* _Plugin_ v0.9 */
    var _Plugin_ = namespace._Plugin_ = function (elements, opts) {
        
        // the _plugin_ config based on passed in options
        if(opts){
            options = jq.extend({}, opts || {});
            if(options.events && namespace.Events){
                jq.extend( this, new Events(), options.events ); 
            }
        }
        
        // initiate the _Plugin_
        return (this.initialize)?this.initialize(elements):this;
    };
    
    _Plugin_.prototype = {
        
        initialize : function (elements) {
            
            // Get the _plugin_ element(s)
            this.elements = jq(elements)
           ,count = this.elements.length;
            
            // Do some processing to the element(s)
            while(count--){
                var element = this.elements[count] = jq(this.elements[count]);
                element.data("_plugin_",this);
            }
 
            return this;
        }
    };
 
    // jQuery bridge
    jq.fn._plugin_ = function (options) {
        return new _Plugin_(this, options).elements;
    };
 
})(jQuery,namespace);