Router.configure({
    layoutTemplate: "layout",
    loadingTemplate: "loading",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    name: "homeIndex",
});

Router.route("/about", {
    name: "about",
    data: function() {
        return {
            message: "Check me out!"
        };
    }
});

Router.route("/contact", {
    name: "contact",
    data: function() {
        return {
            message: "Call me!"
        };
    }
});

Router.route("/resume", {
    name: "resume",
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
