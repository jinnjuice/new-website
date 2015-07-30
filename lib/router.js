Router.configure({
    layoutTemplate: "layout",
    loadingTemplate: "loading",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    name: "homeIndex",
    data: function() {
        return {
            message: "Welcome to My Website!"
        };
    }
});

Router.route("/aboutme", {
    name: "homeAboutMe",
    data: function() {
        return {
            message: "Check me out!"
        };
    }
});

Router.route("/contactme", {
    name: "homeContactMe",
    data: function() {
        return {
            message: "Call me!"
        };
    }
});
