<script lang="ts">
    let newTodo: string = '';
    let todos: string[] = [];

    function addTodo() {
        todos = [...todos, newTodo];
        newTodo = '';
    }
</script>

<div class="container flex flex-col items-center justify-center">

    <h1 class="text-4xl font-bold  py-10">Todo List</h1>

    <label class="form-control w-full max-w-xs text-lg" for="todos">Enter a todo</label>
    <input class="input input-bordered w-full max-w-xs" type="text" id="todos" bind:value={newTodo} />
    <button class="btn btn-primary btn-sm m-5" on:click={addTodo}>Add</button>

    <div class="h-96 overflow-x-auto">
        <table class="table table-pin-rows">
          <thead>
            <tr>
              <th>Todo</th>
            </tr>
          </thead>
          <tbody>
            {#each todos as todo, i}
            <tr>
                <td>
                    {i+1}. {todo}
                </td>
            </tr>
            {/each}
          </tbody>
        </table>
    </div>
</div>
