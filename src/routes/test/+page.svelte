<script>
    let flags = [];
  
    function addFlag(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      flags = [...flags, { x, y }];
    }
  </script>
  
  <style>
    .playing-field {
      width: 100%;
      height: 400px;
      background-color: #e0e0e0;
      position: relative;
    }
  
    .flag {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: red; /* Set your flag color */
      border-radius: 50%;
    }
  </style>
  
  <button class="playing-field" on:click={addFlag}>
    {#each flags as { x, y }}
      <div class="flag" style="left: {x}px; top: {y}px;"></div>
    {/each}
  </button>

  