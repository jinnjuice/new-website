Router.configure({
    layoutTemplate: "layout",
    loadingTemplate: "loading",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    name: "homeIndex",
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

Router.route("/projects", {
    name: "projects",
    data: function() {
        return {
            message: "Here are my projects!"
        };
    }
});
