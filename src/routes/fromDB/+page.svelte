<script>
	export let data;
	//console.log({data});

</script>

<h1>Fetched from Database</h1>

{#each data.containers as container}
	<div>
		<span class="id">{container.containernumber}</span>
		<span class="name">{container.nameofship}</span>
		<span class="size">{container.containersize}</span>
		<span class="date">{container.datecontainershipped}</span>
	</div>
{/each}

<span class=i>(database lives in PostgreSQL)</span>

<style>
	.id {
		margin-right: 10px;
		font-weight: bold;
	}
	.name {
		color: #999;
	}
	.i {
		font-style: italic;
	}
</style>
