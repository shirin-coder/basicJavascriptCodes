let alien = {
    name : "shirin",
    tech : "JS",
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'Asus'
    }
}
for(let key in alien)
{
    console.log(key,alien[key]);
    
}