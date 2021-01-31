<?php include 'include/nav.php'; ?>
<div class="container">
    <div class="row">
        <div class=" col-md-6 article">
            <article>
                <h1>calcular ângulo de Hélice</h1>
                <p>Quando um cilindro que gira uniformemente e há um ponto que se move também uniformemente no
                    sentido longitudinal, cada volta completa do cilindro e a distância percorrida pelo ponto
                    chama-se passo.O percurso descrito no cilindro por esse ponto denomina-se hélice.</p>
                <p>Quanto maior for o ângulo da hélice, menor será a força de atrito atuando entre a porca e o parafuso,
                    e isto é comprovado através do paralelogramo de forças. Portanto, deve-se ter critério na aplicação
                    do passo da rosca para o desenvolvimento de produtos.</p>
            </article>
        </div>
        <div class=" col-md-6  ">
            <section>
                <div class="angulo"><img src="imagem/helice.png" class="figure-img img-fluid rounded "
                        alt="A generic square placeholder image with rounded corners in a figure.">
                    <p class="fontesimg">fonte imagem:<a
                            href="http://www.mitsubishicarbide.net/contents/mht/pt/html/product/product_guide/information/turning/threding_mmt_sheet.html">www.mitsubishicarbide.net</a>
                    </p>
                </div>
            </section>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6  titulo2">
            <div id="oculta">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">&angsph;</span>
                    </div>
                    <input type="text" class="pitch" id="resAngulo" value="">
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h2 id="error">Calcular hêlice</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 titulo1">
            <div id="tipoRosca">
                <label class="mr-sm-2" for="inlineFormCustomSelect" id="resTipo">Tipo de Rosca</label>
                <select class="custom-select mr-sm-2 " id="tipo">
                    <option value="">Rosca...</option>
                    <option value="metrica">Metrica</option>
                    <option value="polegada">Polegada</option>
                </select>
            </div>
        </div>
        <div class="col-md-3 titulo2">
            <label id="resPasso">Informe o passo</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text ">Passo</span>
                </div>
                <input type="text" class="pitch" id="passo" maxlength="6" value="">
            </div>
        </div>
        <div class="col-md-3 titulo2">
            <label id="resPrim">Informe o &empty; efetivo</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text ">Media</span>
                </div>
                <input type="text" class="pitch" id="primitivo" maxlength="6" value="">
            </div>
        </div>
        <div class="col-md-3 titulo3"><br><button type="submit" class="btn btn-primary" id="btn">Calcular</button>
        </div>
    </div>
    
</div>
<script type= "module" src="js/calcularAngulo.js"></script>
<?php include 'include/bottom.php'; ?>