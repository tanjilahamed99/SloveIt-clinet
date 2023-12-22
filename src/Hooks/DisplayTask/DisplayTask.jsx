import PropTypes from 'prop-types';

const DisplayTask = ({ task }) => {
    const { tittle, desc, deadline, priority } = task
    return (
        <div className='border-2 p-5 rounded-2xl'>
            <h2 className="font=-bold text-xl" >Tittle: {tittle}</h2>
            <h2 className="font=-bold text-xl" >Tittle: {priority}</h2>
            <h2 className="font=-bold text-xl" >Tittle: {deadline}</h2>
            <h2 className="font=-bold text-xl" >Tittle: {desc}</h2>
        </div>
    );
};

DisplayTask.propTypes = {
    task: PropTypes.object
};

export default DisplayTask;