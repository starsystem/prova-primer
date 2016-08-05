var headElement		= document.getElementsByTagName('head')[0],
	section			= document.querySelector('section'),
	nav				= document.querySelector('nav p'),
	footer			= document.querySelector('footer p'),
	localDebug		= document.createElement('a'),
	setLocalDebug	= localDebug.setAttribute('src', 'https://starsystem.github.io/naledi'),
	loc				= (window.location.hostname === '127.0.0.1') ? localDebug : window.location,
	pathArray		= (window.location.hostname === '127.0.0.1') ?
		window.location.pathname.split('/').slice(4).slice(0, -1) :
		loc.pathname.split('/').slice(2).slice(0, -1),
	page			= (pathArray.length) ? pathArray : ['home'],
	urlSlash		= loc.pathname.split('/'),
	urlHash			= loc.hash.substring(1),
	repoOwner		= loc.host.split('.')[0],
	repoName		= urlSlash[1],
	repoFullname	= [repoOwner, repoName].join('/'),
	repoUrl			= ['https://github.com', repoFullname].join('/'),
	repoHome		= (window.location.hostname === '127.0.0.1') ?
		window.location.pathname.split('/').slice(0, 4).join('/') :
		['https://' + repoOwner + '.github.io', repoName].join('/'),
	apiGitHub		= 'https://api.github.com',
	apiRepos		= [apiGitHub, 'repos'].join('/'),
	apiRepo			= [apiRepos, repoFullname].join('/'),
	rawStatic		= ['https://rawgit.com', repoFullname].join('/'),
	rawCdn			= ['https://cdn.rawgit.com', repoFullname].join('/'),
	scriptUrl		= (window.location.hostname === '127.0.0.1') ?
		repoHome + '/js' :
		[rawStatic, 'master', 'js'].join('/'),
	logged			= (localStorage.getItem('naledi|token')) ? true : false,
	branchRef		= {},
	repos			= {};

// check status 401 and parse json
function dataHandler (response) {
	// Unauthorized or bad credential
	if (response.status === 401) {
		localStorage.removeItem('naledi|token');
		logged = false;
		console.log('401: unlogged');
	}
	// json parse
	return response.json();
}

// Error callback
function errore (e) {
	console.log('error: ' + e);
}

/*
*
* get Git Reference for a branch
*
*/
function getRef (branch, repo) {
	var b = branch || 'master';
	var r = repo || repoFullname;
	var options = {
		headers: {'Accept': 'application/vnd.github.v3+json'},
		cache: 'no-cache'
	};
	if (logged) options.headers.Authorization = 'token ' + localStorage.getItem('naledi|token');
	return fetch([apiRepos, r, 'git/refs/heads', b].join('/'), options)
		.then(dataHandler)
		.then(function (head) {
			// get ref
			return head.object.sha;
		})
		.catch(function () {
			// fallback ref
			return b;
		})
		.then(function (ref) {
			// store ref
			// example {starsystem/naledi/master: "0ba93cd72ba2017f923bceb3c3a685deedbf5629"}
			branchRef[[r, b].join('/')] = ref;
			return ref;
		})
		.catch(errore);
}

// Append script to document.head
// master branch (scriptUrl) fallback to /js folder in local
function appendScript (file) {
	var f = file || 'updater';
	var s = document.createElement('script');
	s.src = [scriptUrl, f + '.js'].join('/');
	headElement.appendChild(s);
}
