function x()
{
    fetch("https://dog.ceo/api/breeds/image/random")

    .then(res=>res.json())
    .then(data=>
    {
        document.getElementById("dogimage").src=data.message
    }
    )
}