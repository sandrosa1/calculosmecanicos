<?php include 'include/nav.php'; ?>
<div class="container">
    <div class="row">
     <div class="col-md-4 ">
     <div>
         <h2>Calculo de cone</h2>
    </div>
     <section>
            <div class="angulo"><img src="imagem/cone.jpeg" class="figure-img img-fluid rounded "
                    alt="Cone com rololete para medição">
            </div>
        </section>
     </div>
     <div class="col-md-4 interna ">
     <div class="cone">
         <div>
     <label id="respEzero" class="label" for="eZero">Informe o &empty; E0</label>
     </div>
     <input type="text" id="ezero" placeholder="         Digite o EO:">
     </div>
     <div>
         <div class="cone">
     <label id="respAngulo" class="label" for="angulo">Informe o ângulo</label>
     </div>
     <input type="text" id="grau" placeholder="    0&ring;">
     <input type="text" id="minutos" placeholder="   00'">
     <input type="text" id="segundos" placeholder='  00 "'>
     </div>
     <div class="cone">
         <div>
     <label id="respPadrao"class="label" for="padrao">Medida do Padrão</label>
     </div>
     <input type="text" id="padrao" placeholder="      Altura do padrão">
     </div>
     <div class="cone">
         <div>
     <label id="respRolete" class="label" for="rolete">&empty; Do rolete</label>
     </div>
     <input type="text" id="rolete" placeholder="          &empty; Rolete">
     </div>
     <div><button type="submit" class="botaoPadrao" id="calculaCone">Calcular</button></div>
     </div>
     <div class="col-md-4">
     <div id="respCone">
     <div id="resp1"></div>
     <div id="resp2"></div>
     <div id="resp3"></div>
     </div>
     </div>
</div>
<script type= "module" src="js/cone.js"></script>
<?php include 'include/bottom.php'; ?>