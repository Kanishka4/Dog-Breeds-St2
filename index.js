function addElementsToList(url,breedName,lifeSpan,breedGroup){
    var element=document.createElement('li');
    var image=document.createElement('img');
    var name=document.createElement('h4');
    var life=document.createElement('p');
    var group=document.createElement('p');
    var bold=document.createElement('strong');
    name.innerText=breedName;
    life.append("Life-Span : "+lifeSpan);
    bold.append("Breed : "+breedGroup);
    group.append(bold);
    switch(breedGroup){
        case 'Working':
            group.classList.add('working');
            break;
        case 'Sporting':
            group.classList.add('sporting');
            break;
        case 'Non-Sporting':
                group.classList.add('non-sporting');
                break;
         case 'Terrier':
                    group.classList.add('terrier');
                    break;
         case 'Hound':
            group.classList.add('hound');
            break;
        case 'Herding':
            group.classList.add('herding');
            break;
        case 'Toy':
            group.classList.add('toy');
            break;
        default:
            break;

    }
    image.src=url;
    element.append(image);
    element.append(name);
    element.append(life);
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


