angular
	.module('toDoList.create')
	.config(createConfig);

function createConfig($stateProvider) {
	$stateProvider.state({
		name: 'create',
		url: '/create',
		templateUrl: '/toDoList/features/create/create.html',
		controller: 'CreateCtrl',
		controllerAs: 'CreateVM' //ask about this!! Can it be name anything you want?
	})
}