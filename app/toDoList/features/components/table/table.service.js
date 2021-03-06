angular
	.module('toDoList.component.table')
	.service('table', TableService);

function TableService($http) {

	return {
		createItem: function(table) {
			console.log(table)
			$http({
				method: 'POST',
				url: '/api/table',
				data: table
			}).then(function(response){
				if (err) throw err;
			})
		},

		getItem: function(table) {
			$http({
				method: 'GET',
				url: '/api/table'
			}).then(function(response){
				response.data.forEach(function(element){
				table.push(element);
				});
			});
		},

		updateItem: function (id, completed) {
			$http({
				method: 'PUT',
				url: '/api/table',
				data: {
					_id: id,
					completed: bool
				}
			}).then(function(response){
				if (err) throw err;
			})
		}
	}
}