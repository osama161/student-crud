<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"create"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Students</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
							<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Age</th>
								<th>Class</th>
								<th>Actions</th>
							</tr>
							</thead>
							<tbody v-if="students.length > 0">
							<tr v-for="student in students" :key="student.id">
								<td>{{ student.id }}</td>
								<td>{{ student.name }}</td>
								<td>{{ student.age }}</td>
								<td>{{ student.clas }}</td>
								<td>
									<div class="btn-group" role="group">
										<router-link :to="{name: 'edit', params: { id: student.id }}" class="btn btn-success">Edit</router-link>
										<button class="btn btn-danger" @click="deleteStudent(student.id)">Delete</button>
									</div>
								</td>
							</tr>
							</tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="5" align="center">No Students Found.</td>
                                </tr>
                            </tbody>
						</table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                students: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/students/')
                .then(response => {
                    this.students = response.data;
                });
        },
        methods: {
            deleteStudent(id) { 
                this.axios
                    .delete(`http://localhost:8000/api/students/${id}`)
                    .then(response => {
                        let i = this.students.map(data => data.id).indexOf(id);
                        this.students.splice(i, 1)
                    });
            }
        }
    }
</script>