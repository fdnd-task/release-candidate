
<script>

	import {FooterContact, FooterLinks, FooterExtra} from '$lib/index.js'
	
</script>

<footer> 

    <div class="footer-container"></div>
	<FooterLinks />
	<FooterContact />
	<FooterExtra />

</footer>

<style> 

@media only screen and (min-width: 768px) {

	footer{
		background-color: #051a1a;
		display: flex;
		justify-content: space-between;
		padding: 3em;	
	}

}

@media only screen and (max-width: 768px) {
	footer{
		display: flex;
		justify-content: space-between;
	}
}




</style>