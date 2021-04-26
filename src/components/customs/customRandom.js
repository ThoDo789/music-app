
import PropTypes from 'prop-types';
 useRandom.propTypes = {
    dataLenght:PropTypes.number.isRequired,
    currentIndex:PropTypes.number.isRequired,
};

function useRandom(dataLength,currentIndex) {
        let randomIndex;
        do{
         randomIndex = currentIndex = Math.floor(Math.random() * dataLength)
        }while( randomIndex!==currentIndex)
      
    return randomIndex
}

export default useRandom;