angular.module("Controllers", [])
	.controller("Main", function ($scope) {

		$scope.final_set = {};

		$scope.submitIntervals = function() {
			var i,
				interval;
				
			for (i = 0; i < $scope.intervals.length; i += 1) {
				interval = $scope.intervals[i];
				console.log(interval);
			}
		};

		$scope.intervals = new Array(1);
		$scope.addInterval = function () {
			$scope.intervals.push({});
		
		};

	});