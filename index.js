function getPhotos() {
    fetch('https://api.pexels.com/v1/search/?query=pexels-white.png', {
        headers: {
            Authorization: 'IpnvcqdKWhDyKvzv5cy93Al5S64Nm7zeH4lZLvCACbDYuX0lcQ3xgCl1'
        }
    })
    .then(res => res.json())
    .then(data => {
        let parent = document.querySelector('.photos')
        let photos = data.photos

        if(!window.localStorage.getItem('photos')) {
            console.log('calculating...')
            let photosStr = photos.map(photo => {
                return `
                <div>
                    <img src="${photo.src.original}"/>
                </div>
                `
            }).join('')
            
            window.localStorage.setItem('photos',photosStr)
        }

        parent.innerHTML += window.localStorage.getItem('photos')
    })
}

window.onload = getPhotos