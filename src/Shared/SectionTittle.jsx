import PropTypes from 'prop-types';

const SectionTittle = ({ tittle, subTittle }) => {
    return (
        <div className='text-center my-5'>
            <h2 className='text-sm font-bold'>--{subTittle}--</h2>
            <h2 className='text-3xl font-semibold'>{tittle}</h2>
        </div>
    );
};

SectionTittle.propTypes = {
    tittle:PropTypes.string,
    subTittle:PropTypes.string
};

export default SectionTittle;