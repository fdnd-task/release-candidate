<div class="match-contain">
    <p class="subtitle-small">Mixed | Arena | Finale</p>
    <div class="match">
        <div class="wrapper">
            <p class="time-label">12:45</p>
            <div class="teams">
                <div>
                    <img src="../images/team-logo-dog.png" alt="Logo Dog">
                    <p>Dog</p>
                </div>
                <p class="score-label">18-12</p>
                <div>
                    <img src="../images/team-logo-camel.png" alt="Logo Camel">
                    <p>Camel</p>
                </div>
            </div>
        </div>
        <a class="add-points-button" href="/">Add points</a>
    </div>
</div>

<style>

    .match-contain{
        margin-top: 1rem;
    }

    .subtitle-small{
        font-size: 0.7rem;
        color: var(--bio-player-font-color);
        font-weight: bold;
        text-align: right;
        margin: 0.5rem 1rem;
    }

    .match{
        display: flex;
        background-color: var(--element-background-color);
        border-radius: 10px;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;
    }

    .match:hover{
        background-color: var(--hover-background-color);
        box-shadow: var(--box-shadow);
    }

    .time-label{
        font-family: var(--primary-font-family);
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--primary-font-color);
    }

    .wrapper{
        display: flex;
        gap: 0.5rem;
        align-items: center
    }

    .teams{
        display: flex;
        flex-direction: column;
    }

    .teams div{
        display: flex;
    }

    .teams img{
        max-width: 1rem;
        max-height: 1rem;
        margin: 0rem 0.5rem 0rem 1rem
    }

    .teams p{
        font-family: var(--secondary-font-family);
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--primary-font-color);
    }

    .score-label{
        display: none;
    }

    .add-points-button{
        font-size: 0.8rem;
        font-family: var(--secondary-font-family);
        font-weight: bold;
        color: white;
        text-decoration: none;
        background-color: var(--block-by-color);
        border-radius: 20px;
        padding: 0.5rem;
    }

    @media (min-width: 50rem){

        .match-contain{
            position: relative;
            align-items: center;
        }

        .subtitle-small{
            position: absolute;
            font-size: 0.8rem;
            font-weight: 600;
            top: 30%;
            right: 25%;
        }

        .time-label{
            font-size: 1rem;
        }

        .teams img{
            max-width: 1.5rem;
            max-height: 1.5rem;
        }

        .teams p{
            font-size: 1rem;
        }

        .add-points-button{
            font-size: 0.9rem;
            font-weight: 600;
        }
    }

    @media (min-width: 70rem){

        .subtitle-small{
            font-size: 0.8rem;
            right: 15%;
        }

        .time-label{
            margin-left: 3rem;
        }

        .teams{
            flex-direction: row;
            margin-left: 8rem;
        }

        .teams > div:first-child{
            flex-direction: row-reverse;
        }

        .teams img{
            max-width: 2rem;
            max-height: 2rem;
        }

        .teams p{
            font-size: 1rem;
            margin: auto;
        }

        .score-label{
            display: block;
            padding: 0rem 1rem 0rem 2rem;
        }

        .add-points-button{
            font-size: 1rem;
            padding: 0.5rem 1rem;
        }
    }
    
</style>