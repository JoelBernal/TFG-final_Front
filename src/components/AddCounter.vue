// AddCounter.vue

<template>
    <div class="container">
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary" v-on:click="addCounter()">Add</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import store from '../store/store.js';
import * as type from '../store/mutation/types.js';


export default {
    methods: {
        addCounter() {
            store.dispatch({
                [type.Increment]: 20
            });
        }
    }

};


</script>
  