import PropTypes from 'prop-types'

const ProjectList = ({ projects }) => {

  ProjectList.propTypes = {
    projects: PropTypes.array
  }

  return (
    <div className="w-full columns-3 gap-4">
      {projects.map(({img, category}, index) => (
        <img className='block w-full mb-4 h-auto' key={`project-${index}`} src={img} alt={`${category}-${index}`} />
      ))}
    </div>
  )
}

export default ProjectList