<script>
    import { Table, Button } from '$lib/index.js';
    export let data;
</script>

<h1>Betalingen</h1>


<section>
    <h2>Tegoed</h2>
    <p>
        Dit tegoed gebruik je met je OBA-pas. Je kunt er zowel mee lenen als printen.
    </p>
    <p>
        Hieronder kan je via IDEAL tegoed op je OBA-pas zetten.
    </p>
    <div>
        <h3>Jouw tegoed: €24.50</h3>
        <Button buttonText="Toevoegen aan tegoed"/>
    </div>
</section>

<section>
    <h2 class="h2-abonnement">Tellerstand abonnement</h2>
    <p>
        Hieronder vind je alles wat je dit jaar nog kan doen met je abonnement.
    </p>
    <ul>
        <li>Uitleningen boeken: 8 van de 20</li>
        <li>Uitleningen e-books: 6 van de 6</li>
        <li>Beschikbare films: 4 van de 5</li>
        <li>Korting op activiteiten: 50%</li>
        <li>Computertijd: 3 uur per dag</li>
    </ul>
    <div>
        <h3>Jouw abonnement: OBA Basis</h3>
        <Button buttonText="Abonnement uitbreiden"/>
    </div>
  
    <Table tableData={data.paymentss}/>

</section>

<style>

    section{
        height: 30rem;
        display: flex;
        flex-direction: column;
        padding: 0 1.5em;
    }

    section > *{
        max-width: 35rem;
    }

    section:nth-of-type(2){
        background-color: var(--primary-light-color);
    }

    h1{
        padding: 1.5rem;
        padding-bottom: 0;
    }

    h2{
        margin-top: 5rem;
        padding-bottom: 1.5rem;
    }

    h3{
        padding: 1.5rem 0;
    }

    p:first-of-type{
        padding-bottom: 0;
    }

    ul{
        margin-top: 1.5rem;
        list-style: none;
    }

    li{
        padding-bottom: .75rem;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }


/* tablet breakpoint */
@media (min-width: 40em) {

    div{
        flex-direction: row;
        align-items: center;
    }
}


/* laptop breakpoint */
@media (min-width: 68em) {
    


}


</style>