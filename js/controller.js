
//controller-todos

function computedCount(scope) {
    scope.task.count = 0;
    scope.task.clearShow = false;
    scope.active = [];
    scope.completed = [];
    scope.all = scope.items;
    for (let i = 0, len = scope.items.length; i < len; i++) {
        if (scope.items[i].className === 'no-through') {
            scope.task.count++;
            scope.active.push(scope.items[i]);
        } else {
            scope.task.clearShow = true;
            scope.completed.push(scope.items[i]);
        }
    }


}

app.controller('todosCtrl', ($scope, $routeParams) => {
    $scope.task = {count: 0, clearShow: false};
    $scope.items = [];

    $scope.enterEvent = event => {
        const e = event ? event : window.event;

        if (e.keyCode == 13) {
            $scope.items.push({text: $scope.task.value, className: 'no-through', isShow: true});
            $scope.task.value = '';
        }

        computedCount($scope);
    };

    $scope.clickEvent = (index, event) => {
        let tagName = (event.target.tagName).toLowerCase();

        if (tagName === 'span') {
            if ($scope.items[index].className === 'through') {
                $scope.items[index].className = 'no-through';
            } else {
                $scope.items[index].className = 'through';
            }
           
        } else if (tagName === 'i') {
            $scope.items[index].isShow = false;
            $scope.items.splice(index, 1);
        } 
        
        computedCount($scope);
    };

    $scope.selectAll = event => {
        let i = 0;
        let len = $scope.items.length;
        for (; i < len; i++) {
           if ($scope.items[i].className === 'no-through') {
               break;
           }
        }

        for (let j = 0; j < len; j++) {
            if (i === len) {
                $scope.items[j].className = 'no-through';
            } else {
                $scope.items[j].className = 'through';
            }
        }

       computedCount($scope);
    };

    $scope.changeEvent = event => {
        let text = event.target.innerHTML;

        switch(text) {
            case 'All':
                $scope.items = $scope.all;
                break;
            case 'Active':
                $scope.items = $scope.active;
                break;
            case 'Completed':
                $scope.items = $scope.completed;
        }
    };

    $scope.clearEvent = event => {
        $scope.completed = [];
        $scope.items = $scope.active;
        $scope.all = $scope.active;
    };
});

/*
    progressBar
*/

app.controller('bar', ($scope) => {
    $scope.data = {
        max: 100,
        value: 0,
        type: 'info'
    };

    $scope.showPercent = () => {
        $scope.data.value = Math.floor(Math.random() * ($scope.data.max + 1));

        if ($scope.data.value < 50) {
            $scope.data.type = 'info';
        } else if ($scope.data.value > 80) {
            $scope.data.type = 'danger';
        } else {
            $scope.data.type = 'warning';
        }
    };
});


app.directive('progressBar', () => {
    
    return {
        scope: {
            max: '@',
            value: '@',
            type: '@'
        },
        link: ($scope, element, attr) => {
        
            $scope.$watch('value', (newVal) => {
                $scope.percent = parseInt(newVal/$scope.max*100);
            });
           
        },
        restrict:'EA',
        replace: true,
        templateUrl: '../../html/progressBar.html'
    }
});

app.controller('helpCtrl', ($scope, $routeParams, $state) => {
    $scope.id = $routeParams.id;
    
    $scope.clickGo = (event) => {
        $state.go('help.fourth', {id: 123, name: 'susan'});
    };
});
