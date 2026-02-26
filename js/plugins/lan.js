function setLanguage(lang, text, country) {
    const htmlTag = document.getElementById("htmlTag");
    const body = document.body;
    const button = document.getElementById("selectedLang");

    // Change language attribute
    htmlTag.lang = lang;

    // RTL switch
    if (lang === "ar") {
        body.classList.add("rtl");
        htmlTag.setAttribute("dir", "rtl");
    } else {
        body.classList.remove("rtl");
        htmlTag.setAttribute("dir", "ltr");
    }

    // Update button content
    button.innerHTML = `
        <img class="flag" src="https://flagcdn.com/w20/${country}.png">
        ${text}
    `;
}