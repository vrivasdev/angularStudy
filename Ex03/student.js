
/* Controller to access to de model data*/
function StudentsController($scope)
{
    $scope.students = [
        {name:"Victor", telephone:"021212311", course:"Computer science"},
        {name:"Maria", telephone:"04161234123", course:"Maths"},
        {name:"Pepe", telephone:"04261231231", course:"English"},
        {name:"Juana", telephone:"04121261271", course:"History"}
    ];
}