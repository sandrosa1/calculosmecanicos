<?php include 'include/nav.php'; ?>

<div class="container">
<h1>Calcula o rolete ideal</h1>
    <div class="row">
        <div class="col-md-6 inputRoletePasso">
        <div class=" titulo2">
            <label id="resRollPitch">Informe passo em milímetro</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text index">mm</span>
                </div>
                <input type="text" class="pitch" id="rollPitch" maxlength="6" value="">     
            </div>
        </div>
        <div class=" titulo2">
            <label id="resAn1">Informe semi ângulo 1</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text index">&angsph;°</span>
                </div>
                <input type="text" class="pitch" id="angle1" maxlength="5" value="">     
            </div>
        </div>
        <div class=" titulo2">
            <label id="resAn2">Informe semi ângulo 2</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text index">&angsph;°</span>
                </div>
                <input type="text" class="pitch" id="angle2" maxlength="5" value="">     
            </div>
            <button type="submit" class="btn btn-primary" id="btnRoll" >Calcular</button>
        </div>
        </div>
        <div class="col-md-6 ">
        <div id="respRoletePasso"></div>
        <div id="perfilSimples"><img src="imagem/anguloRolo.jpeg" alt="Perfil de uma rosca"></div>
        <div id="perfilRolo" ><img  src="imagem/angulo.jpeg" alt="Perfil de uma rosca"></div>

        
        
        </div>
    </div>
</div>
<script src="js/calcularRoleteIdeal.js"></script>
<?php include 'include/bottom.php'; ?>