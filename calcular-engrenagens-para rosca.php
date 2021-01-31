<?php include 'include/nav.php'; ?>
<div class="container">
    <div id="row">
        <h1>Calcula engrenagem ideal</h1>
        <div class="row">
            <div class="col-md-6 inputRoletePasso">
                <div id="tipoMaquina">
                    <label class="mr-sm-2" id="resTipoMaq">Informe a maquina</label>
                    <select class="custom-select mr-sm-2" id="tipoMaq">
                        <option value="">Maquina</option>
                        <option value="2">matrix 33</option>
                        <option value="5">matrix 16</option>
                        <option value="1">reishauer</option>
                        <option value="3">Stankoimports</option>
                    </select>
                </div>
                <div id="tipoRosca">
                    <label class="mr-sm-2" id="resTipoRos">Tipo de rosca</label>
                    <select class="custom-select mr-sm-2" id="tipoDeRosca">
                        <option value="">Rosca</option>
                        <option value="2">Metrica</option>
                        <option value="1">Polegada</option>
                    </select>
                </div>
                <div class=" titulo2">
                    <label id="resRollPitch">Informe passo.</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text index">mm</span>
                        </div>
                        <input type="text" class="pitch" id="pitch" maxlength="6" value="">
                    </div>
                    <button class="btn btn-primary" id='btnEng'>Calcular</button>
                </div>

                
            </div>


            <div id="respEngrenagens" class="col-xl-6"></div>
        </div>
    </div>





    <script type="module" src="js/engrenagens.js"></script>
    <?php include 'include/bottom.php'; ?>