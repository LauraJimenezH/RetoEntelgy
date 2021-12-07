

class Pais extends HTMLElement {
    constructor() {
        super()
        .attachShadow({ mode: 'open' })
        .innerHTML = 
            `
            <style>
            /* CSS Local */
            .card-pais {
                border-radius: 5px;
                overflow: hidden;
                width: 250px;
                box-shadow: 1px 0 10px 0 rgba(0, 0, 0, 0.2);
                margin: 15px;
                padding-bottom: 65px;
                position: relative;
                cursor: pointer
            }

            .card-pais img {
                width: 250px;
            }

            .namePais {
                margin-left: 18.7px;
                margin-right: 18.7px;
                cursor: pointer;
                font-size: 21px;
                margin-bottom: 20px;
            }

            .namePais:hover {
                text-decoration: underline;
            }

            .capitalPais {
                margin-bottom: 8px;
                color: #666;
                font-weight: 500;
            } 
            
            .poblacionPais {
                margin-top: 8px;
                color: #666;
                font-weight: 500;
                margin-bottom: 25px;
            }

            /* .card-pais:hover {
                transform: scale(1.04)
            }  */

            .card-pais:hover .content-card {
                bottom: -6px;
            }

            .content-card {
                background: white;
                position: absolute;
                bottom: -70px;
                width: 100%;
                text-align: center;
                transition: all .47s ease-out;
                box-shadow: 0 0 5px #888;
            }

            .modal {
                display: none;
                position: fixed;
                height: 100vh;
                width: 100vw;
                background-color: rgba(0,0,0,.8);
                top: 0;
                left: 0;
                z-index: 9;
                justify-content: center;
                align-items: center;
            }

            .modal-content {
                background-color: white;
                border-radius: 2px;
                padding: 40px;
                width: 50%;
                position: relative;
            }

            .modal-content h1 {
                text-align: center;
                margin-top: 0px;
            }

            .graficPaisModal, .infoPaisModal {
                display: inline-block;
                vertical-align: text-top;
            }

            .linkMapa {
                display: block;
                text-align: center;
                color: #2f96ed;
                text-decoration: none;
                margin-top: 10px;
            }

            .linkMapa:hover {
                text-decoration: underline;
            }

            .infoPaisModal {
                margin-left: 25px;
            }

            .infoPaisModal h4 {
                margin: 10px 0px;
                color: #545454;
            }

            .imgPaisModal {
                box-shadow: 0 0 5px #888;
                width: 100%;
            }

            #closeModal {
                right: 22px;
                top: 0px;
                font-size: 40px;
                position: absolute;
                cursor: pointer;
            }

            </style>
            <div class="card-pais">
                <img class="imgPais">
                <div class="content-card">
                    <h3 class="namePais" id=openModal></h3>
                    <p class="capitalPais"></p>
                    <p class="poblacionPais"></p>
                </div>
            </div>
            <div class="modal">
                <div class="modal-content">
                    <span id="closeModal">&times;</span>
                    <h1 class="namePaisModal"></h1>
                    <div class="graficPaisModal">
                        <img class="imgPaisModal">
                        <a class="linkMapa" target="_blank">See map</a>
                    </div>
                    <div class="infoPaisModal">
                        <h4 class="continentePaisModal"></h4>
                        <h4 class="capitalPaisModal"></h4>
                        <h4 class="poblacionPaisModal"></h4>
                        <h4 class="regionPaisModal"></h4>
                        <h4 class="subregionPaisModal"></h4>
                        <h4 class="monedaPaisModal"></h4>
                    </div>
                </div>
            </div>
            `
        this.shadowRoot.querySelector(".namePais").innerText = this.getAttribute('name');
        this.shadowRoot.querySelector(".namePaisModal").innerText = this.getAttribute('name');
        this.shadowRoot.querySelector(".capitalPais").innerText = `Capital: ${this.getAttribute('capital')}`
        this.shadowRoot.querySelector(".poblacionPais").innerText = `Population: ${this.getAttribute('poblacion')}`
        this.shadowRoot.querySelector('.imgPais').src = this.getAttribute('imagen');
        this.shadowRoot.querySelector(".continentePaisModal").innerText = `Continent: ${this.getAttribute('continente')}`
        this.shadowRoot.querySelector('.imgPaisModal').src = this.getAttribute('imagen');
        this.shadowRoot.querySelector('.linkMapa').href = this.getAttribute('maps');
        this.shadowRoot.querySelector(".capitalPaisModal").innerText = `Capital: ${this.getAttribute('capital')}`
        this.shadowRoot.querySelector(".poblacionPaisModal").innerText = `Population: ${this.getAttribute('poblacion')}`
        this.shadowRoot.querySelector(".regionPaisModal").innerText = `Region: ${this.getAttribute('region')}`
        this.shadowRoot.querySelector(".subregionPaisModal").innerText = `Subregion: ${this.getAttribute('subregion')}`
    }

    

    connectedCallback () {
        let open = this.shadowRoot.getElementById('openModal');
        let close = this.shadowRoot.getElementById('closeModal');
        open.addEventListener('click', () => {
            this.openModal();
        });
        close.addEventListener('click', () => {
            this.closeModal();
        });
    }

     openModal() {
        const modalContent = this.shadowRoot.querySelector('.modal');
        modalContent.style.display = 'flex';
    }

    closeModal() {
        const modalContent = this.shadowRoot.querySelector('.modal');
        modalContent.style.display = 'none';
    }
}

window.customElements.define("pais-component", Pais);