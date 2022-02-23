<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <span class="navbar-brand" >Students - CRUD </span>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link exact-active-class="active" to="/" class="nav-item nav-link">Home</router-link>
                        <router-link exact-active-class="active" to="/list" class="nav-item nav-link">List Students</router-link>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {}
</script>