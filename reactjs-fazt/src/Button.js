import PropTypes from 'prop-types'

export function Button({text,name}){
    console.log(text)
    if(!text){
        console.error('el texto es necesario')
    }

    return <button onClick={function(){
        console.log('Holaa mundo')
    }}>
        {text}-{name}
    </button>
}

Button.propTypes={
    text:PropTypes.string.isRequired
}

Button.defaultProps={
    name:'Some user'
}