<script>

    //FUNCTION FOR SELECTING THE TEAM TO ADD POINTS TO
    let activeTeam = 'Bird';
  
    function selectTeam(team) {
        activeTeam = team;
    }
    //////////////////////////////////////////////////////

    //FUNCTION FOR INCREMENTING OR DECREMENTING THE SCORE BETWEEN TEAMS
    let countTeamA = 0;
    let countTeamB = 0;

    function incrementTeamA(){
        countTeamA++
    }

    function decrementTeamA(){
        if (countTeamA > 0) {
            countTeamA--
        };
    }

    function incrementTeamB(){
        countTeamB++
    }

    function decrementTeamB(){
        if(countTeamB > 0){
            countTeamB--
        }
    }
</script>

<main>
    <section class="point-selector">
        <h2>Add points</h2>
        <div class="score">
            <div class="team-A">
                <div class="team-A1 team">
                    <img alt="logo team Bird" src='/images/logo1.png'>
                    <span>Bird</span>
                </div>
                <span class="score-team-A">{countTeamA}</span>
                <div class="counter-team-A">
                    <button class="+team-A adder" on:click={incrementTeamA}>+</button>
                    <button class="-team-A subtractor" on:click={decrementTeamA}>-</button>
                </div>
            </div>
            <div class="team-B">
                <div class="team-B1 team">
                    <img alt="logo team pirates" src="/images/piratesLogo.png">
                    <span>Pirates</span>
                </div>
                <span class="score-team-B">{countTeamB}</span>
                <div class="counter-team-B">
                    <button class="+team-B adder" on:click={incrementTeamB}>+</button>
                    <button class="-team-B subtractor" on:click={decrementTeamB}>-</button>
                </div>
            </div>

        </div>
    </section>
    <section class="team-selector">
        <h2>Select team / stats</h2>
        <div class="team-selector-inner">
            <div class="select-team-buttons">
                <button class="select-team-btn" class:selected-team={activeTeam === 'Bird'} on:click={() => selectTeam('Bird')}>
                    <img src='/images/logo1.png' alt="logo team bird">
                    <p>Bird</p>
                </button>
                <button class="select-team-btn" class:selected-team={activeTeam === 'Camel'} on:click={() => selectTeam('Camel')}>
                    <img src='/images/piratesLogo.png' alt="logo team pirates">
                    <p>Pirates</p>
                </button>
            </div>
            <div class="stat-selector">
                <div class="stat-selector-options">
                    <button class="add-score option">Point</button>
                    <button class="add-assist option">Assist</button>
                    <button class="add-turnover option">Turnover</button>
                    <button class="add-block option">Block</button>
                </div>
                <div class="player-list">
                    <div class="player">
                        <span class="jersey-number">4</span>
                        <span class="player-name">Hendrik Peters</span>
                    </div>
                    <div class="player">
                        <span class="jersey-number">18</span>
                        <span class="player-name">Hendrik Peters</span>
                    </div>
                    <div class="player">
                        <span class="jersey-number">3</span>
                        <span class="player-name">Hendrik Peters</span>
                    </div>
                    <div class="player">
                        <span class="jersey-number">16</span>
                        <span class="player-name">Hendrik Peters</span>
                    </div>
                    <div class="player">
                        <span class="jersey-number">11</span>
                        <span class="player-name">Hendrik Peters</span>
                    </div>
                    <div class="player">
                        <span class="jersey-number">6</span>
                        <span class="player-name">Hendrik Peters</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style>

    /* TOGGLE CLASS FOR TEAM SELECTION */

    main {
        width: 100%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    h2{
        font-size: 15px;
        margin-left: 5%;
        margin-bottom: 5px;
    }

    .team-selector{
        display: flex;
        flex-direction: column;
    }
    
    .team-selector-inner{
        background-color: white;
        padding: 2rem;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
    }

    .select-team-btn {
        background-color: white;
        border: none;
        font-family: var(--primary-font-family);
        color: var(--primary-font-color);
        font-weight: 600;
        font-size: 16px;
        width: 40%;
        padding: 1rem;
        border-radius: 10px;
        border: 2px solid var(--selected-background-color)
    }

    .select-team-btn img{
        width: 50%;
    }

    .selected-team{
        background-color: var(--selected-background-color);
    }

    .select-team-buttons{
        display: flex;
        justify-content: space-evenly;
    }

    .point-selector{
        display: flex;
        flex-direction: column;
    }

    .score{
        display: flex;
        background-color: white;
        border-radius: 20px;
        padding: 1rem;
    }

    .team-A,
    .team-B{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        align-items: center;
        gap: 1rem;
    }

    .team{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .team img{
        width: 25%;
    }

    .score-team-A,
    .score-team-B{
        font-family: var(--primary-font-family);
        color: var(--primary-font-color);
        font-size: 32px;
        font-weight: 800;
        
    }

    .team span{
        font-family: var(--primary-font-family);
        color: var(--primary-font-color);
        font-weight: 600;
    }

    .adder,
    .subtractor{
        background-color: var(--primary-font-color);
        border: none;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        width: 60px;
    }

    .counter-team-A,
    .counter-team-B{
        display: flex;
        gap: 0.5rem;
    }

    .counter-team-A button,
    .counter-team-B button{
        font-size: 28px;
    }

    .stat-selector{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .stat-selector-options{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        gap: 0.5rem;
        width: 100%;
    }
    
    .option{
        padding: 0.5rem;
        border-radius: 10px;
        border: none;
        background-color: transparent;
        color: white;
        font-weight: 600;
        width: 100%;
        text-align: center;
    }

    .add-score{
        grid-area: 1 / 1 / 2 / 2;
        background-color: var(--scored-by-color);
        border: 2px solid var(--scored-by-color);
    }

    .add-assist{
        grid-area: 1 / 2 / 2 / 3; 
        background-color: var(--assist-by-color);
        border: 2px solid var(--assist-by-color);
    }

    .add-turnover{
        grid-area: 1 / 3 / 2 / 4;
        background-color: var(--turnover-by-color);
        border: 2px solid var(--turnover-by-color);
    }

    .add-block{
        grid-area: 1 / 4 / 2 / 5;
        background-color: var(--block-by-color);
        border: 2px solid var(--block-by-color);
    }

    .player-list{
        display: flex;
        flex-direction: column;
        height: 400px;
        overflow-y: auto;
        gap: 0.5rem;
    }

    .player{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        border-bottom: 4px solid var(--hover-background-color);
    }

    .jersey-number{
        border: 2px solid var(--primary-font-color);
        border-radius: 5px;
        font-family: var(--primary-font-family);
        font-weight: 600;
        width: 30px;
        padding: 0.2rem 0;
        text-align: center;
    }

    .player-name{
        font-family: var(--primary-font-family);
        font-weight: 600;
        color: var(--primary-font-color)
    }

    @media only screen and (min-width: 1024px){
        main{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
        }

        .team-selector{
            grid-area: 1 / 1 / 3 / 2;
        }

        .point-selector{
            grid-area: 1 / 2 / 2 / 3;
        }

        
    }

</style>