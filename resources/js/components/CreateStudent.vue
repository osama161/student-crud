<template>
    <div>
        <h3 class="text-center">Create Student</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addStudent">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="student.name">
                    </div>
                    <div class="form-group">
                        <label>Age</label>
                        <input type="text" class="form-control" v-model="student.age">
                    </div>
                    <div class="form-group">
                        <label>Class</label>
                        <input type="text" class="form-control" v-model="student.clas">
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                student: {
                    name:"",
                    age:"",
                    clas:""
                }
            }
        },
        methods: {
            addStudent() {
                this.axios
                    .post('http://localhost:8000/api/students', this.student)
                    .then(response => (
                        this.$router.push({ name: 'list' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>