var AFL = {
    appName: "afl",
    messagesConstantName: "AFL_MESSAGES",
    CURRENT_USER: "CURRENT_USER",
    moduleNames: {
        CONTROLLERS: "afl.controllers",
        SERVICES: "afl.services",
        DIRECTIVES: "afl.directives",
        FILTERS: "afl.filters",
        MESSAGES: "afl.messages",
        UTILS: "afl.utils"
    },
    PAGES: {
        SIDE_MENU: {
            controller: 'SideMenuController',
            factory: 'SideMenuFactory'
        },
        LOGIN: {
            name: 'login',
            url: '/login',
            templateUrl: 'templates/pages/login.html',
            controller: 'LoginController',
            factory: 'LoginFactory'
        },
        CREATE_TEAM: {
            name: 'create_team',
            url: '/create_team',
            templateUrl: 'templates/pages/create_team.html',
            controller: 'CreateTeamController',
            factory: 'CreateTeamFactory'
        },
        LEADER_BOARD: {
            name: 'leader_board',
            url: '/leader_board',
            templateUrl: 'templates/pages/leader_board.html',
            controller: 'LeaderBoardController',
            factory: 'LeaderBoardFactory'
        },
        PROFILE: {
            name: 'profile',
            url: '/profile',
            templateUrl: 'templates/pages/profile.html',
            controller: 'ProfileController',
            factory: 'ProfileFactory'
        },
        SQUAD_SELECTION: {
            name: 'squad_selection',
            url: '/squad_selection',
            templateUrl: 'templates/pages/squad_selection.html',
            controller: 'SquadSelectionController',
            factory: 'SquadSelectionFactory'
        },
        REGISTER: {
            name: 'register',
            url: '/register',
            templateUrl: 'templates/pages/register.html',
            controller: 'RegisterController',
            factory: 'RegisterFactory'
        }
    },
    BACK_END: {
        rootURL: "http://aplfantasy.herokuapp.com/",
        MethodNames: {
            getFantasyLeaderBoard: "getFantasyLeaderBoard",
            getUserProfile: "getUserProfile"
        },
        RequestType: {
            GET: "GET",
            POST: "POST"
        },
        ResponseType: {
            SUCCESS: "success",
            ERROR: "error"
        }
    }
};

var controllers = angular.module(AFL.moduleNames.CONTROLLERS, []);
var services = angular.module(AFL.moduleNames.SERVICES, []);
var directives = angular.module(AFL.moduleNames.DIRECTIVES, []);
var filters = angular.module(AFL.moduleNames.FILTERS, []);
var messages = angular.module(AFL.moduleNames.MESSAGES, []);
var utils = angular.module(AFL.moduleNames.UTILS, []);

var svgNS = "http://www.w3.org/2000/svg";
