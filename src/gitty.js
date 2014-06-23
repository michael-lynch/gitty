/*!

Name: Gitty
Dependencies: jQuery
Author: Michael Lynch
Author URL: http://michaelynch.com
Date Created: June 20, 2014
Last Updated: June 20, 2014
Licensed under the MIT license

*/

;(function($) {

    $.fn.gitty = function(options) {
    
    	//return if no element was bound
		//so chained events can continue
		if(!this.length) { 
			return this; 
		}

		//define default parameters
        var defaults = {
            username: null,
            type: 'all',
            sort: 'created',
            direction: 'desc',
            limit: 5,
            language: true,
            success: function() {},
            error: function() {}
        }

        //define plugin
        var plugin = this;

        //define element
        var el = $(this);

        //define settings
        plugin.settings = {}
 
        //merge defaults and options
        plugin.settings = $.extend({}, defaults, options);
        
        var s = plugin.settings;
        
        //username error
        if(s.username === null || s.username === '') {
        
	        console.log('A Github username is required');
	        
	        plugin.settings.error.call(this);
        }
        
        $.ajax({
        	url: 'https://api.github.com/users/'+s.username+'/repos?type='+s.type+'&sort='+s.sort+'&direction='+s.direction,
        	dataType: 'jsonp',
        	cache: true,
        	success: function(data) {
        		
        		console.log(data);
        		
        		var limit;
        		
        		//if limit is greater than what was returned
        		if(s.limit > data.data.length) {
        		
        			//define limit as what was returned
	        		limit = data.data.length;
	        		
        		} else {
        		
        			//otherwise use limit
	        		limit = s.limit;
        		}

		        //for each repo
        		for(var i = 0; i < limit; i++) {

    				var name = data.data[i].name.replace('-', ' ');
    				
    				var repo = '<li class="'+data.data[i].name+'">';

        			repo += '<a href="'+data.data[i].html_url+'" title="'+name+'" class="name">'+name+'</a>';
        			
        			if(s.language === true) {
		        
				        repo += '<span class="language">'+data.data[i].language+'</span>';
			        
			        }

			        repo += '<span class="description">'+data.data[i].description+'</span>';
        			
        			repo += '</li>';
	        		
	        		el.append(repo);
	        		
	        	
	        		
        		}
			    
			    //run success callback
			    plugin.settings.success.call(this);
        		
        	}, error: function() {
	        	
	        	//run error callback
	        	plugin.settings.error.call(this);
	        	
        	}
        	
        });

    }

})(jQuery);