var AFL = {
    appName: "afl",
    messagesConstantName: "AFL_MESSAGES",
    CURRENT_USER: "CURRENT_USER",
    CREATE : "create",
    EDIT : "edit",
    NON_EXISTENT : -1,
    NON_CAPTAIN : 0,
    CAPTAIN : 1,
    SORT :  {
        ASC : "ASCENDING",
        DESC : "DESCENDING"
    },
    moduleNames: {
        CONTROLLERS: "afl.controllers",
        SERVICES: "afl.services",
        DIRECTIVES: "afl.directives",
        FILTERS: "afl.filters",
        MESSAGES: "afl.messages",
        UTILS: "afl.utils"
    },
    filters : {
        ROSTER_FILTER : "rosterfilter"
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
            url: '/profile/:teamId',
            templateUrl: 'templates/pages/profile.html',
            controller: 'ProfileController',
            factory: 'ProfileFactory'
        },
        SQUAD_SELECTION: {
            name: 'squad_selection',
            url: '/squad_selection/:currentTeam:teamProfile',
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
            getUserTeamProfile: "getUserTeamProfile",
            getAllAPLPlayers : "getAllAPLPlayers",
            getAllAPLTeams : "getAllAPLTeams",
            getAllPlayerTypes : "getAllPlayerTypes",
            createFantasyUser : "createFantasyUser",
            createFantasyTeam : "createFantasyTeam",
            loginUser : "loginUser",
            getUserFantasyTeam : "getUserFantasyTeam",
            insertPlayerSelection : "insertPlayerSelection"
        },
        RequestType: {
            GET: "GET",
            POST: "POST"
        },
        ResponseType: {
            SUCCESS: "success",
            ERROR: "error"
        }
    },
    PLAYER_TYPE_CLASSES : {
        1 : "batsman",
        2 : "bowler",
        3 : "all_rounder"
    },
    TEAM_CLASSES : {
        1 : "hurricanes",
        2 : "superstars",
        3 : "strikers",
        4 : "scorchers"
    },
    MAX_TEAM_PLAYERS : 11,
    PLAYER_SELECTION_CONDITIONS : {
        ELEVEN_PLAYERS : {
            isToBeChecked : true,
            checkCondition : function(scope) {
                return scope.currentTeam.length == AFL.MAX_TEAM_PLAYERS;
            }
        },
        HAS_CAPTAIN : {
            isToBeChecked : false,
            checkCondition : function(scope) {
                for(var i = 0; i < scope.currentTeam.length; i++)  {
                    if(scope.currentTeam[i].isCaptain == 1) {
                        return true;
                    }
                }
                return false;
            }
        },
        MONEY_LEFT : {
            isToBeChecked : true,
            checkCondition : function(scope) {
                return scope.teamProfile.moneyLeft >= 0;
            }
        },
        ENOUGH_TRANSFERS : {
            isToBeChecked : true,
            checkCondition : function(scope) {
                return scope.teamProfile.transfersLeft >= 0;
            }
        },
        SQUAD_COMPOSITION : {
            isToBeChecked : true,
            checkCondition : function(scope) {
                var totalImpactPlayers = 0;
                var playerPerTeamCount = [0, 0, 0, 0, 0];
                var playerTypePerTeamCount = [0, 0, 0, 0];
                for(var i = 0; i < scope.currentTeam.length; i++) {
                    if(scope.currentTeam[i].isImpact == 1) {
                        totalImpactPlayers++;
                    }

                    playerPerTeamCount[scope.currentTeam[i].playerAplTeamId]++;

                    playerTypePerTeamCount[scope.currentTeam[i].playerTypeId]++;
                }

                console.log(totalImpactPlayers);
                console.dir(playerPerTeamCount);
                console.dir(playerTypePerTeamCount);
                return true;
            }
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
