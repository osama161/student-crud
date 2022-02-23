<template>
    <div>
        <h3 class="text-center">Edit Student</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateStudent">
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
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                student: {}
            }
        },
        created() {
            this.axios
                .get(`http://localhost:8000/api/students/${this.$route.params.id}`)
                .then((res) => {
                    this.student = res.data;
                });
        },
        methods: {
            updateStudent() {
                this.axios
                    .patch(`http://localhost:8000/api/students/${this.$route.params.id}`, this.student)
                    .then((res) => {
                        this.$router.push({ name: 'list' });
                    });
            }
        }
    }
</script>