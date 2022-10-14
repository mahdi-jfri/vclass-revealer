(() => {
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.text = "window.Conference.App.Users.toggleDisplay(1);"
    document.head.appendChild(script);
})();
