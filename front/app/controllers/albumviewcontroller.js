(function(){
	function AlbumViewController($scope, $routeParams) {
		$scope.album_name = $routeParams.album_name;
	}
	albumApp.controller("AlbumViewController", AlbumViewController);
})();