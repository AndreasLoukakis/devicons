/*!
 *  Devicons 1.0 made by Theodore Vorillas / http://vorillaz.com 
 */


/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'devicons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'devicons-git': '&#xe602;',
		'devicons-git_compare': '&#xe628;',
		'devicons-git_branch': '&#xe625;',
		'devicons-git_commit': '&#xe629;',
		'devicons-git_pull_request': '&#xe626;',
		'devicons-git_merge': '&#xe627;',
		'devicons-bitbucket': '&#xe603;',
		'devicons-github_alt': '&#xe608;',
		'devicons-github_badge': '&#xe609;',
		'devicons-github': '&#xe60a;',
		'devicons-github_full': '&#xe617;',
		'devicons-java': '&#xe638;',
		'devicons-ruby': '&#xe639;',
		'devicons-scala': '&#xe637;',
		'devicons-python': '&#xe63c;',
		'devicons-go': '&#xe624;',
		'devicons-ruby_on_rails': '&#xe63b;',
		'devicons-django': '&#xe61d;',
		'devicons-markdown': '&#xe63e;',
		'devicons-php': '&#xe63d;',
		'devicons-mysql': '&#xe604;',
		'devicons-streamline': '&#xe605;',
		'devicons-database': '&#xe606;',
		'devicons-laravel': '&#xe63f;',
		'devicons-javascript': '&#xe64e;',
		'devicons-angular': '&#xe653;',
		'devicons-backbone': '&#xe652;',
		'devicons-coffeescript': '&#xe651;',
		'devicons-jquery': '&#xe650;',
		'devicons-modernizr': '&#xe620;',
		'devicons-jquery_ui': '&#xe654;',
		'devicons-ember': '&#xe61b;',
		'devicons-dojo': '&#xe61c;',
		'devicons-nodejs': '&#xe619;',
		'devicons-nodejs_small': '&#xe618;',
		'devicons-javascript_shield': '&#xe64f;',
		'devicons-bootstrap': '&#xe647;',
		'devicons-sass': '&#xe64b;',
		'devicons-css3_full': '&#xe64a;',
		'devicons-css3': '&#xe649;',
		'devicons-html5': '&#xe636;',
		'devicons-html5_multimedia': '&#xe632;',
		'devicons-html5_device_access': '&#xe633;',
		'devicons-html5_3d_effects': '&#xe635;',
		'devicons-html5_connectivity': '&#xe634;',
		'devicons-ghost_small': '&#xe614;',
		'devicons-ghost': '&#xe61f;',
		'devicons-magento': '&#xe640;',
		'devicons-joomla': '&#xe641;',
		'devicons-jekyll_small': '&#xe60d;',
		'devicons-drupal': '&#xe642;',
		'devicons-wordpress': '&#xe60b;',
		'devicons-grunt': '&#xe64c;',
		'devicons-bower': '&#xe64d;',
		'devicons-npm': '&#xe61e;',
		'devicons-yahoo_small': '&#xe62b;',
		'devicons-yahoo': '&#xe615;',
		'devicons-bing_small': '&#xe600;',
		'devicons-windows': '&#xe60f;',
		'devicons-linux': '&#xe612;',
		'devicons-ubuntu': '&#xe63a;',
		'devicons-android': '&#xe60e;',
		'devicons-apple': '&#xe611;',
		'devicons-appstore': '&#xe613;',
		'devicons-phonegap': '&#xe630;',
		'devicons-blackberry': '&#xe623;',
		'devicons-stackoverflow': '&#xe610;',
		'devicons-techcrunch': '&#xe62c;',
		'devicons-codrops': '&#xe62f;',
		'devicons-css_tricks': '&#xe601;',
		'devicons-smashing_magazine': '&#xe62d;',
		'devicons-netmagazine': '&#xe62e;',
		'devicons-codepen': '&#xe616;',
		'devicons-cssdeck': '&#xe62a;',
		'devicons-hackernews': '&#xe61a;',
		'devicons-dropbox': '&#xe607;',
		'devicons-google_drive': '&#xe631;',
		'devicons-visualstudio': '&#xe60c;',
		'devicons-unity_small': '&#xe621;',
		'devicons-rasberry_pi': '&#xe622;',
		'devicons-chrome': '&#xe643;',
		'devicons-ie': '&#xe644;',
		'devicons-firefox': '&#xe645;',
		'devicons-opera': '&#xe646;',
		'devicons-safari': '&#xe648;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/devicons-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
