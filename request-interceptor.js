self.addEventListener('fetch', function (event) {
    event.respondWith(async function () {
        let headers = new Headers()
        headers.append("X-Author", "itmo370702")
        return fetch(event.request, {headers: headers})
    }());
});
