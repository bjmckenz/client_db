<script>
	export let data;
	export let form = {};
</script>

<h1>Fetched from Database</h1>

Sort by: <form action="?/sort" method=post><input type=hidden name=sortby value=containernumber /><button>Container Number</button></form>
<form action="?/sort" method=post><input type=hidden name=sortby value=containersize /><button>Container Size</button></form>

<br/>

{#each data.containers as container}
	<div>
		<span class="id">{container.containernumber}</span>
		<span class="name">{container.nameofship}</span>
		<span class="size">{container.containersize}</span>
		<span class="date">{container.datecontainershipped}</span>
	</div>
{/each}

<br/>
<span class=i>(database lives in PostgreSQL)</span>
<br/>

{#if form?.message}<h3>{form.message}</h3>{/if}
<p>Add a new Container:</p>

<form action="?/add" method="post">
	<input type="text" name="containerNumber" placeholder="Container Number">
	<input type="text" name="nameOfShip" placeholder="Name of Ship">
	<input type="text" name="containerSize" placeholder="Container Size">
	<input type="text" name="dateContainerShipped" placeholder="Date Container Shipped">
	<button>Add</button>
</form>

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
