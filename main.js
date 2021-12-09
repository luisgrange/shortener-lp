const link = $('#url');

$('.shorten').on('click', async function(){
    if(link.val() != undefined){
        let result = await fetch(`https://api.shrtco.de/v2/shorten?url=${link.val()}`, {method: 'POST'})
        let json = await result.json();

        let newJson = JSON.parse(JSON.stringify(json));
        
        $('.shortened ul').append(`

        <div class="link">
            <li>
            <a target="_blank" href="${link.val()}">${link.val()}</a>
            <div class="aux">
                <a target="_blank" href="${newJson['result']['full_short_link']}">${newJson['result']['full_short_link']}</a>
                <button>Copy</button>
            </div>
            </li>
        </div>
        `);

    }
});
