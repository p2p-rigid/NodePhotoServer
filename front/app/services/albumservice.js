(function(){
	
	function albumProvider() {
		
		var albums = [
			{
				name: 'France1995',
				title: 'Trip to France 1995',
				date: '05/31/1995',
				description: 'A trip to France 1995',
				photos: [
					{
						filename: 'france1995_1.jpg',
						date: '05/02/1995',
						description: 'A wonderful trip to France'
					},
					{
						filename: 'france1995_2.jpg',
						date: '05/02/1995',
						description: 'A wonderful trip to France'
					}
				]
			}, 
			{
				name: 'Egypt2001',
				title: 'Trip to Egypt 2001',
				date: '05/31/2001',
				description: 'A trip to France 2001',
				photos: [
					{
						filename: 'egypt2001_1.jpg',
						date: '05/02/2001',
						description: 'A wonderful trip to France'
					},
					{
						filename: 'egypt2001_2.jpg',
						date: '05/02/2001',
						description: 'A wonderful trip to France'
					}
				]
			}, 
			{
				name: 'England1997',
				title: 'Trip to England 1997',
				date: '05/31/1997',
				description: 'A trip to England 1997',
				photos: [
					{
						filename: 'england1997_1.jpg',
						date: '05/02/1997',
						description: 'A wonderful trip to France'
					},
					{
						filename: 'england1997_2.jpg',
						date: '05/02/1997',
						description: 'A wonderful trip to France'
					}
				]	
			}];
		
		this.getAlbums = function() {
			return albums;
		}

		this.addAlbum = function(album) {
			if(albums) {
				albums.push(album);
			}

		}
	}

	albumApp.service("albumProvider", albumProvider);

})();