app.controller('contentCtrl', function ($scope, $http) {
    $scope.isLoading = true;
    $scope.isAdd = true;//true if add content was click and false if edit was click
    $scope.mode = "";
    $scope.Id = "";
    $scope.Title = "";
    $scope.Author = "";
    //showing modal to add new content
    $scope.add = function () {
        $scope.isAdd = true;
        $scope.mode = "Add Content"
        $('#myModal').modal('show');
    };
    //showing modal to edit content
    $scope.edit = function (index) {
        $scope.isAdd = false;
        var data = $scope.contents[index];
        $scope.Id = data.Id;
        $scope.Author = data.Author;
        $scope.Title = data.Title;
        $scope.mode = "Update Content"
        $('#myModal').modal('show');
    };
    //get server data(content)
    $scope.getContent = function () {
        $http.get("http://manilatest.azurewebsites.net/api/contents").then(function (response) {
            //console.log(response);
            $scope.contents = response.data;
            $scope.isLoading = false;
        });
    };
    //add new content
    $scope.addContent = function () {
        if ($scope.Title && $scope.Author) {
            $scope.contents.unshift(new ContentModel($scope.Title, $scope.Author, $scope.contents));
        } else {
            alert("Enter title and author!");
        }
        $scope.Title = "";
        $scope.Author = "";
    };
    //update selected content
    $scope.updateContent = function () {
        if ($scope.Title && $scope.Author) {
            var data = Enumerable.From($scope.contents).Where(function (e) {
                return e.Id == $scope.Id;
            }).FirstOrDefault(null);
            var index = $scope.contents.indexOf(data);
            $scope.contents[index].Title = $scope.Title;
            $scope.contents[index].Author = $scope.Author;
        } else {
            alert("Enter title and author!");
        }
        $scope.Id = "";
        $scope.Author = "";
        $scope.Title = "";
    };
    //add or update content
    $scope.save = function () {
        if ($scope.isAdd) {
            $scope.addContent();
        } else {
            $scope.updateContent();
        }
    };
    //delete selected content
    $scope.removeContent = function (index) {
        $scope.contents.splice(index, 1);
    };
    //reload inital data
    $scope.getInitalData = function () {
        $scope.isLoading = true;
        $scope.getContent();
    };
    //alert JSON data
    $scope.postContent = function () {
        alert(JSON.stringify($scope.contents));
    }
    //call the getContent to load the data upon pageLoad
    $scope.getContent();
});