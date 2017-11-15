Vue.component( 'task-item', {
				props: [ 'task' ],
				template: `
					<div class="task-item">
						<span>
							<i class="icon icon-finished">&#xe61a;</i>
						</span>
						<span class="task-content"
							@click="changeState">{{ task.content }}</span>
						<span>
							<i class="icon icon-deleted"
								@click="deleteTask">&#xe603;</i>
						</span>
					</div>
				`,
				methods: {
					changeState() {
						this.$emit( 'change' );
					},
					deleteTask() {
						this.$emit( 'delete' );
					}
				}
			} );
			
			var vm = new Vue( {
				el: '#app',
				data: {
					task: {
						content: '',
						finished: false,
						deleted: false
					},
					taskList: []
				},
				methods: {
					addNewTask() {
						//添加新任务
						this.taskList.push( Object.assign( {}, this.task ) );
					},
					changeState( index ) {
						//改变任务状态
						this.taskList[ index ].finished = !this.taskList[ index ].finished;
					},
					deleteTask( index ) {
						//删除某个任务
						this.taskList.splice( index, 1 );
					},
					addClass( index ) {
						return {
							finished: this.taskList[index].finished,
							unfinished: !this.taskList[index].finished
						}
					},
					deleteAll() {
						//删除所有已完成任务
						this.taskList = this.taskList.filter( ( task ) => !task.finished );
					}
				},
			} );
			