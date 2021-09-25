function addElementsToList(url,breedName,lifeSpan,breedGroup){
    var element=document.createElement('li');
    var image=document.createElement('img');
    var name=document.createElement('h4');
    var life=document.createElement('p');
    var group=document.createElement('p');
    name.innerText=breedName;
    life.innerHTML=`Life-span: ${lifeSpan}`;
    group.innerText=breedGroup;
    image.src=url;
    element.append(image);
    element.append(name);
    element.append(lifeSpan);
    element.append(group);
    document.querySelector('.dogs').append(element);
}


function fetchDogImage(){
    var xhrRequest=new XMLHttpRequest();

    xhrRequest.onload=function(){
       // console.log(xhrRequest.response);
        var responseJSON=JSON.parse(xhrRequest.response);
        console.log(responseJSON);
        //var breedUrl=responseJSON.url;

        for(var breed of responseJSON){
            breed.breeds.forEach(element => {
                //console.log(element.name);
                addElementsToList(breed.url,element.name,element.life_span,element.breed_group);
            });
            
        }
       
    }

    xhrRequest.open('get','https://api.thedogapi.com/v1/images/search?limit=50&page=10&order=Desc');
    xhrRequest.send();
}


document.querySelector('#getImages').addEventListener('click',fetchDogImage);


