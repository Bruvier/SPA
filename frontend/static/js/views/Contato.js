import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Página Inicial");
    }

    async getHtml() {
        return `
            <div class="contato_div_header">
                <h1>CONTATO</h1>
                <br>
                <br>
                <div class="contato_border">
                    <p class="contato_border_lines_p">E-MAIL MEUEMAIL@GMAIL.COM</p>
                    <div class="contato_border_lines">
                    </div>
                </div>
            </div>
        `;
    }
}