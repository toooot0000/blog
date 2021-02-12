if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
} else {
    window.onunload = function() {
        window.scrollTo(0, 0);
    };
}
