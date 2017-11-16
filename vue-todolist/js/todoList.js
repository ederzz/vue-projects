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
						deleted: false,
						show: true
					},
					taskList: [],
					btnAllClass: {
						btn: true,
						'btn-all': true,
						actived: true
					},
					btnActiveClass: {
						btn: true,
						'btn-active': true,
						actived: false
					},
					btnFinishedClass: {
						btn: true,
						'btn-finished': true,
						actived: false
					}
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
							unfinished: !this.taskList[index].finished,
							show: this.taskList[index].show,
							hide: !this.taskList[index].show
						}
					},
					deleteAll() {
						//删除所有已完成任务
						this.taskList = this.taskList.filter( ( task ) => !task.finished );
					},
					showActive() {
						this.btnAllClass.actived = false;
						this.btnActiveClass.actived = false;
						this.btnFinishedClass.actived = false;
						this.btnActiveClass.actived = true;
						this.taskList = this.taskList.map( ( task ) => {
							if( task.finished ) {
								task.show = false;
							}else{
								task.show = true;
							}
							return task;
						} );
					},
					showFinished() {
						this.btnAllClass.actived = false;
						this.btnActiveClass.actived = false;
						this.btnFinishedClass.actived = false;
						this.btnFinishedClass.actived = true;
						this.taskList = this.taskList.map( ( task ) => {
							if( !task.finished ) {
								task.show = false;
							}else{
								task.show = true;
							}
							return task;
						} );
					},
					showAll() {
						this.btnAllClass.actived = false;
						this.btnActiveClass.actived = false;
						this.btnFinishedClass.actived = false;
						this.btnAllClass.actived = true;
						this.taskList = this.taskList.map( ( task ) => {
							task.show = true;
							return task;
						} );
					},
					hideAll() {
						this.taskList = this.taskList.map( ( task ) => {
							task.show = !task.show;
							return task;
						} );
					}
				},
			} );
			