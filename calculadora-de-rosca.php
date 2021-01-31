<?php include 'include/nav.php'; ?>
<div class="container">
    <div class="row">
        <div class="col-md-12 titulo">
            <h3>Calculadora de rosca produto</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 " id="rosca1">
            <div id="tipoRosca1">
                <label class="mr-sm-2" for="inlineFormCustomSelect" id="resTipo">Tipo de Rosca</label>
                <select class="custom-select mr-sm-2 " id="tipo">
                    <option value="">Rosca...</option>
                    <option value="metrica">Metrica</option>
                    <option value="polegada">Polegada</option>
                    <option value="witworth">Witworth</option>
                </select>
            </div>
            <div >
                <label id="resPasso">Passo</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">P = </span>
                    </div>
                    <input type="text" class="pitch" id="passo" maxlength="6" value="">
                </div>
            </div>
            <div>
                <label id="resDia">&empty;  do parafuso</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">D = </span>
                    </div>
                    <input type="text" class="pitch" id="diaMaior" maxlength="6" value="">
                </div>
            </div>
            <div>
                <br><button type="submit" class="btn btn-primary" id="btn_rosca">Calcular</button>
            </div>
        </div>
        <div class="col-md-3" id="rosca2">
            <div>
                <label for="d">&empty; maior da porca</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">D =</span>
                    </div>
                    <input type="text" class="pitch" id="dz" maxlength="6" value="">
                </div>
            </div>
            <div>
                <label for="d">&empty; menor do parafuso</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">d¹ =</span>
                    </div>
                    <input type="" class="pitch" id="d1" maxlength="6" value="">
                </div>
            </div>
            <div>
                <label for="d">&empty; efetivo do parafuso</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">d² =</span>
                    </div>
                    <input type="" class="pitch" id="d2" maxlength="6" value="">
                </div>
            </div>
            <div>
                <label for="d">Ângulo da rosca</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">a = </span>
                    </div>
                    <input type="text" class="pitch" id="a" maxlength="6" value="">
                </div>
            </div>
            <div>
                <label for="d">Folga entre conjunto</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">f = </span>
                    </div>
                    <input type="text" class="pitch" id="f" value="">
                </div>
            </div>
        </div>
        <div class="col-md-3" id="rosca3">
            <div>
                <label for="d">&empty;menor da porca</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">D¹ = </span>
                    </div>
                    <input type="text" class="pitch" id="dm" maxlength="6" value="">
                </div>
            </div>
            <div>
                <label for="d">&empty; efetivo da porca</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">D² = </span>
                    </div>
                    <input type="text" class="pitch" id="d22" maxlength="6" value="">
                </div>
            </div>
            <div>
                <label for="d">Altura do filete do parafuso</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">h =</span>
                    </div>
                    <input type="text" class="pitch" id="h" maxlength="6" value="">
                </div>
            </div>
            <div>
                <label for="d">Raio da raiz do parafuso</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">re =</span>
                    </div>
                    <input type="" class="pitch" id="re" maxlength="5" value="">
                </div>
            </div>
            <div>
                <label for="d">Raio da raiz da porca</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text index">ri =</span>
                    </div>
                    <input type="" class="pitch" id="ri" maxlength="6" value="">
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div>
                <img src="imagem/perfis.jpeg" class="figure-img img-fluid rounded"
                    alt="Tipos de roscas mais usadas para fabricação mecânica">
            </div> 
        </div>
    </div>
</div>
<script src="js/calcularRosca.js"></script>
<?php include 'include/bottom.php'; ?>