angular.module('blog-try-cinema').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/flimblog/flimblog.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card>\n" +
    "        <div class=\"md-padding\" flex layout-sm=\"row\">\n" +
    "        <md-card-content>\n" +
    "            <md-content flex layout-padding>\n" +
    "\n" +
    "                <div class=\"text-info\">\n" +
    "                    <h2 class=\"md-title\"> <a ui-sref=\"home.movie1\"> Review: Avengers 3 aka \"Captain America: Civil War\" </a></h2>\n" +
    "                    <i><footer class=\"md-subheader\">Monday, May 9, 2016 at 12:30PM</footer> </i>\n" +
    "                </div>\n" +
    "\n" +
    "                <h4 class=\"md-subhead\"><p > <i>&nbsp; Poor Captain America. You know how it is. You’re frozen in a block of ice and when you wake up several decades later the world has gotten so complicated! Everyone you loved is dead except your 96 year old girlfriend with Alzheimers  <a ui-sref=\"home.movie1\">Read More>> </a> </i></p></h4>\n" +
    "\n" +
    "            \n" +
    "                <div class=\"text-info\">\n" +
    "                    <h2 class=\"md-title\"> <a ui-sref=\"home.movie2\">Review:Assassin’s Creed (2017) </a></h2>\n" +
    "                    <i><footer class=\"md-subheader\">Monday, Jan 2, 2017 at 12:40PM</footer> </i>\n" +
    "                </div>\n" +
    "\n" +
    "                <h4 class=\"md-subhead\"><p > <i>&nbsp; Historically, movie adaptations of video games have got a bad rep. Perhaps the translation of game to movie doesn’t quite mesh, changing an interactive activity into a passive one, or maybe it’s simply because the majority of attempts have been terrible. There are, of course, exceptions to the rule, so where does Assassin’s Creed fit into the spectrum? <a ui-sref=\"home.movie2\">Read More>> </a></i> </p></h4>\n" +
    "\n" +
    "                <div class=\"text-info\">\n" +
    "                    <h2 class=\"md-title\"> <a ui-sref=\"home.movie3\">Review:Dangal(2017) </a> </h2>\n" +
    "                    <i><footer class=\"md-subheader\">Monday, Dec 26, 2016 at 6:40PM</footer> </i>\n" +
    "                </div>\n" +
    "\n" +
    "                <h4 class=\"md-subhead\"><p > <i>&nbsp; 'Dangal' Movie Review: Nitesh Tiwari's Brilliant Direction Along With Marvellous Performances By Aamir Khan And The ‘Dangal’ Girls Make This The BEST MOVIE OF 2016! <a ui-sref=\"home.movie3\">Read More>> </a></i> </p></h4>\n" +
    "            </md-content>\n" +
    "\n" +
    "        </md-card-content>\n" +
    "        </div>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/home/dashboard.html',
    "<!-- <div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card class=\"text-center\">\n" +
    "        <md-card-content>\n" +
    "            <h1>{{ vm.title }}</h1>\n" +
    "            <h3>{{ vm.version }}</h3>\n" +
    "            <p>This is a template for a simple home screen website. Use it as a starting point to create something more unique.</p>\n" +
    "            <code>app/modules/home/home.html</code>\n" +
    "            <br>\n" +
    "            <p><a href=\"http://www.github.com/newaeonweb/generator-angm\" class=\"btn btn-primary\" role=\"button\">Learn more »</a></p>\n" +
    "            <md-divider class=\"margin-top-20\"></md-divider>\n" +
    "            <h1 class=\"margin-top-50\">Features</h1>\n" +
    "            <ul>\n" +
    "                <li class=\" text-center\" ng-repeat=\"item in vm.listFeatures\">\n" +
    "                    <p><ng-md-icon icon=\"check\"></ng-md-icon> {{item.feature}}</p>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n" +
    " -->"
  );


  $templateCache.put('app/modules/home/home.html',
    "<!-- <md-sidenav layout=\"column\" class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"$mdMedia('gt-md')\">\n" +
    "    <div ng-controller=\"SidenavCtrl as vm\" ng-cloak>\n" +
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;\">\n" +
    "                        <div>blog-try-cinema</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-list>\n" +
    "            <md-list-item ui-sref=\"home.dashboard\">\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"apps\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> Dashboard </p>\n" +
    "            </md-list-item>\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo('home.' + item.link)\">\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p > {{ item.name }}</p>\n" +
    "            </md-list-item>\n" +
    "            <md-divider></md-divider>\n" +
    "            <md-subheader>Admin</md-subheader>\n" +
    "            <md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.showSettingsBottom($event)\" >\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.title }}</p>\n" +
    "            </md-list-item>\n" +
    "        </md-list>\n" +
    "    </div>\n" +
    "</md-sidenav> -->\n" +
    "<div class=\"container\"> \n" +
    "    <div layout=\"column\" class=\"relative\" layout-fill role=\"main\" ng-controller=\"LayoutCtrl as layout\"  ng-cloak> \n" +
    "            <md-toolbar ng-show=\"!showSearch\">\n" +
    "                <div class=\"md-toolbar-tools\">\n" +
    "                    <div layout= \"column\">\n" +
    "                        <div layout-align=\"left center\" layout=\"row\">\n" +
    "                            <img ng-src=\"app/assets/images/logo.jpg\" width=\"100\">\n" +
    "                        </div>\n" +
    "                        <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                            <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "                        </md-button>\n" +
    "                        <div layout=\"row\">\n" +
    "                            <h3 class=\"md-subhead\"> <a href=\"http://www.trycinema.com/\"> Try cinema </a> </h3> <ng-md-icon icon=\"keyboard_arrow_right\"> </ng-md-icon> <h3 class=\"md-subhead\"> <a ui-sref=\"home.flimblog\"> Blogs </a></h3>\n" +
    "                        </div>\n" +
    "                        \n" +
    "                    </div>\n" +
    "                    <span flex></span>                                       \n" +
    "                    \n" +
    "                </div>\n" +
    "\n" +
    "            </md-toolbar>\n" +
    "\n" +
    "        <md-content layout=\"column\" flex md-scroll-y style=\"background-color:#DCDCDC\">\n" +
    "            <div ui-view></div>\n" +
    "        </md-content>\n" +
    "\n" +
    "    </div>\n" +
    " </div>"
  );


  $templateCache.put('app/modules/layouts/main-page/main-page.html',
    "    <md-toolbar ng-show=\"!showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"layout.toggleSidenav('left')\" hide-gt-md aria-label=\"Menu\">\n" +
    "                <ng-md-icon icon=\"menu\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3>\n" +
    "                <a href=\"/\">blog-try-cinema</a>\n" +
    "            </h3>\n" +
    "            <span flex></span>\n" +
    "            <md-button aria-label=\"Search\" ng-click=\"showSearch = !showSearch\">\n" +
    "                <ng-md-icon icon=\"search\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <md-menu>\n" +
    "                <md-button aria-label=\"Open Settings\" ng-click=\"layout.openMenu($mdOpenMenu, $event)\">\n" +
    "                            <md-icon> more_vert </md-icon>\n" +
    "                </md-button>\n" +
    "                <md-menu-content width=\"4\">\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changeProfile($event)\">\n" +
    "                            <md-icon>face</md-icon>\n" +
    "                            Profile\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.changePassword()\">\n" +
    "                            <md-icon>lock</md-icon>\n" +
    "                            Password\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                    <md-menu-divider></md-menu-divider>\n" +
    "                    <md-menu-item>\n" +
    "                        <md-button ng-click=\"layout.logOut()\">\n" +
    "                            <md-icon>power_settings_new</md-icon>\n" +
    "                            Logout\n" +
    "                        </md-button>\n" +
    "                    </md-menu-item>\n" +
    "                </md-menu-content>\n" +
    "            </md-menu>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-toolbar class=\"md-hue-1\" ng-show=\"showSearch\">\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <md-button ng-click=\"showSearch = !showSearch\" aria-label=\"Back\">\n" +
    "                <ng-md-icon icon=\"arrow_back\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "            <h3 flex=\"10\">\n" +
    "                Back\n" +
    "            </h3>\n" +
    "            <md-input-container md-theme=\"input\" flex>\n" +
    "                <label>&nbsp;</label>\n" +
    "                <input ng-model=\"search.who\" placeholder=\"Search ...\">\n" +
    "            </md-input-container>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "    <md-content class=\"md-blue-grey-theme\" flex md-scroll-y>\n" +
    "        <ui-view layout=\"column\" layout-fill layout-padding>\n" +
    "\n" +
    "\n" +
    "        </ui-view>\n" +
    "    </md-content>\n"
  );


  $templateCache.put('app/modules/layouts/side-nav/sidenav.html',
    "        <md-toolbar class=\"md-tall md-hue-2\">\n" +
    "            <div layout=\"column\" class=\"md-toolbar-tools-bottom inset\">\n" +
    "                <div layout=\"row\">\n" +
    "                    <div flex=\"20\">\n" +
    "                        <img style=\"width: 36px; height: 36px; border-radius: 50%\"\n" +
    "                             actual-src=\"data:image/jpeg;base64,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\"\n" +
    "                             showloader=\"\" loader-class=\"preload\" loader-src=\"app/assets/images/loader.gif\"\n" +
    "                             src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAsMBgkICQcJCQgGCQcGBgYFBgcHBQkGBgUHCQcGBgcHChwXBwgaCQcHGCEMGhERHxMfBxciGCIeGBAeHxIBBQUFBwcFDAgIBxIIBQgSHhISEhISHhISEhISHh4SEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAHCAMFBgQCAQD/xAA6EAABAgQDBQYFAQgDAQAAAAACAQMABBESBQYiByExMkETQlFSYWIIcXKBoSMzgpGSorLR8BQk4RX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AG0WPx9I+RDOPIIqS+F0BVZyx5uUknZpw0RGBU9XTTCJbRs6zGI4icw66pNiRCwBUsFoVXSm7wpBF+JraOr75yDRr2LSkLpCVBMx7q06ekAFmbVCUV7yRETg4pP7y3B+YmfcRw7b6J3fNp7sRYPhrkxMCy2JEpeX/wAg97NdkjQEL02KHuG0D6FAAl3CnFqQtOKgr3RVRX3cIv8AD2Udl1lyAxcG20iFUG4e7SGvYy/Ltgggw2iD3bEivm8uS6uoX/GBFrdcI01faGGFJk5pyVnbhJW3GjuElGhad/VIcfYRtHHEJImjokzLgHaj5htp2iRgtoORWJlg9CA4IkQmA6rresCfY9i7mHZqbaKqC6RSrgFzEJlQa19YqnmU/GPKxzST1wpTjQf7Y6C9YCzJeMYra1mQJbCXSUqOECi343EOn7RsDPSvyhZfivxYhsADWggREIlu1ad6QC05mxHtZpwlJVUjMi+ojVbv49Ipe0W/0H+7uxYtYM8Uq5OtgJtMLa5aVXUu3dpZ4V6xYbOsrnPT7cu3dqISdMR5Wh5oygnfDlhaFMG6o8qW3W8ChjmJe2lOb3cvhGXy3l+Xw+TS3TYn6h8CX3LHO9tPkBPsldVLVISIh4xpWyqq+u/+rhHG/dduHqo/LzRVS2epAhEhnARfKW4rvWJix1shV1sk7MSAbxLStxaoD5ijaoBcV3W28Kwv+0PCSbxmUm03K66PL5rq7oOuPTwqFwEhXd4SSkYvMWFJMnJEttrU2yThdLL0ur9oA/5ecXsGitVFNpkv5mki2UvvEEkgoAiNEQUtbt5bB3D+I9ksBNiszawZr3RUrvaIwnXxD48B313uvl5tKNCX43Q1OfcQskHNNVMCBsB4qRpuhBNoc45/9F4Xq1E1HV0tKgjv9IlSrfIcyIybulVQQUCpyqJFXekEz4ZZFtDmnUFaitt3tMuVIHGxdgXH3mnBq2QFp9x7hgy7DcFclX5wTGjbpj2Hrq6xBqc/TAixruVvvCnFRgF5rxiVSYQBkyRT5SMKcxUhn5uSA+Iou7lIajGAzhk9tzWjQK4K/p6E3fKNKCOHygEe9qlpfLveEEzHHf8Aj5cuCo3qkWGXtnVrvbPnRSW+xOVfcsaTPuBg5hJs7lQQ/Tt8w8v3gFmHM0wswgBMm2hLaQ7zC2CfkybdZk0ecnEdR9wBbAh0jaSKVPWkU2GZaQXUvY1abdPH5+Mdue3OxGQZaoBOvkTg920RgybPBZhClWj43NgX8wJHSZxnsjTF2Fy5cbmw+1ookXarBoP9suYBZJv2XH7VtHm+dYS3PM528469uW8iK63vEVYZTbNid8/MNIKIjTdokZUERMKq4pQrOJLrIbkVLi1D1tKJUqyyDmY5KcR8BQ0pY60Y1EvLT1rDIbN8xI+0L279XVaPdK7lhTz3cPqgqbHMdtBWriuArvndEDRMTKrQkJNSR01HmXup1jL5exds2EqSItLSr0KPmP460AWm+gXppJev5jSu6YxVFNRbbv1W3CXDV0+0RYmikwfRaEP+pAj2g577AbZGZGpJc4Vur6fSKpdtF0kouCqviNpEnKXS6njAELD3hW8TFO0aXmLzf4gRbV8YQceYBa2sANxeBOrzfyxHge0G6a/UFRR1dX1d2MjnvEhexYzTeg2BcXtTV+YjJwdguPo9IKyW8pMrCIeoENwF86UglkaQuXwszSoUySVVugCJeJcF+0MK06hcOEVosnxOOqxihWFaM02gueojTTC9Tn7UqcCXTBo+JTGgfxFRQhPsG7bhKooRU4QF3G06kteYYlSvDqcBi0ydPk3ODQqXrq+mKevjXT4xNhy/9gfaoxEHbCMwUESQ046vWB/tEzI4/iPZNkqgCCIjdpQuscU2+4GneiElzZf4jKuvEjpFdRdRe6Au3cKdLTeirTmujyOX6ftHwH96Kg8UctQUdX/fGIXZkl5iUl90BMqiD9wlWxeaPMsqk7duVSLVd5iWORVrx/ej2waoS0410l4QDX/D480MujQigqQCJW0/aiWr8QYmpi3h4wpuw/GibnGxUuYv4kWlfxDQsPIo7+9qt8NMVSLYtMKRKJEpGXMRFUlisdqhJHTxNYgfSkBG+VY7cCbq+g9SSK5FjswmYQHQNa0FRut8sRBZl8IF2SQTAtCaTQe9GOxrKhXKo/1cywfNm5y78gBt0PSIkBeYh61SJsx4G0WgmkAi73h8oBYHsuOjxIaU/eirfbUVtXu96C/mvBVC4LPpXxGBfjrFrtsBV1j2A6V90fEj2qwF5lDGFYmAO7cC3W/T4QwmW9q0sQiJnYVBu7XoXpCwSyav93RMZrdcm5fNAf/Z\">\n" +
    "                    </div>\n" +
    "                    <div flex=\"80\" style=\"margin-top: 10px;font-size: 1em;\">\n" +
    "                        <div>Fernando Monteiro</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </md-toolbar>\n" +
    "        <md-list>\n" +
    "            <md-list-item ng-repeat=\"item in vm.menu\" ng-click=\"vm.navigateTo(item.link)\" >\n" +
    "                <div class=\"inset\" ng-show=\"item.icon\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.name }}</p>\n" +
    "            </md-list-item>\n" +
    "            <md-divider></md-divider>\n" +
    "            <md-subheader>Admin</md-subheader>\n" +
    "            <md-list-item ng-repeat=\"item in vm.admin\" ng-click=\"vm.showSettingsBottom($event)\" >\n" +
    "                <div class=\"inset\">\n" +
    "                    <ng-md-icon icon=\"{{item.icon}}\"></ng-md-icon>\n" +
    "                </div>\n" +
    "                <p> {{ item.title }}</p>\n" +
    "            </md-list-item>\n" +
    "        </md-list>\n"
  );


  $templateCache.put('app/modules/movie1/movie1.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "\n" +
    "    <md-card>\n" +
    "        <md-card-content>\n" +
    "            <div layout= \"row\">\n" +
    "                <img ng-src=\"app/assets/images/captain-america-3.jpg\" width=\"150\" height=\"100 \">\n" +
    "                <h1 class=\"md-headline\"> &nbsp;Review: Avengers 3 aka \"Captain America: Civil War\"</h1> \n" +
    "            </div>\n" +
    "            <h3 class=\"md-body-2\">\n" +
    "                <p contenteditable=\"true\"  class = \"textEditor\">                  \n" +
    "                        \n" +
    "                    &nbsp;Poor Captain America. You know how it is. You’re frozen in a block of ice and when you wake up several decades later the world has gotten so complicated! Everyone you loved is dead except your 96 year old girlfriend with Alzheimers (Agent Peggy Carter) and your brainwashed homicidal boyfriend (Bucky/The Winter Soldier) who is totally ghosting you.\n" +
    "                    \n" +
    "                </p>\n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor1\">\n" +
    "            \n" +
    "                    New friends are plentiful but also trouble. Either they have two faces (Black Widow/Agent 13) or they’re constantly vanishing for personal reasons (Thor/Hulk/Hawkeye) so you totally can’t rely on them.Or maybe they aren’t your friends at all. Take Iron Man, causing you grief. (Remember that whole Ultron mishegoss? Totally his fault!) \n" +
    "                </p>\n" +
    "             \n" +
    "                <img ng-src=\"app/assets/images/maxresdefault.jpg\" width=\"1050\" height=\"600 \">\n" +
    "                &nbsp;\n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor2\">\n" +
    "            \n" +
    "                    Due to expert handling of the world’s most beloved super soldier by both Marvel Studios and Chris Evans over multiple films somehow this is all terribly relatable. It’s hard not to feel for Steve Rogers as we return to him just when the s*** is hitting the fan again.\n" +
    "                </p>\n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor3\">\n" +
    "            \n" +
    "                    See, at the beginning of Captain America: Civil War The Avengers accidentally cause a building to explode in the nation of Wakanda and civilians are killed. The accident kickstarts a global government debate about how to keep Earth’s Mightiest Heroes in check. Before the team can do damage control tragedy strikes again - The Winter Soldier has apparently gone on a new killing spree. Steve can’t believe his beloved Bucky would do that but everyone else is totally all ‘yup, sounds like him’.\n" +
    "                </p>\n" +
    "                \n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor4\">\n" +
    "            \n" +
    "                    Enter Prince T’Challa, aka The Black Panther (Chadwick Boseman, commanding and thoughtful) who wants to avenge his people. Captain America can’t have that because Bucky is his friend!  Honestly, are superheroes more trouble than they’re worth?\n" +
    "                </p>\n" +
    "               \n" +
    "              \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor5\">\n" +
    "            \n" +
    "                    Oh, for the nostalgia of simpler times. Captain America has had a hard time adjusting to the modern world but that’s because he isn’t from it.  While nearly all of the Marvel superheroes that dominate pop culture today were created in the turbulent 1960s (X-Men, Spider-Man, Iron Man, you name it) and quickly changed comic books with their personal angst & character flaws, Captain America made his first appearance way back in 1941. Those were less confusing days when even foreigners like Superman and Wonder Woman were patriotic for America and always on the right side of every fight. The bad guys were easy to spot, too, because they had their skulls on the outside of their faces or were wearing Nazi uniforms.\n" +
    "                </p>\n" +
    "                \n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor6\">\n" +
    "            \n" +
    "                    So, Happy 75th Anniversary, Captain America! To celebrate you’re going to war with all of your new friends over the Sokovia Accords, which will basically put a leash on supers, requiring them to act only with the approval of a United Nations council.\n" +
    "                </p>\n" +
    "               \n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor7\">\n" +
    "            \n" +
    "                    Half of the Avengers, including Captain America, think this is a terrible idea and half are all “Where do I sign?” and thus the infighting begins. The fight begins with words (so many words for a superhero movie!) and then with fists… and shields… and claws (Hellooo, Black Panther. Very exciting to meet you) and energy bolts… and spiderwebs (yes, it’s true: New Spider-Man is bliss)… and arrows … and disorienting shrinking… and whatever it is that Scarlet Witch and Vision are doing because nobody understands that.\n" +
    "                </p>\n" +
    "                <img ng-src=\"app/assets/images/maxresdefault 1.jpg\" width=\"1050\" height=\"600 \">\n" +
    "                &nbsp;\n" +
    "           \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor8\">\n" +
    "            \n" +
    "                    The superhero genre is often compared to the western and for easy to spot reasons: there are the clearly delineated lines between good and evil (even signified by costumes when deeds aren’t enough), the moody loner hero who runs toward trouble rather than away from it, showdowns and duels as the ultimate arbiter of justice, and (sigh) the women being mostly decorative.\n" +
    "                </p>\n" +
    "               \n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor9\">\n" +
    "            \n" +
    "                    But if the superhero movie is the new Western we’re obviously moving into the late John Ford years and towards the Clint Eastwood era when everything became more introspective, politically troubling, and the arid yellow landscapes went all grey with moral murkiness and even regret about the violence.\n" +
    "                </p>\n" +
    "               \n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor10\">\n" +
    "            \n" +
    "                    Less than two months ago DC/Warner Bros’ <i>Batman vs Superman: Dawn of Justice (reviewed) </i> wrung its hands wondering what could be done about the collateral damage of super-battles. And now it’s Marvel/Disney’s turn to sweat it out over the mass casualties.\n" +
    "                </p>\n" +
    "                \n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor11\">\n" +
    "            \n" +
    "                    The difference this time is a) the movie is not garbage b) the action is coherent and c) it makes sense for these particular characters to behave in these particular ways because the movie is true to their personalities and not a gross misrepresentation of everything they stand for (but enough about Superman!) .\n" +
    "                </p>\n" +
    "                \n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor12\">\n" +
    "            \n" +
    "                    The end result, curiously, is much the same: by forcing movie audiences to confront the particulars of what visual mayhem would do to our real world within this fantasy context (why?) the movie studios are taking much of the fun out of the spectacle. And the spectacle is the whole reason for the genre! In one battle sequence a hero rips the wing off of a grounded plane to fight with it and instead of feeling a gleeful “wow!” at the action I found myself distracted thinking “who is going to pay for that?!” which is really not what you should be thinking when watching a superhero film.\n" +
    "                </p>\n" +
    "            \n" +
    "              \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor13\">\n" +
    "            \n" +
    "                    What is going on here? Do movie studios feel guilty about all the money they’re making from CGI spectacles of destruction?! I’d love to report that Captain America Civil War is the best Marvel Studios film yet, because that’s what I’ve been reading and probably what you’ve been hearing, too. But I cannot. As noble Steve Rogers himself says (paraphrasing here) in all earnestness, in one of the key scenes:\n" +
    "                </p>\n" +
    "                \n" +
    "                <code layout-align=\"center center\"> \n" +
    "            \n" +
    "                    'Doesn’t matter if the whole world decides that something wrong is something right. When they tell you to move, your job is to plant yourself like a tree and tell the whole world… ‘no, you move.’\n" +
    "                </code>\n" +
    "                &nbsp;\n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor14\">\n" +
    "            \n" +
    "                    My conscience prevents me from getting caught up in the hype and declaring this The Best. It’s the least focused on Captain America (the best character in these films) because it’s essentially The Avengers 3: The Sokovia Accords.\n" +
    "                </p>\n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor15\">\n" +
    "            \n" +
    "                    While it’s a huge relief that Civil War only makes one reference to those damn Infinity Stones (by the time that story happens it’ll be totally anti-climactic) and the Russo brothers in the directors chair show a fairly deft hand at balancing a dozen characters and keeping the action exciting, elsewhere there’s a bit of flailing.\n" +
    "                </p>\n" +
    "                \n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor16\">\n" +
    "            \n" +
    "                    The villain, as in most Marvel films, is worthless. The setup for the Sokovia Accords takes forever which also tries the patience. We know all along where the film is heading and unless every future film gets bogged down in the Accords (unlikely, else the heroes will be criminals in every film going forward) it’s a MacGuffin anyway. And while each action sequence has its own thrilling moments and structure they’re uniformly sparse and low rent visually. Perhaps it’s the overcast minimalism of the grey sterile sets: airport hangars, plain stairwells, empty apartments, ancient science labs; it’s like the studio didn’t want to pay ANY extras this time around and wanted to repurpose their own abandoned sets.\n" +
    "                </p>\n" +
    "                   \n" +
    "\n" +
    "               \n" +
    "                <i>\n" +
    "                    <p contenteditable=\"true\"  class = \"textEditor17\">\n" +
    "            \n" +
    "                        When the ending arrives 2½ hours later you’re left with the feeling of “….and?”\n" +
    "                    </p>\n" +
    "                </i>\n" +
    "                \n" +
    "                <img ng-src=\"app/assets/images/Civil-War-Wallpaper-HD.jpg\" width=\"1050\" height=\"600 \">\n" +
    "                &nbsp;\n" +
    "\n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor18\">\n" +
    "            \n" +
    "                    It’s as if Marvel has given up telling whole stories at this point and knows that we’re all a captive audience bingewatching a supersized TV series together in movie theaters. Despite Civil War‘s deft handling of comic asides to keep the tone light, it’s a little sad and incomplete. The overall effect is contemplative rather than thrilling. That miserable reflection feeling has worked wonders before in franchise films like The Empire Strikes Back and The Two Towers but they were middle films in trilogies with a clear ending in sight. Civil War is the umpteenth film in a series possibly without end so its deployment is not quite as satisfying.\n" +
    "                </p>\n" +
    "                \n" +
    "            </h3>\n" +
    "           \n" +
    "            <h3 class=\"md-header\">Comments:</h3> \n" +
    "            <h4 class=\"md-subhead\"> good movie...</h4>  \n" +
    "            <md-input-container class=\"md-block\">\n" +
    "                <div layout-gt-xs = \"row\">\n" +
    "                <form  name=\"userForm\" id=\"userForm\" data-ng-hide=\"reviewed\">\n" +
    "                    <md-input-container class=\"md-block\" flex-gt-xs>\n" +
    "                        <label>Your comments...(you can add image also.)</label>\n" +
    "                         <input type=\"text\" name=\"message\" id=\"user_input\"><br><br/><br>\n" +
    "                    </md-input-container>\n" +
    "\n" +
    "                    <md-input-container class=\"md-block\" flex-gt-xs> \n" +
    "                       <input type=\"file\" name=\"file\" onchange=\"angular.element(this).scope().photoChanged(this.files)\" />\n" +
    "                    </md-input-container> \n" +
    "\n" +
    "                    <md-button class=\"md-raised md-primary\" type= \"submit\" ng-click=\"vm.showInput();\" data-ng-model=\"reviewed\">\n" +
    "                      <ng-md-icon icon=\"save\" size=\"20\"></ng-md-icon> submit\n" +
    "                    </md-button> \n" +
    "\n" +
    "                </form>   \n" +
    "            </md-input-container> \n" +
    "            <md-input-container class=\"md-block\" flex-gt-xs> \n" +
    "                <h3 class=\"md-subheader\"> Note: Its working without backend.So image could't be place properly</h3>\n" +
    "                <h4 class=\"md-subheader\" style=\"position: black;\">\n" +
    "                    <img id=\"output\"/ width=\"400\" height=\"200\" ng-src=\"{{ thumbnail.dataUrl }}\">\n" +
    "                    <span id='display' style=\"color: black;\n" +
    "                        position: absolute;\n" +
    "                        font-weight: 100;\n" +
    "                        left: 0px;\n" +
    "                        top: 0px;\">\n" +
    "                    </span>\n" +
    "                </h4> \n" +
    "            </md-input-container> \n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "           "
  );


  $templateCache.put('app/modules/movie2/movie2.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card>\n" +
    "        <md-card-content>\n" +
    "            <div layout= \"row\">\n" +
    "                <img ng-src=\"app/assets/images/assassin.jpg\" width=\"150\" height=\"100 \">\n" +
    "                <h2 class=\"md-headline\"> &nbsp;Review:Assassin’s Creed (2017)</h2> \n" +
    "            </div>\n" +
    "            <h3 class=\"md-body-2\">\n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor\">\n" +
    "                    &nbsp;Historically, movie adaptations of video games have got a bad rep. Perhaps the translation of game to movie doesn’t quite mesh, changing an interactive activity into a passive one, or maybe it’s simply because the majority of attempts have been terrible. There are, of course, exceptions to the rule, so where does Assassin’s Creed fit into the spectrum?                \n" +
    "                </p>\n" +
    "                \n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor1\">\n" +
    "                    NBased on the bestselling game series of the same name, Assassin’s  Creed gives an introduction to new characters so newcomers to the series can jump in without knowing the ins and outs of the vast source material. The whole premise of Assassin’s Creed is to use a person’s DNA to access the memories of their ancestors which gives us two levels to the film. Modern day scenes show Callum Lynch, played by Michael Fassbender, who has been forcably recruited by a company named Abstergo to assist with their research to find an ancient artefact. Callum accesses the memories of his ancestor Aguilar by effectively letting Abstergo plug into his brain, and we’re transported to Spain during the Spanish Inquisition as Callum watches the memories unfurl.\n" +
    "                </p>\n" +
    "               \n" +
    "                <img ng-src=\"app/assets/images/assassins-creed.jpg\" width=\"1050\" height=\"600 \">\n" +
    "                &nbsp;\n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor2\">\n" +
    "                    It’s the parts set during the Inquisition where Assassin’s  Creed really shines, with breathtaking shots of the beautiful Spanish vistas, and perfectly choreographed action sequences. The trips into the past feel authentic, and are by far the best parts of the whole film. Michael Fassbender gives a great performance as both Callum and Aguilar, getting ample opportunity to show off the seemingly gravity defying stunts the original games are famous for. Combined with director Justin Kurzel’s insistence on using practical effects for the film, there’s a real air of credibility to the whole spectacle of the film, and it helps to immerse the audience in what could be an otherwise potentially exclusive world.\n" +
    "                </p>\n" +
    "              \n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor3\">\n" +
    "                    It isn’t just Michael Fassbender who gets to shine, as co-star Marion Cotillard also gives a very earnest performance as Sofia, the Abstergo scientist running the research project. Cottilard does her best with what she’s given, as Sofia runs the risk of being a little two-dimensional at times. There’s no semblance of any emotions given to any characters, most notably with Sofia, which makes her decisions in the climax of the film very baffling and at odds with the rest of her actions throughout the film.\n" +
    "                </p>\n" +
    "          \n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor4\">\n" +
    "                    With so much complex context to unfold before the actual plot of the film can even begin, there was a real danger of over-explaining things before they’d even kicked off. Luckily, Assassin’s Creed doesn’t feel the need to spell things out exactly for its viewers, and gives a very succinct explanation which provides as much details as it needs to without being overly simplified.\n" +
    "                </p>\n" +
    "               \n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor5\">\n" +
    "                    For everything that Assassin’s  Creed does right, there’s a whole lot that doesn’t quite land. The modern day characters suffer from very little fleshing out. There’s no indication to any motivation for any of these characters, so a lot of time is spent questioning what the driving force behind their actions actually is. There seems to be very little dialogue throughout, which does nothing to help the audience understand the reasoning behind why things are panning out the way they do. The film also seems to suffer from poor sound mixing, with what little dialogue there is often being incoherent and leaving gaps in the plot as you wonder what exactly has just been said.\n" +
    "                </p>\n" +
    "               \n" +
    "                <img ng-src=\"app/assets/images/assassins-creed-syndicate.jpg\" width=\"1050\" height=\"600 \">\n" +
    "                &nbsp;\n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor6\">\n" +
    "                    While Assassin’s Creed doesn’t shake off the ‘curse of the video game movie’ fully, it is by no means a terrible film. Sure, it isn’t the most groundbreaking film, and can feel a little contrived in places, but at it’s heart it is a thoroughly entertaining action film with some truly wonderful sequences peppered throughout.\n" +
    "                </p>\n" +
    "                       \n" +
    "            </h3>\n" +
    "             <h3 class=\"md-header\">Comments:</h3> \n" +
    "            <h4 class=\"md-subhead\"> good movie...</h4>  \n" +
    "            <md-input-container class=\"md-block\">\n" +
    "                <div layout-gt-xs = \"row\">\n" +
    "                <form  name=\"userForm\" id=\"userForm\" data-ng-hide=\"reviewed\">\n" +
    "                    <md-input-container class=\"md-block\" flex-gt-xs>\n" +
    "                        <label>Your comments...(you can add image also.)</label>\n" +
    "                         <input type=\"text\" name=\"message\" id=\"user_input\"><br><br/><br>\n" +
    "                    </md-input-container>\n" +
    "\n" +
    "                    <md-input-container class=\"md-block\" flex-gt-xs> \n" +
    "                       <input type=\"file\" name=\"file\" onchange=\"angular.element(this).scope().photoChanged(this.files)\" />\n" +
    "                    </md-input-container> \n" +
    "\n" +
    "                    <md-button class=\"md-raised md-primary\" type= \"submit\" ng-click=\"vm.showInput();\" data-ng-model=\"reviewed\">\n" +
    "                      <ng-md-icon icon=\"save\" size=\"20\"></ng-md-icon> submit\n" +
    "                    </md-button> \n" +
    "\n" +
    "                </form>               \n" +
    "\n" +
    "            </md-input-container>  \n" +
    "            <md-input-container class=\"md-block\" flex-gt-xs> \n" +
    "                <h3 class=\"md-subheader\"> Note: Its working without backend.So image could't be place properly</h3>\n" +
    "                <h4 class=\"md-subheader\" style=\"position: black;\">\n" +
    "                    <img id=\"output\"/ width=\"400\" height=\"200\" ng-src=\"{{ thumbnail.dataUrl }}\">\n" +
    "                    <span id='display' style=\"color: black;\n" +
    "                        position: absolute;\n" +
    "                        font-weight: 100;\n" +
    "                        left: 0px;\n" +
    "                        top: 0px;\">\n" +
    "                    </span>\n" +
    "                </h4> \n" +
    "            </md-input-container>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/movie3/movie3.html',
    "<div class=\"md-padding\" flex layout-sm=\"column\">\n" +
    "    <md-card>\n" +
    "        <md-card-content>\n" +
    "            <h2 class=\"md-headline\"> &nbsp;Review:Dangal (2017)</h2>            \n" +
    "            <h3 class=\"md-body-2\">\n" +
    "                <img ng-src=\"app/assets/images/maxresdefault dangal.jpg\" width=\"1050\" height=\"400 \">\n" +
    "                <p contenteditable=\"true\"  class = \"textEditor\">\n" +
    "                    &nbsp;<b> Dangal </b>is a long drawn out movie about two contemporary wrestlers and their curmudgeonly Dad. The sport is not a viewer friendly one, at least not to the general audience, and credit must be given to the makers of this film for explaining the rules and techniques involved in wrestling to us comprehensively, and for training the actors so well that their bouts look athletic and convincing enough to blend in with the world and tradition of this difficult, and often unrewarding, sport.\n" +
    "                </p>\n" +
    "           \n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor1\">\n" +
    "                    The film is proficiently made. The question is: was there enough material in the subject to sustain a movie, dramatically, for nearly three hours? Does the narration allow itself to accelerate when the story gets bogged down, as it so often does? Both answers are in the negative. Since it is a biopic of individuals still active in the sport, artistic license is difficult to take, as was the case with 'Mary Kom' earlier. There is very little you can fictionalize in the lives of hard working and single minded sports people. Their necessary discipline makes them dull as cinema characters.\n" +
    "                </p>\n" +
    "                \n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor2\">\n" +
    "                    So  Dangal turns to a social issue to focus on. It zeroes in to the gender bender debate in a patriarchal society, and tells of how sport can help recalibrate the traditional assumption that a girl must be trained in household chores so that she grows up to be a housewife.\n" +
    "                </p>\n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor3\">\n" +
    "                    The story begins in a village in Haryana, where a former wrestling champion, Mahavir Singh Phogat (Aamir Khan), is blessed with four daughters. Disappointed at first, he reconciles himself to never having a son. He then decides to turn the older two girls, Geeta (Fatima Sana Shaikh) and Babita (Sanya Malhotra) into international level wrestlers. The first part of the film is about how the old fox teaches his daughters all he knows of his traditional style, and the second is about how a coach at the National Academy tries to fiddle with that technique and make it more modern. This new fangled method ends up eliminating passion and introducing a defensive style to their wrestling. Eventually, Dad has to come in and put things right.\n" +
    "                </p>\n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor4\">\n" +
    "                    In the context of this Akhara versus new age ways of the sport, it is surprising to see how, with a few variations, this second part of Dangal is uncannily similar in content and presentation to the Salman Khan starrer, Sultan. In fact, if you subtract the gender factor, what you get is a derived movie, specially in the last few bouts, with fearsome foreign wrestlers in the stadium.\n" +
    "                </p>\n" +
    "                \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor5\">\n" +
    "                    For everything that Assassin’s Creed does right, there’s a whole lot that doesn’t quite land. The modern day characters suffer from very little fleshing out. There’s no indication to any motivation for any of these characters, so a lot of time is spent questioning what the driving force behind their actions actually is. There seems to be very little dialogue throughout, which does nothing to help the audience understand the reasoning behind why things are panning out the way they do. The film also seems to suffer from poor sound mixing, with what little dialogue there is often being incoherent and leaving gaps in the plot as you wonder what exactly has just been said.\n" +
    "                </p>\n" +
    "               \n" +
    "                <p contenteditable=\"true\"  class = \"textEditor6\">\n" +
    "                    So though the casting and acting in this film is uniformly good, and the film is watchable, Dangal is unable to live up to its extraordinary hype.\n" +
    "                </p>    \n" +
    "                            \n" +
    "            </h3>\n" +
    "            <h3 class=\"md-header\">Comments:</h3> \n" +
    "            <h4 class=\"md-subhead\"> good movie...</h4>  \n" +
    "            <md-input-container class=\"md-block\">\n" +
    "                <div layout-gt-xs = \"row\">\n" +
    "                <form  name=\"userForm\" id=\"userForm\" data-ng-hide=\"reviewed\">\n" +
    "                    <md-input-container class=\"md-block\" flex-gt-xs>\n" +
    "                        <label>Your comments...(you can add image also.)</label>\n" +
    "                         <input type=\"text\" name=\"message\" id=\"user_input\"><br><br/><br>\n" +
    "                    </md-input-container>\n" +
    "\n" +
    "                    <md-input-container class=\"md-block\" flex-gt-xs> \n" +
    "                       <input type=\"file\" name=\"file\" onchange=\"angular.element(this).scope().photoChanged(this.files)\" />\n" +
    "                    </md-input-container> \n" +
    "\n" +
    "                    <md-button class=\"md-raised md-primary\" type= \"submit\" ng-click=\"vm.showInput();\" data-ng-model=\"reviewed\">\n" +
    "                      <ng-md-icon icon=\"save\" size=\"20\"></ng-md-icon> submit\n" +
    "                    </md-button> \n" +
    "\n" +
    "                </form>   \n" +
    "\n" +
    "            </md-input-container>  \n" +
    "\n" +
    "            <md-input-container class=\"md-block\" flex-gt-xs> \n" +
    "                <h3 class=\"md-subheader\"> Note: Its working without backend.So image could't be place properly</h3>\n" +
    "                <h4 class=\"md-subheader\" style=\"position: black;\">\n" +
    "                    <img id=\"output\"/ width=\"400\" height=\"200\" ng-src=\"{{ thumbnail.dataUrl }}\">\n" +
    "                    <span id='display' style=\"color: black;\n" +
    "                        position: absolute;\n" +
    "                        font-weight: 100;\n" +
    "                        left: 0px;\n" +
    "                        top: 0px;\">\n" +
    "                    </span>\n" +
    "                </h4> \n" +
    "            </md-input-container>\n" +
    "        </md-card-content>\n" +
    "    </md-card>\n" +
    "</div>\n"
  );

}]);
