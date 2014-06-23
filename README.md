#Gitty

A simple, lightweight jQuery plugin used to display a Github user's repositories.

<a href="http://michael-lynch.github.io/gitty/" target="_blank">See a demo</a>

##Instructions

Include jQuery and the plugin in the head or footer of your page.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    
    <script src="/js/plugins/gitty.js"></script>
    
Create a list where the repositories will display.

```html
<ul class="repositories"></ul>
```
    
Initialize the plugin targeting the class, ID or element you've created. 

```js
$('.repositories').gitty();
```
	
####Options

username: string
<br /><em>A string that defines the Github username of the user you wish to retrieve repositories from (default: null).</em>

type: "all / owner / public / private / member"
<br /><em>A string that defines the type of repositories to be retrieved (default: "all").</em>

sort: "created / updated / pushed / full_name"
<br /><em>A string that defines the how the repositories should be sorted (default: "full_name").</em>

direction: "asc/ desc"
<br /><em>A string that defines the direction the repositories should be listed in (default: "asc").</em>

limit: 5
<br /><em>An integer that defines the number of repositories to display (default: null).</em>

language: boolean
<br /><em>A boolean that indicates whether or not the language of each repository should be displayed (default: true).</em>

success: function()
<br /><em>A callback function that is triggered after the request, if the request is successful.</em>

error: function()
<br /><em>A callback function that is triggered after the request, if the request is fails.</em>

#####Example:

```js
$(function() {

	$('.repositories').gitty({
		username: 'michaelynch'
		type: 'member',
		sort: 'pushed',
		direction: 'desc',
		limit: 10,
		language: false
	});
	
```