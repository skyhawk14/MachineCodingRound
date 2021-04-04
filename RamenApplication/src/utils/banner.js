var Banner = function(){
    let init = function(){
        let header = document.getElementById("header");
        let searchContainer = document.createElement("div");
        searchContainer.id = "search-container";
        let input = document.createElement("input");
        input.id="search-input";
        let button = document.createElement("button");
        button.innerHTML = "SEARCH";
        button.id = "search-button";

        input.setAttribute("placeholder","Search...");
        button.setAttribute("type","submit");
        searchContainer.appendChild(input);
        searchContainer.appendChild(button);
        header.appendChild(searchContainer);
    };
    init();
}();