<?php include 'include/nav.php'; ?>
<div class="container">
    <div class="row">
        <div class="col-xl-12"><h1>Calcular sobre rolo</h1></div>
    </div>
    <div class="row">
        <div class="col-xl-4">
            <div class="form-group col-md-6">
                <label for="inputPasso"id="ansInputPitch">Informe o passo</label>
                <input type="text" class="form-control" id="inputPitch" maxlength="5"  placeholder="Obs: Em mm">
            </div>
            <div class="form-group col-md-6">
                <label for="inputPrimitivo" id="ansInputPrimitivo" >Informe o &empty; efetivo</label>
                <input type="text" class="form-control" id="inputPrimitivo" maxlength="7"  placeholder="Obs: Em mm">
            </div>
        </div>
        <div class="col-md-4">
        <div class="form-group col-md-6">
                <label for="inputAngle1" id="ansInputAngle1">Informe o semi &angsph; 1 </label>
                <input type="text" class="form-control" id="inputAngle1" maxlength="5" placeholder="Ex: 27.30 ou 30">
            </div>
            <div class="form-group col-md-6">
                <label for="inputAgle2" id="ansInputAngle2">Informe o semi &angsph; 2</label>
                <input type="text" class="form-control" id="inputAngle2" placeholder="Ex: 14.30 ou 15 ">
            </div>
        </div>
        <div class="col-md-4">
        <div class="form-group col-md-6">
                <label for="inputRolo" id="ansInputRoll">Informe o &empty; do rolete</label>
                <input type="text" class="form-control" id="inputRoll" maxlength="5" placeholder="Ex: 0.895">
            </div>
            <div class="form-group col-md-6">
                <button type="button" class="btn btn-primary" id="btnSubmit">Calcular</button>
            </div>
        </div>
    </div>
    <div class="row" >
        <div class="col-xl-12"id="result">
        <div id="answerRoll"></div>
        <div id="answerHelice"></div>
        <div id="answerConstatRoll"></div>
        <div id="answerPrimitivo"></div>
        <div id="answerSobreRolo"></div>
        <div id="answerConstantAnel"></div>
        <div id="answerCorrecaoHelice"></div>
        </div>
    </div>
    <script type= "module" src="js/calcularSobreRolo.js"></script>
</div>
<?php include 'include/bottom.php'; ?>