import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Página Inicial");
    }

    async getHtml() {
        return `
            <div class="title">
                <h1>Single Page Application</h1>
                <p>
                    Aqui você irá encontrar alguns filmes para você poder baixar para assistir.
                </p>
                <p>
                    <br>
                    <a class="conteudolink" href="/conteudo" data-link>Ver conteúdo</a>.
                </p>
            </div>
        `;
    }
}
