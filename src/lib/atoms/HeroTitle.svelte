<script>

</script>
<h1>
    <div class="title-where word">
        <span style="--i:1">W</span>
        <span style="--i:2">H</span>
        <span style="--i:3">E</span>
        <span style="--i:4">R</span>
        <span style="--i:5">E</span>
    </div>
    <div class="title-the-real word">
        <div>
            <span style="--i:6">T</span>
            <span style="--i:7">H</span>
            <span style="--i:8">E</span>
        </div>
        <div>
            <span style="--i:9">R</span>
            <span style="--i:10">E</span>
            <span style="--i:11">A</span>
            <span style="--i:12">L</span>
        </div>
    </div>
    <div class="title-legends word">
        <span style="--i:13">L</span>
        <span style="--i:14">E</span>
        <span style="--i:15">G</span>
        <span style="--i:16">E</span>
        <span style="--i:17">N</span>
        <span style="--i:18">D</span>
        <span style="--i:19">S</span>
    </div>
    <div class="title-begin word">
        <span style="--i:20">B</span>
        <span style="--i:22">E</span>
        <span style="--i:23">G</span>
        <span style="--i:24">I</span>
        <span style="--i:25">N</span>
    </div>
</h1>
<style>


    h1 {
        font-size: 4em;
        padding: 1.5em;
        position: relative;
        display: flex;
        flex-direction: column;
        color: var(--White);
        font-family: var(--Header-Font);
    }

    h1 span {
        position: relative;
        display: inline-flex;
        font-size: clamp(1em, 7vw, 128px);
        font-family: var(--Header-Font);
        text-transform: uppercase;
        display: flex;
        height: fit-content;
        line-height: 62%;

        animation: flip 6s infinite;
        animation-delay: calc(.2s * var(--i));
    }

    @keyframes flip {
        80%,0% {
            transform: rotateY(-360deg);
        }
    }

    .title-where,
    .title-the-real,
    .title-the-real div,
    .title-legends,
    .title-begin {
        display: flex;
        align-items: flex-end;
    }

    .title-legends{
        color: var(--Yellow-Primary);
        margin: 0 0 0 auto;
        width: fit-content;
    }

    .title-the-real {
        width: fit-content;
        margin: 0 0 0 auto;
        gap: 2vw;
    }

    .title-where span:nth-of-type(1),
    .title-where span:nth-of-type(2),
    .title-the-real>div:nth-of-type(2) span:nth-of-type(2) {
        font-size: clamp(1em, 9.5vw, 10,5em);
    }


    .title-legends span {
        font-size: clamp(1em, 8vw, 144px);
    }

    .title-legends span:nth-of-type(1),
    .title-legends span:nth-of-type(7) {
        font-size: clamp(1em, 7vw, 128px);
    }


    .title-legends span:nth-of-type(4) {
        font-size: clamp(1em, 5.2vw, 104px);
    }

    .title-begin {
        width: fit-content;
        margin: 0 auto;
    }

    .title-begin span:nth-of-type(2),
    .title-begin span:nth-of-type(3) {
        font-size: clamp(1em, 5.8vw, 112px);
    }

    h1 > div{
        padding: .1em;
    }
</style>