Page = function (props) {
    props = props || {};
    this.header = props.header || "header";
    this.breadCrumb = props.breadCrumb || [];
    this.showData = props.showData || false;
    this.buttons = props.buttons || [];
    this.title = props.title || "";
    $("body").prepend(`<div id="sidebar"></div><div id="header"></div>`);
    $("body").append(`<div id="footer"></div>`);
    $("#header").load("/common/" + this.header + ".html", () => {
        $(document).attr("title", this.title + " - 谷洛有题");
        if (this.header == "header") {
            for (let i of this.breadCrumb) {
                $(".bread-crumb").append(`<span> / </span><a href="${i.href}">${i.title}</a>`)
            }
            for (let i = this.buttons.length - 1; i >= 0; i--) {
                let btn = this.buttons[i];
                $(".header-bottom").prepend(`<button class="btn ${btn.class}" onclick="window.location.href='${btn.href}'">${btn.title}</button>`)
            }
            if (this.showData) {
                $(".data-box")
                    .append(
                        `<div>
                    <div>提交</div>
                    <div>100.23K</div>
                </div>
                <div>
                    <div>通过</div>
                    <div>75.23K</div>
                </div>
                <div>
                    <div>时间限制</div>
                    <div>1.00s</div>
                </div>
                <div>
                    <div>内存限制</div>
                    <div>125.00MB</div>
                </div>`)
            }
            $("#title").text(this.title)
        }
    });
    $("#sidebar").load("customize/sidebar.html");
    $("#footer").load("customize/footer.html");
}