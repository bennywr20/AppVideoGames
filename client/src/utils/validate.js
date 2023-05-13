const validate = (input)  => {
    const errors = {};
    const regexImg = /^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/
    const regexName = /([0-9])+/;

    if(!input.name.trim()) {
        errors.name = 'Please, write a name for your videogame'
    } else if (input.name.length > 30 || input.name.length < 2){
        errors.name = 'Please, write a videogame name with more than 2 characters and less than 30'

    } else if(regexName.test(input.name.trim())) {
        errors.name = 'Numbers are not allowed in the name'
    }

    if(!input.rating){
        errors.rating='Please, digit a rating for your videogame'
    } else if (input.rating > 10.0 || input.rating < 0.01) {
        errors.rating = 'The rating value cannot be higher than 10.0 or less than 0.0'
    } else if (isNaN(input.rating)){
        errors.rating = 'Please, digit a number between 5.0 and 0.0'
    }

    if(!input.description.trim()){
        errors.description='Please, write a description for your videogame'
    } else if(input.description.length < 10 || input.description.length > 100){
        errors.description='The description must have more than 10 characters and less than 100'
    }

    if(!input.image.trim()){
        errors.image = 'Please, insert a url for your videogame image'
    } else if(!regexImg.test(input.image.trim())){
        errors.image = 'Insert a correct image url'
    }

    if(input.release){
        errors.released = 'Please, insert a released date for your videogame'
    }

    if(input.platforms.length === 0){
        errors.platforms ='Please, insert at least a platform for your videogame'
    }
    if(input.genres.length === 0){
        errors.genres ='Please, insert at least a genre for your videogame'
    }


    return errors;

}

export default validate;