
//controller-todos

app.controller('todosCtrl', ($scope) => {
    $scope.task = {};
    $scope.items = [];

    $scope.enterEvent = (event) => {
        const e = event ? event : window.event;

        if (e.keyCode == 13) {
            $scope.items.push($scope.task.value);
        }
    };

    $scope.clickEvent = (event) => {
        console.log($scope.task.delValue);
        let isTrue = $scope.task.delValue;

        if (isTrue) {
            $scope.task.delValue = false;
            
        } else {
            $scope.task.delValue = true;
        }
    }
});

