<script>
    import { Button } from '$lib/index.js';
</script>

<h1>Betalingen</h1>


<section class="section-tegoed">

    <h2>Tegoed</h2>
    <p>
        Dit tegoed gebruik je met je OBA-pas. Je kunt er zowel mee lenen als printen.
    </p>
    <p>
        Hieronder kan je via IDEAL tegoed op je OBA-pas zetten.
    </p>
    <div class="tegoed-flex">
    <h3>Jouw tegoed: €24.50</h3>
    <Button buttonText="Toevoegen aan tegoed"/>
    </div>

</section>

<section class="section-tegoed">

    <h2>Jouw abonnement</h2>
    <p>
        Hieronder vind je alles wat je dit jaar nog kan doen met je abonnement.
    </p>
    <ul>
        <li></li>
    </ul>
    <div class="tegoed-flex">
    <button>Abonnement uitbreiden</button>
    </div>

</section>

<style>
    div{
        display: flex;
        justify-content: space-between;
    }
</style>