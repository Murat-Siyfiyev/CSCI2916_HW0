const axios = require('axios')

module.exports = async (phrase) => {
    constresults = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    })


    var results= {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: results.config.headers
    }
    return JSON.stringify(results.data);
    return JSON.stringify(results.data);
}

/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })*/
    //sources for this code is from your lectures from week 1 and 2
