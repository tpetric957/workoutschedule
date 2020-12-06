<template>
  <div class="container">
	<ejs-autocomplete class="autocomplete" :dataSource='dataItem' :fields='dataFields' placeholder="Select a workout from our database" :highlight="true" v-model="newExercise" @keyup.enter="addExercise" popupHeight="600px"></ejs-autocomplete>
	<input type="text" class="exerciseInput" placeholder="or write down your exercise" v-model="newExercise" @keyup.enter="addExercise">
	<div v-for="(exercise, index) in exercisesFiltered" :key="exercise.id" class="lista">
		<b-checkbox v-model="exercise.completed"></b-checkbox>
		<div class="exercises-left">
			
			<div v-if="!exercise.editing" class="exercise-label" @dblclick="editExercise(exercise)"  :class="{ check : exercise.completed }">{{exercise.title}}</div>
			<input v-else class="exercise-edit" type="text" v-model="exercise.title" @blur="doneEdit(exercise)" @keyup.enter="doneEdit(exercise)" @keyup.esc="cancelEdit(exercise)" v-focus>
		</div>
		<div class="remove" @click="removeExercise(index)">
			&times;
		</div>
	</div>
	<div class="extra-container">
		<div><label><input type="checkbox" :checked="!anyRemaining" @change="checkAll">Check All</label></div>
		<div>{{ remaining }} items left</div>
	</div>

	<div class="extra-container">
		<div>
			<button class="button" @click="filter = 'all'" :class="{ active : filter=='all' }">All</button>
			<button class="button" @click="filter = 'active'" :class="{ active : filter=='active' }">Active</button>
			<button class="button" @click="filter = 'completed'" :class="{ active : filter=='completed' }">Completed</button>
		</div>
		<div>
			<button v-if="showClearCompletedButton" @click="clearCompleted" class="button">Clear Completed</button>
		</div>
	</div>
  </div>
</template>

<script>
export default {
	name: 'exercise-list',
	data(){
		return {
			newExercise: '',
			idForExercise: 1,
			beforeEditCache: '',
			filter: '',
			exercises: [],
			dataItem:[
				{exerciseId: '1', exerciseData: 'Pushup'},
				{exerciseId: '2', exerciseData: 'Situp'},
				{exerciseId: '3', exerciseData: 'Burpee'},
				{exerciseId: '4', exerciseData: 'Biceps Curl'}
			],
			dataFields:{value: 'exerciseData'}
		}
	},
	computed: {
		remaining(){
			return this.exercises.filter(exercise => !exercise.completed).length
		},
		anyRemaining(){
			return this.remaining != 0
		},
		exercisesFiltered(){
			if(this.filter == 'all'){
				return this.exercises
			} else if(this.filter == 'active'){
				return this.exercises.filter(exercise => !exercise.completed)
			}else if(this.filter == 'completed'){
				return this.exercises.filter(exercise => exercise.completed)
			}
			return this.exercises
		},
		showClearCompletedButton(){
			return this.exercises.filter(exercise => exercise.completed).length > 0
		}
	},
	directives:{
		focus: {
			inserted: function (el){
				el.focus()
			}
		}
	},
	methods: {
		addExercise(){
			if(this.newExercise.trim().length == 0){
				return
			}
			this.exercises.push({
				id: this.idForExercise,
				title: this.newExercise,
				completed: false
			})

			this.newExercise = ''
			this.idForExercise ++
		},
		removeExercise(index){
			this.exercises.splice(index, 1)
		},
		editExercise(exercise){
			this.beforeEditCache = exercise.title
			exercise.editing = true
		},
		doneEdit(exercise){
			if(exercise.title.trim() == ''){
				exercise.title = this.beforeEditCache
			}
			exercise.editing = false
		},
		cancelEdit(exercise){
			exercise.title = this.beforeEditCache
			exercise.editing = false
		},
		checkAll(){
			this.exercises.forEach((exercise) => exercise.completed = event.target.checked)
		},
		clearCompleted(){
			this.exercises = this.exercises.filter(exercise => !exercise.completed)
		}
	}

}
</script>

<style scoped>
@import url(https://cdn.syncfusion.com/ej2/material.css);
.exerciseInput{
	width:100%;
	padding: 10px 10px;
	font-size: 18px;
	margin-bottom: 16px;
}
.lista{
	margin-bottom: 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.remove{
	cursor: pointer;
	margin-left: 14px;
}
.exercise-left{
	display: flex;
	align-items: center;
}
.exercise-label{
	padding: 10px;
	border: 1px solid white;
	margin-left: 12px;
}
.exercise-edit{
	font-size: 18px;
	color: #2c3e50;
	margin-left:12px;
	width:100%;
	padding: 10px;
	border: 1px solid #ccc;
}
.check{
	text-decoration: line-through;
	color:gray;
}
.extra-container{
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	border-top: 1px solid lightgrey;
	padding-top: 14px;
	margin-bottom:14px;
}
.button{
	font-size: 14px;
	background-color: white;
	appearance: none;
}
.button:hover{
	background: lightblue;
}
.button:focus{
	outline: none;
}
.active{
	background-color: lightblue;
}

</style>